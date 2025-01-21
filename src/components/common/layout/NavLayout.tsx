import {Outlet, useSearchParams} from 'react-router-dom';
import {LightBox} from './LightBox';
import {NavigationBar} from './NavigationBar';
import styled from '@emotion/styled';
import Notification from './Notification';
import {COMMON} from '@styles/common';
import Friends from '@components/features/friends';

export const NavLayout = () => {
  const [searchParams] = useSearchParams();
  const isQuestion = searchParams.get('question');

  return (
    <Wrapper>
      <LightBox backgroundColor={isQuestion ? COMMON.color.grayFont : undefined}>
        <NavigationBar />
        <Outlet />
      </LightBox>
      {!isQuestion ? (
        <Container>
          <Friends />
          <Notification />
        </Container>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: absolute;
  right: -260px;
`;
