import styled from '@emotion/styled';
import questions from './mockdata';
import {Question} from '@type/question';
import {COMMON} from '@styles/common';
import Questions from '@components/common/Questions';

const QuestionList = () => {
  const groupQuestionsByDate = (questions: Question[]) => {
    const groupedQuestions = questions.reduce<Record<string, Question[]>>((acc, question) => {
      const {date} = question;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(question);
      return acc;
    }, {});

    return Object.fromEntries(Object.entries(groupedQuestions).sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime()));
  };

  const groupedQuestions = groupQuestionsByDate(questions);
  return (
    <Wrapper>
      <TopWrapper>
        <Title>내가 받은 질문들이에요.</Title>
        <Filter></Filter>
      </TopWrapper>
      {/* TODO: map key 추가 */}
      {Object.entries(groupedQuestions).map((questions) => (
        <div>
          <ReceiveDate>{questions[0]}</ReceiveDate>
          <Questions questions={questions[1].map((question) => question.question)} />
        </div>
      ))}
    </Wrapper>
  );
};

export default QuestionList;

const Wrapper = styled.div`
  padding: 64px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const Filter = styled.select``;

const ReceiveDate = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${COMMON.color.grayFont};
  margin: 64px 0 24px;
`;
