import styled from '@emotion/styled';
import {COMMON} from '@styles/common';

const Notification = () => {
  return <Wrapper>알림</Wrapper>;
};
export default Notification;

const Wrapper = styled.div`
  width: 240px;
  height: 600px;
  background-color: ${COMMON.color.lightBackgroundColor};
  border-radius: 30px;
`;
