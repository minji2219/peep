import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {friendsDetail} from '../../mockdata';
import HashTag from './HashTag';
import {BsX} from 'react-icons/bs';
import {AiOutlineMore} from 'react-icons/ai';
import {Button} from '@components/common/Button';
import {Dispatch, SetStateAction, useState} from 'react';

interface Props {
  setIsDetail: Dispatch<SetStateAction<boolean>>;
}
const Detail = ({setIsDetail}: Props) => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <Wrapper>
      <Menu onClick={() => setMenuClick(!menuClick)}>
        <AiOutlineMore size={30} />
        {menuClick && (
          <MenuBtns>
            <Button bgColor="white" color="black" onClick={() => {}} style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'}}>
              차단
            </Button>
            <Button bgColor="white" color="black" onClick={() => {}} style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'}}>
              신고
            </Button>
          </MenuBtns>
        )}
      </Menu>

      <CloseBtn
        onClick={() => {
          setIsDetail(false);
        }}
      >
        <BsX size={40} />
      </CloseBtn>

      <Profile profile={friendsDetail.profile} />
      <Name>{friendsDetail.name}</Name>
      <Community>
        {friendsDetail.grade}학년 {friendsDetail.class}반
      </Community>

      <Container>
        <FollowBtn>맞팔로우</FollowBtn>
        <FollowWrapper>
          <Follow>
            <div>팔로워</div>
            <div style={{fontWeight: 'bold'}}>{friendsDetail.follower}</div>
          </Follow>
          <Follow>
            <div>팔로잉</div>
            <div style={{fontWeight: 'bold'}}>{friendsDetail.following}</div>
          </Follow>
        </FollowWrapper>
      </Container>

      <Space />
      <HashTags>
        <HashTag tags={friendsDetail.hashtags.hobby} />
        <HashTag tags={friendsDetail.hashtags.personality} />
      </HashTags>
    </Wrapper>
  );
};
export default Detail;

const Wrapper = styled.div`
  position: relative;
  width: 320px;
  padding: 40px 24px;
  border-radius: 30px;
  background-color: ${COMMON.color.lightBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const CloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  color: ${COMMON.color.grayFont};
`;

const Menu = styled.div`
  position: absolute;
  cursor: pointer;
  left: 15px;
  top: 20px;
  color: ${COMMON.color.grayFont};
`;

const MenuBtns = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 15px;
  left: 10px;
`;

const Profile = styled.div`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  background-image: url(${(props: {profile: string}) => props.profile});
  background-size: cover;
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Community = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${COMMON.color.grayFont};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const FollowWrapper = styled.div`
  background-color: ${COMMON.color.lightBackgroundColor};
  border-radius: 50px;
  padding: 16px 50px;
  box-shadow: ${COMMON.boxShadow.primary};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${COMMON.color.grayFont};
`;

const FollowBtn = styled.div`
  cursor: pointer;
  border-radius: 30px;
  color: white;
  background-color: ${COMMON.color.primary};
  padding-top: 60px;
  padding-bottom: 10px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 30px;
`;

const Space = styled.div`
  margin-top: 20px;
`;

const HashTags = styled.div`
  width: 100%;
  height: 220px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
