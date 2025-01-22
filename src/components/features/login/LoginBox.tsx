import {Button} from '@components/common/Button';
import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {PATH} from '@routes/path';
import {COMMON} from '@styles/common';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {DeviceUUID} from 'device-uuid';
import {useMutation} from '@tanstack/react-query';
import {fetchInstance} from 'api/instance';

interface FormValues {
  id: string;
  password: string;
  autoLogin?: boolean;
}
interface LoginValues extends FormValues {
  uuid: string;
}
export const LoginBox = () => {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm<FormValues>();

  const {mutate} = useMutation({
    mutationFn: async (data: LoginValues) =>
      await fetchInstance.post(
        '/auth/login',
        {
          userId: data.id,
          userPassword: data.password,
        },
        {
          headers: {
            'Device-Id': data.uuid,
          },
        }
      ),
    onSuccess: (response) => {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('userId', response.data.id);
      navigate(PATH.main);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const getLogin: SubmitHandler<FormValues> = (postData) => {
    // TODO: 로그인 실패시 에러 캐치하는 방법 찾아보기
    try {
      //uuid를 못 가져왔을 때 error캐치
      const uuid = new DeviceUUID().get();
      mutate({...postData, uuid: uuid});
      navigate(PATH.main);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Description>
        <PeepColor>핍</PeepColor>할 준비,
        <br />
        되셨나요?
      </Description>

      <Form onSubmit={handleSubmit(getLogin)}>
        <Input placeholder="아이디" {...register('id', {required: true})} />
        <Input placeholder="비밀번호" {...register('password', {required: true})} />
        <Label>
          <Checkbox type="checkbox" {...register('autoLogin')} />
          자동 로그인
        </Label>
        <Button onClick={() => {}}>로그인</Button>
        <Button type="button" onClick={() => navigate(PATH.agree)} bgColor={COMMON.color.darkGray}>
          회원가입
        </Button>
        <Button type="button" onClick={() => {}} bgColor="transparent" style={{color: COMMON.color.lightBlack}}>
          계정을 잊어버리셨나요?
        </Button>
      </Form>

      <SimpleLoginWrapper>
        <Line />
        <SimpleLogin>간편 로그인</SimpleLogin>
        <Line />
      </SimpleLoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  box-sizing: border-box;
  background-color: ${COMMON.color.lightBackgroundColor};
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  color: ${COMMON.color.lightBlack};
  cursor: pointer;
  margin-bottom: 48px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  margin-left: 40px;
`;

const SimpleLoginWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 64px;
`;

const Line = styled.hr`
  border: 0;
  background-color: ${COMMON.color.lightGray};
  width: 100%;
  height: 1px;
`;

const SimpleLogin = styled.div`
  color: ${COMMON.color.lightBlack};
  white-space: nowrap;
`;
