import styled from '@emotion/styled';
import FollowList from './FollowList';
import {useState} from 'react';
import {Dispatch, SetStateAction} from 'react';
import {COMMON} from '@styles/common';
import {useQuery} from '@tanstack/react-query';
import {fetchAuthInstance} from 'api/instance';
import {useAuth} from 'provider/Auth';
import {friends} from '@type/friends';

interface Props {
  setIsDetail: Dispatch<SetStateAction<boolean>>;
}
const FollowFollowerList = ({setIsDetail}: Props) => {
  const [followerClick, setFollwerClick] = useState<boolean>(true);
  const [followingClick, setFollowingClick] = useState<boolean>(false);
  const {authInfo} = useAuth();
  const [following, setFollowing] = useState<friends[]>();
  const [follower, setFollower] = useState<friends[]>();

  useQuery({
    queryKey: ['following'],
    queryFn: async () => {
      const response = await fetchAuthInstance.get(
        `follow/getFollowingList?userId=${authInfo?.userId}`
      );
      setFollowing(response.data);
      return response.data;
    },
  });

  useQuery({
    queryKey: ['follower'],
    queryFn: async () => {
      const response = await fetchAuthInstance.get(
        `/follow/getFollowerList?userId=${authInfo?.userId}`
      );
      setFollower(response.data);
      return response.data;
    },
  });

  return (
    <>
      <Description>
        <Follow active={followerClick}>팔로워</Follow>
        <Follow active={followingClick}>팔로잉</Follow>
      </Description>
      <FollowListBox>
        {/* 팔로워 목록 */}
        <FollowList
          friends={follower || []}
          setIsDetail={setIsDetail}
          active={followerClick}
          onClick={() => {
            setFollwerClick(true);
            setFollowingClick(false);
          }}
        />
        {/* 팔로잉 목록 */}
        <FollowList
          friends={following || []}
          setIsDetail={setIsDetail}
          active={followingClick}
          onClick={() => {
            setFollwerClick(false);
            setFollowingClick(true);
          }}
          position="absolute"
        />
      </FollowListBox>
    </>
  );
};

export default FollowFollowerList;

const Description = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Follow = styled.div`
  color: ${(props: {active: boolean}) =>
    props.active ? COMMON.color.grayFont : COMMON.color.darkGray};
`;

const FollowListBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
