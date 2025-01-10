import styled from '@emotion/styled';
import RandomQuestion from './question';

interface Props {
  questions: string[];
  isPick?: boolean;
  handleQuestionClick?: () => void;
}
const Questions = ({questions, handleQuestionClick, isPick}: Props) => {
  return (
    <Cotainer>
      {questions.map((question) => (
        <RandomQuestion question={question} isPick={isPick} handleQuestionClick={handleQuestionClick} />
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
