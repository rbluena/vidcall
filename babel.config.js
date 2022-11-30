// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: false,
          verbose: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~': ['./'],
            '@app': ['./app'],
          },
        },
      ],
    ],
  };
};
