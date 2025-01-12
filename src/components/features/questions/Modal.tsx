import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Question} from '@type/question';
import {BsX} from 'react-icons/bs';
import MainCharacterPupple from '@assets/MainCharacterRightEyes.png';
import Eyes from '@assets/Eyes.png';
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  onRequestClose: () => void;
  selectedQuestion: Question | undefined;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
  arrLength: number;
}
const Modal = ({onRequestClose, selectedQuestion, currentIndex, setSelectedIndex, arrLength}: Props) => {
  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setSelectedIndex(arrLength - 1);
      return;
    }
    setSelectedIndex(currentIndex - 1);
  };
  const handleRightClick = () => {
    if (currentIndex === arrLength - 1) {
      setSelectedIndex(0);
      return;
    }
    setSelectedIndex(currentIndex + 1);
  };

  return (
    <Around>
      <Arrow onClick={handleLeftClick}>
        <BsChevronLeft size={20} />
      </Arrow>

      <Wrapper>
        <CloseBtn onClick={onRequestClose}>
          <BsX size={40} />
        </CloseBtn>
        <Date>{selectedQuestion?.date}</Date>
        <Title>
          <Sex>{selectedQuestion?.sex === 'male' ? '남학생' : '여학생'}</Sex>이 보낸 질문
        </Title>
        <QuestionBox>
          <EyesCharcter src={Eyes} width="70" />
          {selectedQuestion?.question}
        </QuestionBox>
        <Badge>
          누가 날 <span style={{color: COMMON.color.primary}}>PICK</span> 했을까?
        </Badge>
        <PeepBtn>50코인으로 PEEP하기</PeepBtn>
        <MyCoin>내 코인 : 2000코인</MyCoin>
        <MainCharacter src={MainCharacterPupple} width="180" />
      </Wrapper>

      <Arrow onClick={handleRightClick}>
        <BsChevronRight size={20} />
      </Arrow>
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

const Wrapper = styled.div`
  padding: 20px;
  background-color: ${COMMON.color.darkBackgroundColor};
  color: ${COMMON.color.darkGray};
  border-radius: 30px;
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
`;

const Date = styled.div``;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Sex = styled.span`
  color: ${COMMON.color.yellow};
`;

const QuestionBox = styled.div`
  width: 100%;
  height: 240px;
  font-size: 30px;
  background-color: ${COMMON.color.grayFont};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 30px;
  position: relative;
`;

const EyesCharcter = styled.img`
  position: absolute;
  right: 80px;
  top: -40px;
`;

const Badge = styled.div`
  border-radius: 50px;
  width: 50%;
  text-align: center;
  padding: 30px 0;
  font-size: 24px;
  color: black;
  background-color: ${COMMON.color.lightGray};
`;

const PeepBtn = styled.div`
  color: white;
  width: 40%;
  font-size: 24px;
  border-radius: 50px;
  padding: 12px 0;
  text-align: center;
  background: linear-gradient(45deg, ${COMMON.color.yellow}, ${COMMON.color.primary});
  cursor: pointer;
`;

const MyCoin = styled.div``;

const MainCharacter = styled.img`
  position: absolute;
  left: -80px;
  bottom: 20px;
`;

const Arrow = styled.div`
  background-color: ${COMMON.color.darkBackgroundColor};
  border-radius: 50%;
  color: ${COMMON.color.lightGray};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
