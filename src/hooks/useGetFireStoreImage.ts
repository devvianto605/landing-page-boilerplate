import { useQuery } from '@tanstack/react-query';
import { getImage } from '@utils/firestorage';

const useGetFireStoreImage = (storagePath: string) => {
  return useQuery({
    queryFn: async () => getImage(storagePath),
    queryKey: ['firestore-image', storagePath],
  });
};

export default useGetFireStoreImage;
