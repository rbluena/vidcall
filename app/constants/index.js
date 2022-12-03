/* eslint-disable import/prefer-default-export */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
  width,
  height,
  horizontalPadding: width * 0.08,
  verticalPadding: height * 0.08,
};
