import styled from '@emotion/styled';
import questions from './mockdata';
import {Question} from '@type/question';
import {COMMON} from '@styles/common';
import Questions from '@components/common/Questions';
import Filter from '@components/features/questions/Filter';
import {useEffect, useMemo, useState} from 'react';
import ReactModal from 'react-modal';
import Modal from '@components/features/questions/Modal';
import {receiveQuestion} from '@styles/modal';

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
  const groupedQuestions = useMemo(() => groupQuestionsByDate(questions), [questions]);
  const [filteredQuestions, setFilteredQuestions] = useState(groupedQuestions);
  const [filter, setFilter] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredQuestionArr, setFilteredQuestionArr] = useState<Question[]>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const filtered = Object.fromEntries(
      Object.entries(groupedQuestions).map(([key, value]) => {
        if (filter === 'hint') {
          return [key, value.filter((item) => item.hint !== null)];
        }
        if (filter === 'male') {
          return [key, value.filter((item) => item.sex === 'male')];
        }
        if (filter === 'female') {
          return [key, value.filter((item) => item.sex === 'female')];
        }
        return [key, value];
      })
    );
    const filteredArr = Object.values(filtered).flatMap((arr) => arr);
    setFilteredQuestionArr(filteredArr);
    setFilteredQuestions(filtered);
  }, [filter]);

  const handleQuestionClick = (question: Question) => {
    //처음 클릭된 질문의 index 찾기
    const index = filteredQuestionArr?.findIndex((q) => q.date === question.date && q.question === question.question) ?? 0;
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <TopWrapper>
        <Title>내가 받은 질문들이에요.</Title>
        <Filter setFilter={setFilter} />
      </TopWrapper>
      {/* TODO: map key 추가 */}
      {Object.entries(filteredQuestions).map((questions) => (
        <div>
          {questions[1].length > 0 && <ReceiveDate>{questions[0]}</ReceiveDate>}
          <Questions questions={questions[1]} handleQuestionClick={handleQuestionClick} />
        </div>
      ))}
      <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={receiveQuestion}>
        <Modal
          onRequestClose={() => setIsOpen(false)}
          selectedQuestion={filteredQuestionArr && filteredQuestionArr[selectedIndex]}
          setSelectedIndex={setSelectedIndex}
          currentIndex={selectedIndex}
          arrLength={filteredQuestionArr?.length || 0}
        />
      </ReactModal>
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

const ReceiveDate = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${COMMON.color.grayFont};
  margin: 64px 0 24px;
`;
