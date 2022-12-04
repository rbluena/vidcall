import firebase from '@react-native-firebase/app';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_ID,
  FIREBASE_APP_ID,
} from '@env';

const credentials = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  databaseURL: 'undefined',
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_ID,
  appId: FIREBASE_APP_ID,
};

const initializeApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(credentials).catch(() => {});
  }
};

export default initializeApp;
