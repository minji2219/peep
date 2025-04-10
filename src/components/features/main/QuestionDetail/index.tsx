import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import CharacterYellow from '@assets/MainCharacterYellow.png';
import CharacterPupple from '@assets/MainCharacterPupple.png';
import Friends from './Friends';

const Question = ({question}: {question: string}) => {
  // TODO: 랜덤 학생 불러오기
  return (
    <Wrapper>
      <Title>누가 떠오르시나요?</Title>
      <QuestionWrapper>
        <LeftCharacter />
        <RightCharacter />
        <QuestionBox>{question}</QuestionBox>
      </QuestionWrapper>
      <Friends question={question} />
    </Wrapper>
  );
};
export default Question;

const Wrapper = styled.div`
  padding: 0 100px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const QuestionWrapper = styled.div`
  position: relative;
  margin: 24px 0 85px 0;
`;

const Character = styled.div`
  background-size: cover;
  width: 150px;
  height: 150px;
  position: absolute;
`;

const LeftCharacter = styled(Character)`
  background-image: url(${CharacterPupple});
  transform: scaleX(-1);
  left: -90px;
  bottom: 20px;
`;

const RightCharacter = styled(Character)`
  background-image: url(${CharacterYellow});
  right: -90px;
  top: 20px;
`;

const QuestionBox = styled.div`
  width: 100%;
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 40px;
  background-color: ${COMMON.color.darkGray};
  color: white;
  border-radius: 30px;
  position: relative;
  box-shadow: ${COMMON.boxShadow.primary};
`;
