import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import Follow from './Follow';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {friends} from '@type/friends';

interface Props {
  friends: friends[] | [];
  active: boolean;
  position?: string;
  onClick: () => void;
  setIsDetail: Dispatch<SetStateAction<boolean>>;
}

const FollowList = ({
  friends,
  active,
  position = 'relative',
  onClick,
  setIsDetail,
}: Props) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setScrollHeight(containerRef.current.scrollHeight);
    }
  }, []);

  return (
    <Wrapper
      ref={containerRef}
      onClick={onClick}
      position={position}
      active={active}
    >
      <Overlay active={active} scrollHeight={scrollHeight}>
        <LeftArrow onClick={() => {}}>
          <BsChevronLeft size={20} />
        </LeftArrow>
        <RightArrow onClick={() => {}}>
          <BsChevronRight size={20} />
        </RightArrow>
      </Overlay>

      {/* 미팔로우상태 우선순위 위로 */}
      {friends
        ?.sort((a, b) => {
          if (a.isFollowedByMe === b.isFollowedByMe) {
            return 0;
          }
          return a.isFollowedByMe ? 1 : -1;
        })
        .map((friend) => (
          <Follow
            profile={friend.photoDto.photoUrl}
            name={friend.name}
            follow={friend.isFollowedByMe}
            setIsDetail={setIsDetail}
          />
        ))}
    </Wrapper>
  );
};
export default FollowList;

const Wrapper = styled.div<Omit<Props, 'setIsDetail' | 'friends'>>`
  position: ${(props) => props.position};
  right: 0;
  width: 80%;
  height: 430px;
  border-radius: 40px 10px 40px 40px;
  padding: 10px 20px;
  overflow: hidden;
  background-color: white;
  transition: all 0.2s ease-in-out;

  ::-webkit-scrollbar {
    display: none;
  }

  ${(props) => {
    if (props.active) {
      return `z-index:1;
      overflow:scroll;
      box-shadow: ${COMMON.boxShadow.primary};
      `;
    }
  }}
`;

const Overlay = styled.div<{active: boolean; scrollHeight: number}>`
  opacity: ${(props: {active: boolean}) => (props.active ? '0' : '1')};
  visibility: ${(props) => (props.active ? 'hidden' : 'visible')};
  width: 100%;
  height: ${(props: {scrollHeight: number}) => `${props.scrollHeight}px`};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
`;

const Arrow = styled.div`
  background-color: ${COMMON.color.lightGray};
  border-radius: 50%;
  color: ${COMMON.color.darkBackgroundColor};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: sticky;
`;

const LeftArrow = styled(Arrow)`
  left: 30px;
  top: 160px;
`;

const RightArrow = styled(Arrow)`
  left: 450px;
  top: 160px;
`;
