import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import Arrow from '@assets/RightArrow.png';

const BigBubble = () => {
  return (
    <Wrapper>
      공통질문
      <PickArrow>
        <div>Pick!</div>
        <img src={Arrow} alt="화살표" />
      </PickArrow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: white;
  height: 180px;
  font-size: 30px;
  border-radius: 100px 200px 10px 100px;
  padding: 0 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
`;

const PickArrow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  position: absolute;
  color: ${COMMON.color.grayFont};
  cursor: pointer;
  bottom: 20px;
  right: 60px;
  &:hover {
    color: ${COMMON.color.primary};
  }
`;

export default BigBubble;
