import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  padding?: string;
}
export const LightBox = ({children, padding = '30px'}: Props) => {
  return <Wrapper padding={padding}>{children}</Wrapper>;
};

const Wrapper = styled.div<{padding: string}>((props) => ({
  backgroundColor: COMMON.color.lightBackgroundColor,
  borderRadius: '30px 30px 0 0',
  width: '100%',
  boxSizing: 'border-box',
  padding: props.padding,
}));
