import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
  },

  timerContainer: {
    backgroundColor: colors.darkRed,
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 20,
    borderRadius: 40,
  },

  timer: {
    backgroundColor: colors.mainColor,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },

  timerText: {
    color: colors.secondaryColor,
    fontSize: 30,
    fontWeight: '700',
  },
});
