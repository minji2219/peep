import {Description} from '@components/features/login/Description';
import {LoginBox} from '@components/features/login/LoginBox';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';

const Login = () => {
  return (
    <Wrapper>
      <Top>
        <Description />
        <LoginBox />
      </Top>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  max-width: ${COMMON.width.fullWidth};
  margin: auto;
  border: 1px solid red;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
