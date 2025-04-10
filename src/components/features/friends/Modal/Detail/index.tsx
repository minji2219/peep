import styled from '@emotion/styled';
import {COMMON} from '@styles/common';
import HashTag from './HashTag';
import {BsX} from 'react-icons/bs';
import {AiOutlineMore} from 'react-icons/ai';
import {Button} from '@components/common/Button';
import {Dispatch, SetStateAction, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchAuthInstance} from 'api/instance';
import {FriendDetail, hashtagDtoList} from '@type/friends';

interface Props {
  detailId: string;
  setDetailId: Dispatch<SetStateAction<string>>;
}
const Detail = ({detailId, setDetailId}: Props) => {
  const [menuClick, setMenuClick] = useState(false);
  const [detailInfo, setDetailInfo] = useState<FriendDetail>();
  const [hashtags, setHashtags] = useState<{[key: string]: string[]} | object>(
    {}
  );

  useQuery({
    queryKey: ['detail', detailId],
    queryFn: async () => {
      const response = await fetchAuthInstance.get(
        `/students?userId=${detailId}`
      );
      setDetailInfo(response.data);

      if (response.data.hashtagDtoList) {
        const result = response.data.hashtagDtoList.reduce(
          (acc: {[key: string]: string[]}, item: hashtagDtoList) => {
            const {hashtag, content} = item;
            if (!acc[hashtag]) {
              acc[hashtag] = [];
            }
            acc[hashtag].push(content);
            return acc;
          },
          {}
        );

        setHashtags(result);
      }
      return response.data;
    },
  });
  if (!detailInfo) return;

  return (
    <Wrapper>
      <Menu onClick={() => setMenuClick(!menuClick)}>
        <AiOutlineMore size={30} />
        {menuClick && (
          <MenuBtns>
            <Button
              bgColor="white"
              color="black"
              onClick={() => {}}
              style={{
                boxShadow:
                  '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
              }}
            >
              차단
            </Button>
            <Button
              bgColor="white"
              color="black"
              onClick={() => {}}
              style={{
                boxShadow:
                  '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
              }}
            >
              신고
            </Button>
          </MenuBtns>
        )}
      </Menu>

      <CloseBtn
        onClick={() => {
          setDetailId('');
        }}
      >
        <BsX size={40} />
      </CloseBtn>

      <Profile profile={detailInfo.photoDto.photoUrl} />
      <Name>{detailInfo.name}</Name>
      <Community>
        {detailInfo.grade}학년 {detailInfo.myClass}반
      </Community>

      <Container>
        <FollowBtn isFollowed={detailInfo.isFollowedByMe}>
          {detailInfo.isFollowedByMe ? '팔로잉' : '맞팔로우'}
        </FollowBtn>
        <FollowWrapper>
          <Follow>
            <div>팔로워</div>
            <div style={{fontWeight: 'bold'}}>{detailInfo.followerCount}</div>
          </Follow>
          <Follow>
            <div>팔로잉</div>
            <div style={{fontWeight: 'bold'}}>{detailInfo.followingCount}</div>
          </Follow>
        </FollowWrapper>
      </Container>

      <Space />
      <HashTags>
        {Object.entries(hashtags).map(([key, value]) => (
          <HashTag key={key} category={key} tags={value} />
        ))}
      </HashTags>
    </Wrapper>
  );
};
export default Detail;

const Wrapper = styled.div`
  position: relative;
  width: 320px;
  padding: 40px 24px;
  border-radius: 30px;
  background-color: ${COMMON.color.lightBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const CloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  color: ${COMMON.color.grayFont};
`;

const Menu = styled.div`
  position: absolute;
  cursor: pointer;
  left: 15px;
  top: 20px;
  color: ${COMMON.color.grayFont};
`;

const MenuBtns = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 15px;
  left: 10px;
`;

const Profile = styled.div`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  background-image: url(${(props: {profile: string}) => props.profile});
  background-size: cover;
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Community = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${COMMON.color.grayFont};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const FollowWrapper = styled.div`
  background-color: ${COMMON.color.lightBackgroundColor};
  border-radius: 50px;
  padding: 16px 50px;
  box-shadow: ${COMMON.boxShadow.primary};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${COMMON.color.grayFont};
`;

const FollowBtn = styled.div`
  cursor: pointer;
  border-radius: 30px;
  color: white;
  padding-top: 60px;
  padding-bottom: 10px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 30px;

  background-color: ${(props: {isFollowed: boolean}) =>
    props.isFollowed ? COMMON.color.lightBlack : COMMON.color.primary};
`;

const Space = styled.div`
  margin-top: 20px;
`;

const HashTags = styled.div`
  width: 100%;
  height: 220px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
