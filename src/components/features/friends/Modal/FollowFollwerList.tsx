import styled from '@emotion/styled';
import FollowList from './FollowList';
import {useState} from 'react';
import {Dispatch, SetStateAction} from 'react';
import {COMMON} from '@styles/common';
import {useAuth} from 'provider/Auth';
import useGetFollowers from 'api/hooks/getFollowers';
import useGetFollowings from 'api/hooks/getFollowings';
import {FriendsType} from '@type/friends';

interface Props {
  setDetailId: Dispatch<SetStateAction<string>>;
}
const FollowFollowerList = ({setDetailId}: Props) => {
  const [followerClick, setFollwerClick] = useState<boolean>(true);
  const [followingClick, setFollowingClick] = useState<boolean>(false);
  const {authInfo} = useAuth();

  const {data: follower} = useGetFollowers(authInfo?.userId || '');
  const {data: following} = useGetFollowings(authInfo?.userId || '');

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
          setDetailId={setDetailId}
          active={followerClick}
          onClick={() => {
            setFollwerClick(true);
            setFollowingClick(false);
          }}
        />
        {/* 팔로잉 목록 */}
        <FollowList
          friends={
            following?.map((friend: FriendsType) => ({
              ...friend,
              isFollowedByMe: true,
            })) || []
          }
          setDetailId={setDetailId}
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
