import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Outlet} from 'react-router-dom';
import logo from '@assets/Logo.png';
export const DefaultLayout = () => {
  return (
    <Layout>
      <Wrapper>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Outlet />
      </Wrapper>
    </Layout>
  );
};
const Layout = styled.div`
  background-color: ${COMMON.color.darkBackgroundColor};
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: ${COMMON.width.fullWidth};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.span`
  margin: 110px 0;
`;
