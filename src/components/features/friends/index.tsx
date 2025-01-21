import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {friendList} from '@styles/modal';
import {useState} from 'react';
import {BsPlus} from 'react-icons/bs';
import ReactModal from 'react-modal';
import Modal from './Modal';
const friends = [
  {name: '서민지', profile: 'https://dthezntil550i.cloudfront.net/ps/latest/ps2201272314365330022817814/1280_960/56cf6ec5-7084-48e1-a543-79b1d5908eab.png'},
  {name: '신지훈', profile: 'https://dthezntil550i.cloudfront.net/ps/latest/ps2201272314365330022817814/1280_960/56cf6ec5-7084-48e1-a543-79b1d5908eab.png'},
  {
    name: '유수민',
    profile: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20150816_146%2Fanimalnav_1439729019064A9Dqm_JPEG%2FScreenshot_2015-07-12-12-24-13_edit_edit.jpg&type=sc960_832',
  },
];
const Friends = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Title>친구</Title>
      <FriendList>
        {friends.map((friend) => (
          <Profile image={friend.profile} />
        ))}
        <Plus onClick={() => setIsOpen(true)}>
          <BsPlus size={35} />
        </Plus>
      </FriendList>
      <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={friendList}>
        <Modal />
      </ReactModal>
    </Wrapper>
  );
};
export default Friends;

const Wrapper = styled.div`
  width: 240px;
  height: 160px;
  background-color: ${COMMON.color.lightBackgroundColor};
  border-radius: 40px;
  padding: 24px;
`;

const Title = styled.div`
  font-size: 30px;
  color: ${COMMON.color.grayFont};
  font-weight: bold;
`;

const FriendList = styled.div`
  display: flex;
  margin-top: 10px;
`;

const List = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-left: -10px;
`;

const Profile = styled(List)`
  background-image: url(${(props: {image?: string}) => props.image});
  background-size: cover;
`;

const Plus = styled(List)`
  background-color: ${COMMON.color.grayFont};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;
