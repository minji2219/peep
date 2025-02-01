import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {useState} from 'react';
import {BsX} from 'react-icons/bs';
import FollowList from './FollowList';
import {Button} from '@components/common/Button';

interface Props {
  onRequestClose: () => void;
}
const Modal = ({onRequestClose}: Props) => {
  const [followerClick, setFollwerClick] = useState<boolean>(true);
  const [followingClick, setFollowingClick] = useState<boolean>(false);

  return (
    <Around>
      <Container>
        <Wrapper>
          <CloseBtn onClick={onRequestClose}>
            <BsX size={40} />
          </CloseBtn>
          <Title>MY</Title>
          <Input placeholder="이름으로 찾기" border />
          <Descript>
            <Follow active={followerClick}>팔로워</Follow>
            <Follow active={followingClick}>팔로잉</Follow>
          </Descript>
          <FollowListBox>
            <FollowList
              active={followerClick}
              onClick={() => {
                setFollwerClick(true);
                setFollowingClick(false);
              }}
            />
            <FollowList
              active={followingClick}
              onClick={() => {
                setFollwerClick(false);
                setFollowingClick(true);
              }}
              position="absolute"
            />
          </FollowListBox>
        </Wrapper>
        <Button onClick={() => {}} style={{width: '180px'}}>
          추천친구 확인하기
        </Button>
      </Container>
    </Around>
  );
};
export default Modal;

const Around = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 30px 50px;
  background-color: ${COMMON.color.lightBackgroundColor};
  font-size: 20px;
  font-weight: bold;
  border-radius: 40px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 10px;
  color: ${COMMON.color.grayFont};
`;

const Title = styled.div`
  color: ${COMMON.color.darkGray};
`;

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
