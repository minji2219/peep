import styled from '@emotion/styled';
import Follow from './Follow';
import {friends} from '../mockdata';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  setIsDetail: Dispatch<SetStateAction<boolean>>;
}
const SearchList = ({setIsDetail}: Props) => {
  return (
    <Wrapper>
      {friends
        .sort((a, b) => {
          if (a.follow === b.follow) {
            return 0;
          }
          return a.follow ? 1 : -1;
        })
        .map((friend) => (
          <Follow profile={friend.profile} name={friend.name} follow={friend.follow} setIsDetail={setIsDetail} />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 430px;
  border-radius: 40px 10px 40px 40px;
  padding: 10px 20px;
  overflow: scroll;
  background-color: white;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export default SearchList;
