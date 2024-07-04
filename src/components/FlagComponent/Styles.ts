import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
  flagContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    gap: 30,
  },

  ge: {
    borderWidth: 2,
    borderColor: colors.mainColor,
    borderRadius: 20,
  },
});
