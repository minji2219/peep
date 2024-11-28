import styled from '@emotion/styled';
import Arrow from '@assets/UnderArrow.png';
import {COMMON} from '@styles/common';
export const GradeClass = () => {
  return (
    <Wrapper>
      <Description>정확히 기재하지 않는 경우 불이익이 있을 수 있어요.</Description>
      <Selector>
        <option key={0} value={0}>
          학년
        </option>
        {[...Array(3)].map((_, idx) => (
          <option key={idx + 1} value={idx + 1}>
            {idx + 1}
          </option>
        ))}
      </Selector>
      <Selector>
        <option key={0} value={0}>
          반
        </option>
        {[...Array(15)].map((_, idx) => (
          <option key={idx + 1} value={idx + 1}>
            {idx + 1}
          </option>
        ))}
      </Selector>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 9px;
`;

const Description = styled.div`
  color: ${COMMON.color.darkGray};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  top: 10px;
  left: 95px;
`;

const Selector = styled.select`
  width: 150px;
  height: 44px;
  border-radius: 30px;
  padding: 13px;
  appearance: none;
  background: url(${Arrow}) calc(100% - 10px) center no-repeat;
  background-color: white;
`;
