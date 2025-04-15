import {Input} from '@components/common/Input';
import {LightBox} from '@components/common/layout/LightBox';
import styled from '@emotion/styled';
import {FindSchool} from './FindSchool';
import {GradeClass} from './GradeClass';
import {IdentifyVerification} from './IdentifyVerification';
import {AccountSetting} from './AccountSetting';
import {FieldErrors, useForm} from 'react-hook-form';
import {Button} from '@components/common/Button';
import {useEffect, useState} from 'react';

type FormData = {
  school: string;
  grade: number;
  class: number;
  id: string;
  password: string;
  passwordConfirm: string;
};

export const SignupBox = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: {errors},
  } = useForm<FormData>();
  const [checkedIdMessage, setCheckedMessage] = useState('');

  const signup = (data: FormData) => {
    if (!checkedIdMessage) {
      setCheckedMessage('아이디 중복확인을 해주세요.');
      return;
    }
    console.log('signup', data);
  };

  const isError = (data: FieldErrors) => {
    console.log('에러', data);
  };

  const password = watch('password');
  const passwordConfirm = watch('passwordConfirm');

  useEffect(() => {
    if (password !== undefined) {
      if (passwordConfirm && password !== passwordConfirm) {
        setError('passwordConfirm', {
          type: 'manual',
          message: '비밀번호가 일치하지 않습니다.',
        });
      } else {
        clearErrors('passwordConfirm');
      }
    }
  }, [password, passwordConfirm, setError, clearErrors]);

  return (
    <LightBox padding="80px">
      <Wrapper onSubmit={handleSubmit(signup, isError)}>
        <Label>
          <Title>학교찾기</Title>
          <FindSchool
            {...register('school', {required: '학교 이름을 검색해주세요.'})}
          />
        </Label>

        <Label>
          <Title>학년/반</Title>
          <GradeClass
            gradeRegister={register('grade', {
              required: true,
              min: {
                value: 1,
                message: '학년을 선택해주세요.',
              },
            })}
            classRegister={register('class', {
              required: true,
              min: {
                value: 1,
                message: '반을 선택해주세요.',
              },
            })}
          />
        </Label>

        <Label>
          <Title>본인인증</Title>
          <IdentifyVerification />
        </Label>

        {/* ID영역, PW영역 분리하기 */}
        <Label>
          <Title>계정설정</Title>
          <AccountSetting
            checkedIdMessage={checkedIdMessage}
            setCheckedMessage={setCheckedMessage}
            idRegister={register('id', {
              required: true,
            })}
            passwordRegister={register('password', {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/,
                message: '유효하지 않은 비밀번호 형식입니다.',
              },
            })}
            passwordConfirmRegister={register('passwordConfirm', {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/,
                message: '유효하지 않은 비밀번호 형식입니다.',
              },
            })}
            errors={{
              password: errors.password,
              passwordConfirm: errors.passwordConfirm,
            }}
          />
        </Label>
        {/* TODO:수정 필요 */}
        <Label>
          <Title>프로필 설정</Title>
          <Input placeholder="이름검색" />
        </Label>
        <Button onClick={() => {}}>회원가입 완료</Button>
      </Wrapper>
    </LightBox>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
