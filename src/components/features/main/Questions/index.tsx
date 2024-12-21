import styled from '@emotion/styled';
import Question from './question';

const Questions = () => {
  return (
    <Cotainer>
      <Question />
      <Question />

      <Question />
      <Question />
    </Cotainer>
  );
};

export default Questions;

const Cotainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
