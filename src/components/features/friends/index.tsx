import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {friendList} from '@styles/modal';
import {useState} from 'react';
import {BsPlus} from 'react-icons/bs';
import ReactModal from 'react-modal';
import Modal from './Modal';
import {friends} from './mockdata';

const Friends = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Title>친구</Title>
      <FriendList>
        {friends.slice(0, 3).map((friend) => (
          <Profile image={friend.profile} />
        ))}
        <Plus onClick={() => setIsOpen(true)}>
          <BsPlus size={35} />
        </Plus>
      </FriendList>
      <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={friendList}>
        <Modal onRequestClose={() => setIsOpen(false)} />
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
