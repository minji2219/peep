import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {forwardRef, InputHTMLAttributes, Ref} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  border?: boolean;
  type?: 'normal' | 'thin';
}
export const Input = forwardRef(({placeholder, type = 'normal', ...rest}: Props, ref: Ref<HTMLInputElement>) => {
  return <Wrapper placeholder={placeholder} type={type} {...rest} ref={ref} />;
});
const Wrapper = styled.input<{border?: boolean; type: 'normal' | 'thin'}>((props) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: props.type === 'normal' ? '14px 40px' : '13px 24px',
  borderRadius: '30px',
  fontSize: props.type === 'normal' ? '20px' : '16px',
  border: props.border ? `1px solid ${COMMON.color.lightBlack}` : 'none',
}));
