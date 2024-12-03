import {Button} from '@components/common/Button';
import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';

export const IdentifyVerification = () => {
  return (
    <Wrapper>
      <Container>
        <Input placeholder="이름" border theme="thin" />
        <SelectSex type="radio" value="남" name="sex" id="남" />
        <Label htmlFor="남">남</Label>
        <SelectSex type="radio" value="여" name="sex" id="여" />
        <Label htmlFor="여">여</Label>
      </Container>

      <Container>
        <Input placeholder="전화번호" border theme="thin" />
        <Button onClick={() => {}} border bgColor="white" color="black" padding="6px 14px">
          전송
        </Button>
      </Container>

      <Container>
        <Input placeholder="인증번호" border theme="thin" />
        <Button onClick={() => {}} border bgColor="white" color="black" padding="6px 14px">
          인증
        </Button>
      </Container>

      <Button onClick={() => {}} bgColor={COMMON.color.darkBackgroundColor}>
        패스로 인증하기
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Label = styled.label`
  border: 1px solid ${COMMON.color.lightBlack};
  width: 50px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const SelectSex = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: ${COMMON.color.lightGray};
  }
`;
