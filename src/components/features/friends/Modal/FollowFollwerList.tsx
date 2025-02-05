import styled from '@emotion/styled';
import FollowList from './FollowList';
import {useState} from 'react';
import {Dispatch, SetStateAction} from 'react';
import {COMMON} from '@styles/common';

interface Props {
  setIsDetail: Dispatch<SetStateAction<boolean>>;
}
const FollowFollowerList = ({setIsDetail}: Props) => {
  const [followerClick, setFollwerClick] = useState<boolean>(true);
  const [followingClick, setFollowingClick] = useState<boolean>(false);
  return (
    <>
      <Descript>
        <Follow active={followerClick}>팔로워</Follow>
        <Follow active={followingClick}>팔로잉</Follow>
      </Descript>
      <FollowListBox>
        <FollowList
          setIsDetail={setIsDetail}
          active={followerClick}
          onClick={() => {
            setFollwerClick(true);
            setFollowingClick(false);
          }}
        />
        <FollowList
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

const Descript = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Follow = styled.div`
  color: ${(props: {active: boolean}) => (props.active ? COMMON.color.grayFont : COMMON.color.darkGray)};
`;

const FollowListBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
