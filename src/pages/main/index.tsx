import CommonQuestion from '@components/features/main/CommonQuestion';
import Questions from '@components/common/Questions';
import Question from '@components/features/main/QuestionDetail';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {useSearchParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {fetchAuthInstance} from 'api/instance';
import {useState} from 'react';
import {receivedQuestion} from '@type/question';

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isQuestion = searchParams.get('question');
  const [questionList, setQuestionList] = useState<receivedQuestion>();
  const [question, setQuestion] = useState('');

  useQuery({
    queryKey: ['questions'],
    queryFn: async () => {
      const response = await fetchAuthInstance.get('question/getQuestionList');

      setQuestionList(response.data);
      return response.data;
    },
  });

  const handleQuestionClick = (id: number, question: string) => {
    setQuestion(question);
    setSearchParams({question: `${id}`});
  };

  return (
    <Wrapper>
      {isQuestion ? (
        <Question question={question} />
      ) : (
        <div>
          <CommonQuestion
            id={questionList?.commonQuestions[0]?.id || 0}
            question={
              questionList?.commonQuestions[0]?.questionDto?.content || ''
            }
            handleQuestionClick={handleQuestionClick}
          />
          <Description>
            <Line />이 질문들도 Pick해 보세요!
            <Line />
          </Description>
          <Questions
            questions={questionList?.randomQuestions || []}
            isPick
            handleQuestionClick={handleQuestionClick}
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 60px;
  font-size: 20px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 40px;
  color: ${COMMON.color.grayFont};
  font-weight: bold;
  white-space: nowrap;
  margin-top: 110px;
  margin-bottom: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COMMON.color.lightGray};
`;

export default Main;
