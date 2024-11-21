import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';

export const LoginBox = () => {
  return (
    <Wrapper>
      <Description>
        <PeepColor>핍</PeepColor>할 준비,
        <br />
        되셨나요?
      </Description>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
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
  background-image: linear-gradient(${COMMON.color.yellow} 0%, ${COMMON.color.primary});
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
