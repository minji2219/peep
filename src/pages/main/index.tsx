import CommonQuestion from '@components/features/main/CommonQuestion';
import styled from '@emotion/styled';

const Main = () => {
  return (
    <Wrapper>
      <CommonQuestion />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 100px 60px;
`;

export default Main;
