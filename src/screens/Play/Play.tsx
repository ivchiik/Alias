import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText, CustomHeader, WordContainer } from 'components';

import { styles } from './Styles';

export const Play = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <SafeAreaView style={styles.container}>
        <CustomHeader mainText="Play" />
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            scrollEnabled={false}
            renderItem={() => <WordContainer />}
          />
          <View style={styles.timerContainer}>
            <View style={styles.timer}>
              <AppText style={styles.timerText}>30</AppText>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
