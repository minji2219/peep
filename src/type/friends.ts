export interface FriendsType {
  isFollowedByMe: boolean;
  name: string;
  photoDto: photoDto;
  userId: string;
}

export interface FriendDetail {
  followerCount: number;
  followingCount: number;
  grade: number;
  hashtagDtoList: hashtagDtoList[];
  isFollowedByMe: boolean;
  myClass: number;
  name: string;
  photoDto: photoDto;
  userId: string;
}

type photoDto = {
  photoUrl: string;
};

export type hashtagDtoList = {
  content: string;
  id: number;
  hashtag: string;
};
