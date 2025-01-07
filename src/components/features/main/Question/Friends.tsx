import styled from '@emotion/styled';
import Friend from './Friend';
import {AiOutlineUndo} from 'react-icons/ai';
import {COMMON} from '@styles/common';
const Friends = () => {
  const names = ['서민지', '신지훈', '박인서', '유수민'];
  return (
    <Wrapper>
      <Cotainer>
        {names.map((name) => (
          //TODO: KEY값 추가하기
          <Friend name={name} />
        ))}
      </Cotainer>

      <Arrow>
        <LeftArrow>
          <AiOutlineUndo size="30" />
        </LeftArrow>
        <RightArrow>
          <AiOutlineUndo size="30" />
        </RightArrow>
        <Count>2</Count>
      </Arrow>

      <PickBtn>Pick !</PickBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Cotainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 40px;
`;

const LeftArrow = styled(Arrow)`
  cursor: pointer;
  transform: rotate(45deg);
  padding: 0;
`;

const RightArrow = styled(Arrow)`
  cursor: pointer;
  transform: scaleX(-1) rotate(45deg);
  padding: 0;
`;

const Count = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const PickBtn = styled.div`
  background-color: ${COMMON.color.darkGray};
  width: 200px;
  border-radius: 30px;
  border: 1px solid gold;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 5px 0;
  margin: 0 auto;
  cursor: pointer;
`;

export default Friends;
