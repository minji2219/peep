import styled from '@emotion/styled';
import peep from '@assets/PeepLetter.png';
import {COMMON} from '@styles/common';
export const Description = () => {
  return (
    <Wrapper>
      <DescriptionWrapper>
        나를 <PickColor>Pick</PickColor>하다
        <br /> 너를 <PeepColor>PEEP</PeepColor>하다
      </DescriptionWrapper>
      <img src={peep} alt="peep" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const DescriptionWrapper = styled.div`
  font-family: ChangwonDangamAsacBold;
  font-size: 4.5rem;
  letter-spacing: normal;
`;

const PickColor = styled.span`
  color: ${COMMON.color.yellow};
`;

const PeepColor = styled.span`
  color: ${COMMON.color.primary};
`;
