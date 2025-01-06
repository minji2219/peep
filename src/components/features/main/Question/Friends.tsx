import styled from '@emotion/styled';
import Friend from './Friend';

const Friends = () => {
  const names = ['서민지', '신지훈', '박인서', '유수민'];
  return (
    <Wrapper>
      {names.map((name) => (
        <Friend name={name} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Friends;
