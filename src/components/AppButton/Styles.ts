import { StyleSheet } from 'react-native';
import { WIDTH, colors } from '../../constants';

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 55,
    width: WIDTH - 25,
  },

  disabled: {
    backgroundColor: colors.darkRed,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 55,
    width: WIDTH - 25,
  },

  btnText: {
    color: colors.secondaryColor,
    fontSize: 14,
    fontWeight: '700',
  },

  disabledText: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: '700',
  },
});
