import React from 'react';
import { View } from 'react-native';

import { AppText } from 'components';

import { styles } from './Styles';

export const WordContainer = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.word}>Hello Iva!</AppText>
    </View>
  );
};
