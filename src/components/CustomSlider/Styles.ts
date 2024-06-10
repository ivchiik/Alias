import {StyleSheet} from 'react-native';
import {colors, WIDTH} from '../../constants';

export const styles = StyleSheet.create({
  sliderContainer: {
    backgroundColor: colors.mainColor,
    width: WIDTH - 75,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 15,
    gap: 5,
  },

  sliderPoints: {
    color: colors.secondaryColor,
    fontSize: 18,
    fontWeight: '700',
  },

  slider: {
    width: WIDTH - 125,
    height: 40,
  },

  sliderText: {
    color: colors.secondaryColor,
    fontSize: 15,
    fontWeight: '400',
  },
});
