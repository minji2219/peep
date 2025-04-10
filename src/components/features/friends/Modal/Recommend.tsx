import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {friendsDetail} from '../mockdata';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  setDetailId: Dispatch<SetStateAction<string>>;
}
const Recommend = ({setDetailId}: Props) => {
  return (
    <Wrapper
      onClick={() => {
        setDetailId('1234');
      }}
    >
      <FollowBtn>팔로우</FollowBtn>
      <Profile image={friendsDetail.profile} />
      <Detail>
        <Community>
          {friendsDetail.class}학년 {friendsDetail.grade}반
        </Community>
        <Name>{friendsDetail.name}</Name>
      </Detail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const Profile = styled.div`
  border-radius: 30px;
  width: 138px;
  height: 138px;
  background: linear-gradient(
      to bottom,
      rgba(225, 225, 225, 0) 10%,
      rgba(225, 225, 225, 0.25) 25%,
      rgba(225, 225, 225, 0.5) 50%,
      rgba(225, 225, 225, 0.75) 75%,
      rgba(225, 225, 225, 1) 100%
    ),
    url(${(props: {image?: string}) => props.image});
  background-size: cover;
  position: relative;
`;

const Detail = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Community = styled.div`
  font-size: 14px;
  color: ${COMMON.color.grayFont};
`;

const Name = styled.div`
  font-size: 20px;
`;

const FollowBtn = styled.div`
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  border-radius: 40px;
  color: white;
  background-color: ${COMMON.color.primary};
  padding-top: 110px;
  padding-bottom: 10px;
  text-align: center;
  width: 138px;
  position: absolute;
  top: 35px;
`;

export default Recommend;
