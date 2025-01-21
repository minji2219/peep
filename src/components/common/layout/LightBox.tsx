import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  padding?: string;
  backgroundColor?: string;
}

export const LightBox = ({children, padding = '', backgroundColor = COMMON.color.lightBackgroundColor}: Props) => {
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
  height: '100%',
  boxSizing: 'border-box',
  padding: props.padding,
  transition: 'background-color 0.2s ease-in-out',
}));
