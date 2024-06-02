import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppButton, AppText} from 'components';

import {styles} from './Styles';
import Alias from 'assets/images/AliasIcon.svg';

export const Main = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <SafeAreaView style={styles.container}>
        <Alias width={300} height={300} />
        <View style={styles.btnWrapper}>
          <AppButton text="Start" />
          <AppButton text="Continue" />
          <AppButton text="Settings" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
