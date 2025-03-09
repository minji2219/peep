import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import Bubble from './Bubble';
import MainCharacter from '@assets/MainCharacterPupple.png';

const CommonQuestion = ({question}: {question: string}) => {
  return (
    <Wrapper>
      <Image>
        <img src={MainCharacter} width="350" />
      </Image>
      <BubbleWrapper>
        <TitleWrapper>
          <Title>오늘의 질문!</Title>
          <Timer>00분 00초 뒤 새로운 질문</Timer>
        </TitleWrapper>
        <Bubble question={question} />
      </BubbleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
  margin-left: 40px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const Timer = styled.div`
  color: ${COMMON.color.lightBlack};
`;

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 180px;
`;

const Image = styled.div`
  position: absolute;
  transform: rotate(-5deg);
  top: -50px;
  left: -60px;
`;

export default CommonQuestion;
