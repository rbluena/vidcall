/* eslint-disable import/prefer-default-export */
import { ToastAndroid } from 'react-native';

export const toastMessage = message =>
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    0,
    150,
  );
