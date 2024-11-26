import {Description} from '@components/features/login/Description';
import {LoginBox} from '@components/features/login/LoginBox';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import PeepIcon from '@assets/PeepShadow.png';

const Login = () => {
  return (
    <Wrapper>
      <Top>
        <Image src={PeepIcon} />
        <Description />
        <LoginBox />
      </Top>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  max-width: ${COMMON.width.fullWidth};
  margin: 130px auto;
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  position: absolute;
  right: -170px;
  top: 180px;
  z-index: -1;
`;
