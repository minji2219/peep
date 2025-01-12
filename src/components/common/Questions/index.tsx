import styled from '@emotion/styled';
import RandomQuestion from './question';
import {Question} from '@type/question';

interface Props {
  questions: Question[] | string[];
  isPick?: boolean;
  handleQuestionClick?: (q: Question) => void;
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
