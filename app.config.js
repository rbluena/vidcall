module.exports = {
  name: 'Vidcall',
  slug: 'vidcall',
  description: 'Phone call application for everyone.',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/images/splash_hd.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon_510.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.rbluena.vidcall',
    permissions: ['CAMERA', 'RECORD_AUDIO', 'READ_CONTACTS'],
  },
  plugins: [
    '@react-native-firebase/app',
    '@react-native-firebase/auth',
    [
      'expo-image-picker',
      {
        photosPermission: 'Vidcall would like to access your photos.',
      },
    ],
  ],
  web: {
    favicon: './assets/images/favicon.png',
  },
};
