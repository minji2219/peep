import styled from '@emotion/styled';
import {PATH} from '@routes/path';
import {COMMON} from '@styles/common';
import {useMutation} from '@tanstack/react-query';
import {fetchInstance} from 'api/instance';
import {useLocation, useNavigate} from 'react-router-dom';
import {DeviceUUID} from 'device-uuid';
import {useAuth} from 'provider/Auth';

export const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const authInfo = useAuth();

  const {mutate} = useMutation({
    mutationFn: async (data: string) =>
      await fetchInstance.post(
        '/auth/logout',
        {
          accessToken: authInfo?.accessToken,
          refreshToken: authInfo?.refreshToken,
          id: authInfo?.userId,
        },
        {
          headers: {
            Authorization: 'Bearer ' + authInfo?.accessToken,
            'Device-Id': data,
          },
        }
      ),
    onSuccess: () => {
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
      localStorage.setItem('userId', '');
      navigate(PATH.login);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const logout = () => {
    try {
      //uuid를 못 가져왔을 때 error캐치
      const uuid = new DeviceUUID().get();
      mutate(uuid);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <LoginState onClick={logout}>로그아웃</LoginState>

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
  top: -200px;
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
