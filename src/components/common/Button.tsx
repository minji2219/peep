import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {ReactNode} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;
  onClick: () => void;
}
export const Button = ({children, bgColor = COMMON.color.primary, onClick, type = 'submit', ...rest}: Props) => {
  return (
    <Wrapper type={type} onClick={onClick} bgColor={bgColor} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{bgColor: string}>((props) => ({
  backgroundColor: props.bgColor,
  fontSize: '16px',
  color: 'white',
  borderRadius: '30px',
  border: 'none',
  padding: '12px',
}));
