import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {styles} from './Styles';
import GoBack from '../../assets/images/GoBackIcon.svg';
import {AppButton, CustomHeader} from 'components';

export const Start = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <SafeAreaView style={styles.container}>
        <CustomHeader canGoBack mainText="Start" />
        <View style={styles.wrapper}>
          <AppButton text="Add team" style={styles.addTeamBtn} />
          <View style={styles.smallWrapper}>
            <AppButton text="Set points" style={styles.addTeamBtn} />
            <AppButton text="Set timer" style={styles.addTeamBtn} />
            <AppButton text="Continue" style={styles.addTeamBtn} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
