export enum ScreenRoutes {
  MAIN = 'MAIN',
  START = 'START',
  SETTINGS = 'SETTINGS',
  PLAY = 'PLAY',
  CHECK_TEAMS = 'CHECK_TEAMS',
}

export const screenOptions = {
  headerShown: false,
};

export interface RootStackParamList {
  MAIN: undefined;
  START: undefined;
  SETTINGS: undefined;
  PLAY: undefined;
  CHECK_TEAMS: undefined;
}
