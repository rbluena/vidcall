/* eslint-disable import/prefer-default-export */
import storage from '@react-native-firebase/storage';
import { FIREBASE_STORAGES } from '~/app/constants';

/**
 *
 * @param { uid: string, filePath: string}
 * @returns public path to the uploaded image.
 */
export async function uploadProfileImage({ uid, filePath }) {
  if (!uid || !filePath) throw Error('You should a proper filePath and uid!');

  const STORAGE_REFERENCE = `${FIREBASE_STORAGES.profiles.images}/${uid}`;

  const reference = storage().ref(STORAGE_REFERENCE);
  await reference.putFile(filePath);

  return reference.getDownloadURL();
}
