import styled from '@emotion/styled';
import {selectedQuestion} from '@type/question';
import {COMMON} from '@styles/common';
import Questions from '@components/common/Questions';
import Filter from '@components/features/questions/Filter';
import {useEffect, useMemo, useState} from 'react';
import ReactModal from 'react-modal';
import Modal from '@components/features/questions/Modal';
import {receiveQuestion} from '@styles/modal';
import {useQuery} from '@tanstack/react-query';
import {fetchAuthInstance} from 'api/instance';

const QuestionList = () => {
  const [selectedQuestion, setSelectedQuestion] =
    useState<selectedQuestion[]>();

  useQuery({
    queryKey: ['selectedQuestion'],
    queryFn: async () => {
      const response = await fetchAuthInstance.get(
        'question/getChosenQuestionList'
      );

      setSelectedQuestion(response.data);
      return response.data;
    },
  });

  const groupQuestionsByDate = (questions: selectedQuestion[] | undefined) => {
    if (!questions) return;

    const groupedQuestions = questions.reduce<
      Record<string, selectedQuestion[]>
    >((acc, question) => {
      const date = question.chosenDate.split('T')[0];

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(question);
      return acc;
    }, {});

    return Object.fromEntries(
      Object.entries(groupedQuestions).sort(
        ([dateA], [dateB]) =>
          new Date(dateB).getTime() - new Date(dateA).getTime()
      )
    );
  };

  const groupedQuestions = useMemo(
    () => groupQuestionsByDate(selectedQuestion),
    [selectedQuestion]
  );

  // 필터링된 질문 중 날짜별로 한번 더 필터링한 질문들
  const [filteredQuestions, setFilteredQuestions] = useState(groupedQuestions);
  const [filter, setFilter] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  // 필터링된 질문들
  const [filteredQuestionArr, setFilteredQuestionArr] =
    useState<selectedQuestion[]>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (!groupedQuestions) return;

    const filtered = Object.fromEntries(
      Object.entries(groupedQuestions).map(([key, value]) => {
        if (filter === 'hint') {
          return [key, value.filter((item) => item.hint)];
        }
        if (filter === 'male') {
          return [key, value.filter((item) => item.writerGender === 'MALE')];
        }
        if (filter === 'female') {
          return [key, value.filter((item) => item.writerGender === 'FEMALE')];
        }
        return [key, value];
      })
    );
    const filteredArr = Object.values(filtered).flatMap((arr) => arr);
    setFilteredQuestionArr(filteredArr);
    setFilteredQuestions(filtered);
  }, [filter, groupedQuestions]);

  const handleQuestionClick = (key: number) => {
    //처음 클릭된 질문의 index 찾기
    const index = filteredQuestionArr?.findIndex((q) => q.id === key) ?? 0;

    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <TopWrapper>
        <Title>내가 받은 질문들이에요.</Title>
        <Filter setFilter={setFilter} />
      </TopWrapper>

      {filteredQuestions &&
        Object.entries(filteredQuestions).map(
          ([key, value]) =>
            value.length > 0 && (
              <div key={key}>
                <ReceiveDate>{key}</ReceiveDate>
                <Questions
                  questions={value}
                  handleQuestionClick={handleQuestionClick}
                />
              </div>
            )
        )}

      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={receiveQuestion}
      >
        <Modal
          onRequestClose={() => setIsOpen(false)}
          selectedQuestion={
            filteredQuestionArr && filteredQuestionArr[selectedIndex]
          }
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
