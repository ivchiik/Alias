import {Dimensions, Platform} from 'react-native';

export const colors = {
  mainColor: '#990000',
  secondaryColor: '#FAFAFA',
  darkRed: '#610303',
  gray: '#bacaca',
  black: '#0f0101',
};

export const IS_IOS = Platform.OS === 'ios';
export const WIDTH = Dimensions.get('screen').width;
