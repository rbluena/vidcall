import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
  width,
  height,
  horizontalPadding: width * 0.08,
  verticalPadding: height * 0.08,
};

export const FIREBASE_STORAGES = {
  profiles: {
    images: 'profiles/images/',
    videos: 'profiles/videos',
    qrCodes: 'profiles/qr-codes',
  },
};
