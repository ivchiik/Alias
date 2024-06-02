import {Dimensions, Platform} from 'react-native';

export const colors = {
  mainColor: '#990000',
  secondaryColor: '#ffffff',
};

export const IS_IOS = Platform.OS === 'ios';
export const WIDTH = Dimensions.get('screen').width;
