import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flatList: {
    flex: 1,
    gap: 10,
    marginTop: 20,
  },

  smallWrapper: {
    marginBottom: 30,
  },

  addTeamBtn: {
    marginTop: 15,
  },
});
