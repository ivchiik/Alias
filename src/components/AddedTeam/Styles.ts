import { StyleSheet } from 'react-native';
import { colors, WIDTH } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: WIDTH - 30,
    backgroundColor: '#008080',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
  },

  name: {
    color: colors.secondaryColor,
    fontSize: 18,
    fontWeight: '500',
  },

  empty: {
    width: 30,
  },
});
