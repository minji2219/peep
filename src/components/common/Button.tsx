import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {ReactNode} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;
  color?: string;
  border?: string;
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

const Wrapper = styled.button<Pick<Props, 'padding' | 'border' | 'bgColor' | 'color'>>((props) => ({
  width: '100%',
  backgroundColor: props.bgColor,
  fontSize: '16px',
  color: props.color,
  borderRadius: '30px',
  border: props.border ? `1px solid ${props.border}` : 'none',
  padding: props.padding,
  whiteSpace: 'nowrap',
}));
