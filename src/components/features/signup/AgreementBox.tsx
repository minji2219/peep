import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {useState} from 'react';

export const AgreementBox = () => {
  const [isAgree, setIsAgree] = useState(false);
  return (
    <Wrapper>
      <Title>개인정보수집동의</Title>
      <Content></Content>
      <Label>
        동의합니다.
        <AgreeBtn type="radio" checked={isAgree} onClick={() => setIsAgree(!isAgree)} />
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COMMON.color.lightBackgroundColor};
  padding: 80px 160px 160px;
  border-radius: 30px 30px 0 0;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 3rem;
  color: ${COMMON.color.darkBackgroundColor};
`;

const Content = styled.div`
  background-color: ${COMMON.color.darkGray};
  width: 950px;
  height: 440px;
`;

const Label = styled.label`
  margin-top: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const AgreeBtn = styled.input`
  width: 25px;
  height: 25px;
`;
