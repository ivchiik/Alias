import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {AppButton, AppText} from 'components';

import {styles} from './Styles';
import Alias from 'assets/images/AliasIcon.svg';

export const Main = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('START' as never);
  };

  const handleContinue = () => {};

  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <SafeAreaView style={styles.container}>
        <Alias width={300} height={300} />
        <View style={styles.btnWrapper}>
          <AppButton text="Start" onPress={handleStart} />
          <AppButton text="Continue" onPress={handleContinue} />
          <AppButton text="Settings" onPress={handleContinue} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
