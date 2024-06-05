import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },

  line: {
    width: '100%',
    backgroundColor: colors.secondaryColor,
    height: 1,
    marginTop: 5,
  },

  mainText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 28,
    color: colors.secondaryColor,
  },
});
