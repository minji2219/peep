import {LightBox} from '@components/common/layout/LightBox';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  setIsAgree: Dispatch<SetStateAction<boolean>>;
}
export const AgreementBox = ({setIsAgree}: Props) => {
  return (
    <LightBox padding="80px 160px 160px">
      <Title>개인정보수집동의</Title>
      <Content></Content>
      <Label>
        동의합니다.
        <AgreeBtn type="radio" onClick={() => setIsAgree(false)} />
      </Label>
    </LightBox>
  );
};

const Title = styled.div`
  font-weight: bold;
  font-size: 3rem;
  color: ${COMMON.color.darkBackgroundColor};
`;

const Content = styled.div`
  background-color: ${COMMON.color.darkGray};
  height: 440px;
  box-sizing: border-box;
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
