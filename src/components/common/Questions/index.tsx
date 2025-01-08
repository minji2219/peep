import styled from '@emotion/styled';
import RandomQuestion from './question';

interface Props {
  questions: string[];
  isPick?: boolean;
}
const Questions = ({questions, isPick}: Props) => {
  return (
    <Cotainer>
      {questions.map((question) => (
        <RandomQuestion question={question} isPick={isPick} />
      ))}
    </Cotainer>
  );
};

export default Questions;

const Cotainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
