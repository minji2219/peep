import {Input} from '@components/common/Input';
import {LightBox} from '@components/common/layout/LightBox';
import styled from '@emotion/styled';
import {FindSchool} from './FindSchool';
import {GradeClass} from './GradeClass';
import {IdentifyVerification} from './IdentifyVerification';
import {AccountSetting} from './AccountSetting';

export const SignupBox = () => {
  return (
    <LightBox padding="80px">
      <Wrapper>
        <Label>
          <Title>학교찾기</Title>
          <FindSchool />
        </Label>

        <Label>
          <Title>학년/반</Title>
          <GradeClass />
        </Label>

        <Label>
          <Title>본인인증</Title>
          <IdentifyVerification />
        </Label>

        <Label>
          <Title>계정설정</Title>
          <AccountSetting />
        </Label>
        {/* TODO:수정 필요 */}
        <Label>
          <Title>프로필 설정</Title>
          <Input placeholder="이름검색" />
        </Label>
      </Wrapper>
    </LightBox>
  );
};

const Wrapper = styled.div`
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
