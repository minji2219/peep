import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {ReactNode} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;
  color?: string;
  border?: boolean;
  padding?: string;
  onClick: () => void;
}
export const Button = ({children, padding = '12px', bgColor = COMMON.color.primary, color = 'white', onClick, type = 'submit', ...rest}: Props) => {
  return (
    <Wrapper type={type} padding={padding} onClick={onClick} bgColor={bgColor} color={color} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{padding: string; border?: boolean; bgColor: string; color: string}>((props) => ({
  backgroundColor: props.bgColor,
  fontSize: '16px',
  color: props.color,
  borderRadius: '30px',
  border: props.border ? `1px solid ${COMMON.color.lightBlack}` : 'none',
  padding: props.padding,
  whiteSpace: 'nowrap',
}));
