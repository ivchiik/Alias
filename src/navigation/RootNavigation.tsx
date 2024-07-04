import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  RootStackParamList,
  ScreenRoutes,
  screenOptions,
} from './Navigation.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, Play, Settings, Start } from 'screens';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef();

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name={ScreenRoutes.MAIN}
          component={Main}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen
          name={ScreenRoutes.START}
          component={Start}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen
          name={ScreenRoutes.SETTINGS}
          component={Settings}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen
          name={ScreenRoutes.PLAY}
          component={Play}
          options={{ animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
