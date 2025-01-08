import {Button} from '@components/common/Button';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';

interface Props {
  question: string;
  picked: {
    name: string;
    profile: string;
  };
  onRequestClose: () => void;
}
const Modal = ({question, picked, onRequestClose}: Props) => {
  return (
    <Wrapper>
      <Profile profile={picked.profile} />
      <Name>{picked.name}</Name>
      <Question>{question}</Question>
      <Descript>전송할게요!</Descript>
      <Warning>보낸 뒤에 변경할 수 없어요.</Warning>
      <BtnWrapper>
        <Button onClick={onRequestClose} bgColor="white" color={COMMON.color.lightBlack}>
          다시 선택하기
        </Button>
        <Button onClick={() => {}}>예</Button>
      </BtnWrapper>
    </Wrapper>
  );
};
export default Modal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div(({profile}: {profile: string}) => ({
  backgroundImage: `url(${profile})`,
  backgroundSize: 'cover',
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  marginBottom: '24px',
}));

const Name = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Question = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  background-color: white;
  border-radius: 20px;
  font-size: 24px;
  margin: 24px 0;
`;

const Descript = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const Warning = styled.div`
  font-size: 20px;
  color: ${COMMON.color.darkGray};
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
`;
