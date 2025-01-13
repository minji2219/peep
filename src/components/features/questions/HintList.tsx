import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Hint} from '@type/question';
import HintBox from './Hint';

interface Props {
  sex: string;
  hints: Hint[];
}
const HintList = ({sex, hints}: Props) => {
  return (
    <Wrapper>
      <Sex>
        이 <span style={{color: COMMON.color.yellow}}>{sex === 'male' ? '남학생' : '여학생'}</span>은...
      </Sex>
      {hints?.map((hint) => (
        <HintBox hint={hint} />
      ))}
    </Wrapper>
  );
};

export default HintList;

const Wrapper = styled.div`
  color: ${COMMON.color.grayFont};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Sex = styled.div`
  font-size: 32px;
`;
