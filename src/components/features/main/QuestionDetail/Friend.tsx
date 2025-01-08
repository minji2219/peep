import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import SpeechBubble from '@assets/FollowDetail.png';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  name: string;
  profile: string;
  setPicked: Dispatch<SetStateAction<{name: string; profile: string}>>;
}
const Friend = ({name, profile, setPicked}: Props) => {
  return (
    <Wrapper>
      <Checkbox
        type="radio"
        value={name}
        name="name"
        id={name}
        onChange={(e) => {
          setPicked({name: e.target.value, profile: profile});
        }}
      />
      <NameTag htmlFor={name}>{name}</NameTag>
      <Profile profile={profile}>
        <ProfileDetail>
          1학년 3반
          <FollowBtn>팔로우</FollowBtn>
        </ProfileDetail>
      </Profile>
    </Wrapper>
  );
};
export default Friend;

const Wrapper = styled.div`
  position: relative;
`;

const NameTag = styled.label`
  position: relative;
  width: 220px;
  height: 160px;
  background-color: ${COMMON.color.darkGray};
  border-radius: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  font-size: 30px;
  box-shadow: ${COMMON.boxShadow.primary};
  cursor: pointer;
`;

const Checkbox = styled.input`
  display: none;
  &:checked + ${NameTag} {
    background-color: ${COMMON.color.primary};
  }
`;

const ProfileDetail = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 22px;
  padding: 0 40px;
  background-image: url(${SpeechBubble});
  background-size: cover;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: -100px;
  visibility: hidden;

  &:hover {
    visibility: visible;
  }
`;

const FollowBtn = styled.div`
  background-color: ${COMMON.color.lightGray};
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
`;

const Profile = styled.div<Pick<Props, 'profile'>>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow:${COMMON.boxShadow.primary}
  background-image: url(${({profile}) => profile});
  background-size: cover;
  position: absolute;
  top:-50px;
  left:50%;
  transform: translateX(-50%);
  
  &:hover {
    ${ProfileDetail}{
      visibility: visible;
    }
  }
`;
