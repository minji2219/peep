import styled from '@emotion/styled';
import {forwardRef, InputHTMLAttributes, Ref} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
export const Input = forwardRef(({placeholder, ...rest}: Props, ref: Ref<HTMLInputElement>) => {
  return <Wrapper placeholder={placeholder} {...rest} ref={ref} />;
});
const Wrapper = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 54px;
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 20px;
  border: none;
`;
