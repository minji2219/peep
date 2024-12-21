import CommonQuestion from '@components/features/main/CommonQuestion';
import Questions from '@components/features/main/Questions';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';

const Main = () => {
  return (
    <Wrapper>
      <CommonQuestion />
      <Descript>
        <Line />이 질문들도 Pick해 보세요!
        <Line />
      </Descript>
      <Questions />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 60px;
  font-size: 20px;
`;

const Descript = styled.div`
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
