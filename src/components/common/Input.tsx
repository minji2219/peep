import styled from '@emotion/styled';

interface Props {
  placeholder: string;
}
export const Input = ({placeholder}: Props) => {
  return <Wrapper placeholder={placeholder} />;
};
const Wrapper = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 54px;
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 20px;
`;
