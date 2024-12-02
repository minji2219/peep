import {SignupBox} from '@components/features/signup/SignupBox';
import styled from '@emotion/styled';

const Signup = () => {
  return (
    <Wrapper>
      <SignupBox />
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  width: 100%;
`;
