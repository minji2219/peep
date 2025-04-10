import {useQuery} from '@tanstack/react-query';
import {fetchAuthInstance} from 'api/instance';

const useGetFollowers = (userId: string) =>
  useQuery({
    queryKey: ['follower'],
    queryFn: async () => {
      const response = await fetchAuthInstance.get(
        `follow/getFollowerList?userId=${userId}`
      );
      return response.data;
    },
  });

export default useGetFollowers;
