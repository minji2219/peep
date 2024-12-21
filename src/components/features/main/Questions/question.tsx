import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import Arrow from '@assets/RightArrow.png';

const Question = () => {
  return (
    <Wrapper>
      무작위질문
      <PickArrow>
        <div>Pick!</div>
        <img src={Arrow} alt="화살표" />
      </PickArrow>
    </Wrapper>
  );
};

export default Question;

const PickArrow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  right: 40px;
  visibility: hidden;
  &:hover {
    color: ${COMMON.color.primary};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  border-radius: 30px 30px 30px 10px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  color: ${COMMON.color.grayFont};

  &:hover {
    ${PickArrow} {
      visibility: visible;
    }
  }
`;
