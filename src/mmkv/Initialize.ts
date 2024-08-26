import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const initialGameData = {
  time: 40,
  scoreLimit: 30,
  teams: [],
};
