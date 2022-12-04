import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const usersRef = firestore().collection('Users');

const { currentUser } = auth();

/**
 * Updating authenticated user and adding new user details to the database
 * @param {Object} data User data
 */
export async function createNewUser(data) {
  await currentUser.updateProfile({
    userId: currentUser?.uid,
    displayName: data.displayName,
    photoURL: data.photoURL,
  });

  await usersRef.add(data);
}

/**
 * Updating user details by ID.
 * @param {String} id ID of the document
 */
export async function updateUserById(uid, data) {
  if (!uid || !data) {
    throw new Error('ID and data should be passed as arguments.');
  }

  await usersRef.doc(`/users/${uid}`).update(data);
}
