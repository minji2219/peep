import {Input} from '@components/common/Input';
import styled from '@emotion/styled';

export const FindSchool = () => {
  return (
    <Wrapper>
      <Input placeholder="이름 검색" border theme="thin" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
