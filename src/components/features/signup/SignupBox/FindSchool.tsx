import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {forwardRef, Ref} from 'react';

export const FindSchool = forwardRef((props, ref: Ref<HTMLInputElement>) => {
  return (
    <Wrapper>
      <Input placeholder="이름 검색" border theme="thin" {...props} ref={ref} />
    </Wrapper>
  );
});

const Wrapper = styled.div``;
