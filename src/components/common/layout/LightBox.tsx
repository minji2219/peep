import styled from '@emotion/styled';
import {BackgroundMode} from 'provider/BackgroundMode';
import {ReactNode, useContext} from 'react';

interface Props {
  children: ReactNode;
  padding?: string;
}

export const LightBox = ({children, padding = ''}: Props) => {
  const {backgroundColor} = useContext(BackgroundMode);
  return (
    <Wrapper padding={padding} background={backgroundColor}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{padding: string; background: string}>((props) => ({
  position: 'relative',
  backgroundColor: props.background,
  borderRadius: '30px 30px 0 0',
  width: '100%',
  boxSizing: 'border-box',
  padding: props.padding,
  transition: 'background-color 0.2s ease-in-out',
}));
