import {Input} from '@components/common/Input';
import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import {useState} from 'react';
import {BsX} from 'react-icons/bs';
import {Button} from '@components/common/Button';
import Detail from './Detail';
import RecommendList from './RecommedList';
import FollowFollowerList from './FollowFollwerList';
import SearchList from './SearchList';

interface Props {
  onRequestClose: () => void;
}
const Modal = ({onRequestClose}: Props) => {
  const [detailId, setDetailId] = useState<string>('');
  const [isRecommend, setIsRecommend] = useState(false);
  const [input, setInput] = useState<string>();

  const revertMain = () => {
    setIsRecommend(false);
    setInput('');
  };

  return (
    <Around>
      <Container>
        <Wrapper>
          <CloseBtn onClick={onRequestClose}>
            <BsX size={40} />
          </CloseBtn>
          <Title>MY</Title>
          <Input
            placeholder="이름으로 찾기"
            border
            onChange={(e) => {
              setInput(e.target.value);
              setIsRecommend(false);
            }}
          />
          {!isRecommend && !input && (
            <FollowFollowerList setDetailId={setDetailId} />
          )}
          {isRecommend && (
            <RecommendList revertMain={revertMain} setDetailId={setDetailId} />
          )}
          {isRecommend || (input && <SearchList setDetailId={setDetailId} />)}
        </Wrapper>
        {isRecommend || (
          <Button
            onClick={() => {
              setIsRecommend(true);
              setDetailId('');
            }}
            style={{width: '180px'}}
          >
            추천친구 확인하기
          </Button>
        )}
      </Container>
      {detailId !== '' && (
        <Detail detailId={detailId} setDetailId={setDetailId} />
      )}
    </Around>
  );
};
export default Modal;

const Around = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 30px 50px;
  background-color: ${COMMON.color.lightBackgroundColor};
  font-size: 20px;
  font-weight: bold;
  border-radius: 40px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 10px;
  color: ${COMMON.color.grayFont};
`;

const Title = styled.div`
  color: ${COMMON.color.darkGray};
`;
