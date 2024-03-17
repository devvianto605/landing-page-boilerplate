import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@configs/firebase';

export const getImage = async (storagePath: string) => {
  const imageRef = ref(storage, storagePath);

  return getDownloadURL(imageRef);
};
