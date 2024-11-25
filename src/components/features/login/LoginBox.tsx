import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {useForm} from 'react-hook-form';

export const LoginBox = () => {
  const {register} = useForm();
  return (
    <Wrapper>
      <Description>
        <PeepColor>핍</PeepColor>할 준비,
        <br />
        되셨나요?
      </Description>
      <Form>
        <Input placeholder="아이디" {...(register('id'), {required: true})} />
        <Input placeholder="비밀번호" {...(register('password'), {required: true})} />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  box-sizing: border-box;
  background-color: ${COMMON.color.backgroundColor};
  border-radius: 49.26px 0 0 0;
  padding: 80px 64px;
`;

const Description = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 114px;
`;

const PeepColor = styled.span`
  color: ${COMMON.color.primary};
`;

const Form = styled.form``;
