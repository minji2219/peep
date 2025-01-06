import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import SpeechBubble from '@assets/FollowDetail.png';

interface Props {
  name: string;
}
const Friend = ({name}: Props) => {
  return (
    <div>
      <Checkbox type="radio" name="name" id={name} />
      <NameTag htmlFor={name}>
        <Profile>
          <ProfileDetail>
            1학년 3반
            <FollowBtn>팔로우</FollowBtn>
          </ProfileDetail>
        </Profile>
        {name}
      </NameTag>
    </div>
  );
};
export default Friend;

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
  top: -110px;
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

const Profile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow:${COMMON.boxShadow.primary}
  background-image: url('https://dthezntil550i.cloudfront.net/ps/latest/ps2201272314365330022817814/1280_960/56cf6ec5-7084-48e1-a543-79b1d5908eab.png');
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
