import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Outlet} from 'react-router-dom';

export const DefaultLayout = () => {
  return (
    <Layout>
      <Wrapper>
        <Logo>PEEP</Logo>
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
  display: inline-block;
  font-family: ChangwonDangamAsacBold;
  font-size: 7rem;
  letter-spacing: normal;
  background-image: linear-gradient(to right, ${COMMON.color.yellow}, ${COMMON.color.primary});
  background-clip: text;
  color: transparent;
  margin: 110px 0;
`;
