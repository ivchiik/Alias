import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';

import {AppText, CustomHeader, CustomSlider} from 'components';

import {styles} from './Styles';
import {colors} from '../../constants';

export const Settings = () => {
  const [points, setPoints] = useState<number>(30);
  const [time, setTime] = useState<number>(30);
  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <SafeAreaView style={styles.container}>
        <CustomHeader canGoBack mainText="Settings" />
        <View style={styles.wrapper}>
          <CustomSlider
            minValue={30}
            maxValue={100}
            value={points}
            valueChange={setPoints}
            sliderText="Set points"
          />
          <CustomSlider
            minValue={30}
            maxValue={60}
            value={time}
            valueChange={setTime}
            sliderText="Set timer"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
