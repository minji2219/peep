import {Button} from '@components/common/Button';
import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Dispatch, SetStateAction, useState} from 'react';
import {FieldErrors, UseFormRegisterReturn} from 'react-hook-form';

interface Props {
  checkedIdMessage: string;
  setCheckedMessage: Dispatch<SetStateAction<string>>;
  idRegister: UseFormRegisterReturn;
  passwordRegister: UseFormRegisterReturn;
  passwordConfirmRegister: UseFormRegisterReturn;
  errors: FieldErrors;
}

export const AccountSetting = ({
  checkedIdMessage,
  setCheckedMessage,
  idRegister,
  passwordRegister,
  passwordConfirmRegister,
  errors,
}: Props) => {
  const [id, setId] = useState('');

  const checkIdAvailability = async () => {
    const fakeId = '1234';
    if (id !== fakeId) {
      setCheckedMessage('확인되었습니다.');
      return;
    }

    setCheckedMessage('이미 사용중인 아이디입니다.');
  };

  return (
    <Wrapper>
      <Label>
        아이디 설정
        <Input
          placeholder="아이디입력"
          border
          theme="thin"
          {...idRegister}
          onChange={(e) => setId(e.target.value)}
        />
        <ButtonWrapper>
          <Button
            type="button"
            onClick={checkIdAvailability}
            bgColor="white"
            color="black"
            border={COMMON.color.lightBlack}
            padding="6px"
          >
            중복확인
          </Button>
        </ButtonWrapper>
        {checkedIdMessage && <div>{checkedIdMessage}</div>}
      </Label>
      <Label>
        <div>
          비밀번호 설정
          <Description isPassword={!errors.passwordConfirm || !errors.password}>
            8글자 이상, 영문, 숫자, 특수문자(@$!%*#?&)
          </Description>
        </div>
        <Input
          type="password"
          placeholder="비밀번호입력"
          border
          theme="thin"
          {...passwordRegister}
        />
        <Input
          type="password"
          placeholder="비밀번호확인"
          border
          theme="thin"
          {...passwordConfirmRegister}
        />
        {errors.passwordConfirm && <div>비밀번호가 일치하지 않습니다.</div>}
      </Label>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const Label = styled.label`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const Description = styled.span`
  font-size: 13px;
  color: ${(props: {isPassword: boolean}) =>
    props.isPassword ? COMMON.color.lightBlack : COMMON.color.danger};
  margin-left: 10px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 43px;
  right: 10px;
`;
