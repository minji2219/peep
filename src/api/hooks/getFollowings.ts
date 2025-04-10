import {useQuery} from '@tanstack/react-query';
import {fetchAuthInstance} from 'api/instance';

const useGetFollowings = (userId: string) =>
  useQuery({
    queryKey: ['following'],
    queryFn: async () => {
      const response = await fetchAuthInstance.get(
        `follow/getFollowingList?userId=${userId}`
      );
      return response.data;
    },
  });

export default useGetFollowings;
