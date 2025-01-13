import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {Hint} from '@type/question';

interface Props {
  hint: Hint;
}
const HintBox = ({hint}: Props) => {
  const chooseDescript = () => {
    switch (hint.category) {
      case 'personality':
        return '한 성격이에요.';
      case 'hobby':
        return '가(이) 취미에요.';
      case 'name':
        return '이 이름에 들어가요.';
      default:
        return '이에요.';
    }
  };

  const gradeClass = (hint: Hint) => {
    if (hint.category === 'grade') return `${hint.hint}학년`;
    if (hint.category === 'class') return `${hint.hint}반`;
    return hint.hint;
  };
  return (
    <Wrapper>
      <HintWord>{gradeClass(hint)}</HintWord>
      <Descript>{chooseDescript()}</Descript>
    </Wrapper>
  );
};

export default HintBox;

const Wrapper = styled.div`
  width: 300px;
  height: 120px;
  border-radius: 40px;
  padding: 24px 32px;
  background-color: ${COMMON.color.darkBackgroundColor};
  position: relative;
`;

const HintWord = styled.div`
  font-size: 30px;
  color: white;
`;

const Descript = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
