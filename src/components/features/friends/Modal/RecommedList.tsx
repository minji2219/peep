import styled from '@emotion/styled';
import Recommend from './Recommend';
import {Dispatch, SetStateAction} from 'react';
import {BsChevronLeft} from 'react-icons/bs';
import {COMMON} from '@styles/common';

interface Props {
  setIsDetail: Dispatch<SetStateAction<boolean>>;
  revertMain: () => void;
}
const RecommendList = ({setIsDetail, revertMain}: Props) => {
  return (
    <Wrapper>
      <BackBtn onClick={revertMain}>
        <BsChevronLeft size={25} />
      </BackBtn>

      <Recommend setIsDetail={setIsDetail} />
      <Recommend setIsDetail={setIsDetail} />
      <Recommend setIsDetail={setIsDetail} />
      <Recommend setIsDetail={setIsDetail} />
      <Recommend setIsDetail={setIsDetail} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 24px;
  padding: 32px 0 50px;
  height: 400px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const BackBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${COMMON.color.grayFont};
`;
export default RecommendList;
