import styled from '@emotion/styled';
import Question from './question';
import {randomQuestions, selectedQuestion} from '@type/question';

interface Props {
  questions: selectedQuestion[] | randomQuestions[];
  isPick?: boolean;
  handleQuestionClick: (key: number, question: string) => void;
}
const Questions = ({questions, handleQuestionClick, isPick}: Props) => {
  if (questions.length === 0) return <div></div>;
  return (
    <Container>
      {questions.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          question={question.questionDto.content}
          isPick={isPick}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </Container>
  );
};

export default Questions;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
