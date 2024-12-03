import {Button} from '@components/common/Button';
import {Input} from '@components/common/Input';
import styled from '@emotion/styled';

export const AccountSetting = () => {
  return (
    <Wrapper>
      <Label>
        아이디 설정
        <Input placeholder="아이디입력" border theme="thin" />
        <ButtonWrapper>
          <Button onClick={() => {}} bgColor="white" color="black" border padding="6px">
            중복확인
          </Button>
        </ButtonWrapper>
      </Label>
      <Label>
        비밀번호 설정
        <Input type="password" placeholder="비밀번호입력" border theme="thin" />
        <Input type="password" placeholder="비밀번호확인" border theme="thin" />
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

const ButtonWrapper = styled.div`
  position: absolute;
  top: 43px;
  right: 10px;
`;
