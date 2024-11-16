import React from 'react';
import { ImageBackground, View } from 'react-native';

import { AppText } from 'components';

import { styles } from './Styles';

export const CheckTeams = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <View style={styles.container}>
        <AppText>Hello Iva!</AppText>
      </View>
    </ImageBackground>
  );
};
