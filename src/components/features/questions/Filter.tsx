import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import Arrow from '@assets/UnderArrow.png';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  setFilter: Dispatch<SetStateAction<string>>;
}
const Filter = ({setFilter}: Props) => {
  const OPTIONS = [
    {string: '모든 질문', value: 'all'},
    {string: '힌트를 본 질문', value: 'hint'},
    {string: '남학생이 보낸 질문', value: 'male'},
    {string: '여학생이 보낸 질문', value: 'female'},
  ];
  return (
    <Wrapper
      onChange={(e) => {
        setFilter(e.currentTarget.value);
      }}
    >
      {OPTIONS.map((option) => (
        <option value={option.value}>{option.string}</option>
      ))}
    </Wrapper>
  );
};
export default Filter;

const Wrapper = styled.select`
  outline: none;
  appearance: none;
  background: url(${Arrow}) calc(100% - 10px) center no-repeat;
  padding: 16px 100px 16px 110px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid ${COMMON.color.darkGray};
  background-color: ${COMMON.color.lightBackgroundColor};
`;
