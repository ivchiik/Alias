import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export interface TeamProps {
  id: string;
  name: string;
  points: number;
}

interface GameDataProps {
  time: number;
  scoreLimit: number;
  teams: TeamProps[];
}

export const initialGameData: GameDataProps = {
  time: 40,
  scoreLimit: 30,
  teams: [],
};
