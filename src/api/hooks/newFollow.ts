import {useMutation} from '@tanstack/react-query';
import {fetchAuthInstance} from 'api/instance';
import {queryClient} from 'api/QueryClient';

const useNewFollow = (userId: string) =>
  useMutation({
    mutationFn: async () =>
      await fetchAuthInstance.post('follow/newFollow', {
        userId: userId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['follower']});
      queryClient.invalidateQueries({queryKey: ['following']});
    },
    onError: (error) => {
      console.log(error);
    },
  });

export default useNewFollow;
