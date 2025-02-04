import styled from '@emotion/styled';
import {COMMON} from '@styles/common';

interface Props {
  tags: string[];
}
const HashTag = ({tags}: Props) => {
  return (
    <Wrapper>
      <Introduce>제 취미는</Introduce>
      <Tags>
        {tags.map((tag) => (
          <Tag>#{tag}</Tag>
        ))}
      </Tags>
      <End>입니다</End>
    </Wrapper>
  );
};
export default HashTag;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

const Introduce = styled.div`
  color: ${COMMON.color.grayFont};
  font-weight: bold;
  font-size: 20px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.div`
  border-radius: 20px;
  padding: 10px 24px;
  background-color: white;
`;

const End = styled.div`
  color: ${COMMON.color.grayFont};
  font-weight: bold;
  font-size: 20px;
  text-align: end;
`;
