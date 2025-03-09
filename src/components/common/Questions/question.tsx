import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import Arrow from '@assets/RightArrow.png';
import {useSearchParams} from 'react-router-dom';
interface Props {
  id: number;
  question: string;
  isPick?: boolean;
  handleQuestionClick: (key: number) => void;
}

const RandomQuestion = ({id, question, isPick, handleQuestionClick}: Props) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <Wrapper isPick={isPick} onClick={() => handleQuestionClick(id)}>
      {question}
      {isPick && (
        <PickArrow onClick={() => setSearchParams({question: '111'})}>
          <div>Pick!</div>
          <img src={Arrow} alt="화살표" />
        </PickArrow>
      )}
    </Wrapper>
  );
};

export default RandomQuestion;

const PickArrow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  right: 40px;
  visibility: hidden;
  &:hover {
    color: ${COMMON.color.primary};
  }
`;

const Wrapper = styled.div<Pick<Props, 'isPick'>>`
  font-size: 24px;
  width: 100%;
  padding: 40px;
  border-radius: 30px 30px 30px 10px;
  background-color: white;
  box-shadow: ${COMMON.boxShadow.primary}
  position: relative;
  color: ${COMMON.color.grayFont};
  ${(props) => props.isPick || 'cursor:pointer;'}

  &:hover {
    ${PickArrow} {
      visibility: visible;
    }
  }
`;
