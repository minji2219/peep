import {LightBox} from '@components/common/layout/LightBox';
import styled from '@emotion/styled';
import {PATH} from '@routes/path';
import {COMMON} from '@styles/common';
import {useNavigate} from 'react-router-dom';

export const Agree = () => {
  const navigate = useNavigate();

  return (
    <LightBox padding="80px 160px 160px">
      <Title>개인정보수집동의</Title>
      <Content></Content>
      <Label>
        동의합니다.
        <AgreeBtn type="radio" onClick={() => navigate(PATH.signup)} />
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
  cursor: pointer;
`;
