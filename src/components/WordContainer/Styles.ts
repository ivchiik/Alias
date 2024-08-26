import { StyleSheet } from 'react-native';
import { WIDTH, colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainColor,
    width: WIDTH - 60,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 30,
  },

  word: {
    color: colors.secondaryColor,
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 13,
  },
});
