import React from 'react';
import { View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { AppButton, FlagComponent } from 'components';

import { styles } from './Styles';
import Alias from 'assets/images/AliasIcon.svg';

export const Main = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('START' as never);
  };

  const handleContinue = () => {};

  const handleSettings = () => {
    navigation.navigate('SETTINGS' as never);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <SafeAreaView style={styles.container}>
        <Alias width={300} height={300} />
        <FlagComponent />
        <View style={styles.btnWrapper}>
          <AppButton text="Start" onPress={handleStart} />
          <AppButton text="Continue" onPress={handleContinue} disabled />
          <AppButton text="Settings" onPress={handleSettings} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
