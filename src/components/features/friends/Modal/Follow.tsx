import {Button} from '@components/common/Button';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  profile: string;
  name: string;
  follow: boolean; //follow:true =>팔로우 상태, follow:false => 미팔로우 상태
  setIsDetail: Dispatch<SetStateAction<boolean>>;
}

const Follow = ({profile, name, follow, setIsDetail}: Props) => {
  return (
    <Wrapper>
      <Profile onClick={() => setIsDetail(true)}>
        <ProfileImage profile={profile} />
        <Name>{name}</Name>
      </Profile>
      <Button
        bgColor={follow ? COMMON.color.lightBackgroundColor : ''}
        color={follow ? COMMON.color.darkGray : 'white'}
        padding="2px 10px"
        style={{width: '100px', height: '30px', background: follow ? '' : `linear-gradient(40deg, ${COMMON.color.darkBackgroundColor}, ${COMMON.color.primary})`}}
        onClick={() => {}}
      >
        {follow ? '팔로잉' : '팔로우'}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-image: url(${(props: {profile: string}) => props.profile});
  background-size: cover;
`;

const Name = styled.div``;

export default Follow;
