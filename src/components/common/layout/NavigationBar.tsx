import styled from '@emotion/styled';
import {PATH} from '@routes/path';
import {COMMON} from '@styles/common';
import {useLocation, useNavigate} from 'react-router-dom';

export const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LoginState>로그인</LoginState>

      <MenuList>
        <Menu onClick={() => navigate(PATH.questions)} presentPage={location.pathname === PATH.questions}>
          질문리스트
        </Menu>
        <Menu onClick={() => navigate(PATH.main)} presentPage={location.pathname === PATH.main}>
          홈
        </Menu>
        {/* <Menu onClick={() => navigate(PATH.friends)} presentPage={location.pathname === PATH.friends}>
          친구
        </Menu> */}
        <Menu onClick={() => navigate(PATH.mypage)} presentPage={location.pathname === PATH.mypage}>
          마이페이지
        </Menu>
      </MenuList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
`;

const LoginState = styled.div`
  position: absolute;
  color: ${COMMON.color.darkGray};
  cursor: pointer;
  right: 0;
  top: -270px;
`;

const MenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const Menu = styled.div<{presentPage: boolean}>`
  font-size: 30px;
  cursor: pointer;
  padding: 9px 40px;
  white-space: nowrap;
  ${(props) => {
    if (props.presentPage) {
      return `
        color:white;
        border:1px solid gold;
        border-radius:30px;
        background-color:${COMMON.color.darkGray}
      `;
    }
    return `
      color:${COMMON.color.darkGray};
      font-weight:normal;
    `;
  }}
`;
