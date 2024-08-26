import React, { useEffect, useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomHeader, CustomSlider } from 'components';
import { initialGameData, storage } from '../../mmkv/Initialize';

import { styles } from './Styles';

export const Settings = () => {
  const [points, setPoints] = useState<number>(initialGameData.scoreLimit);
  const [time, setTime] = useState<number>(initialGameData.time);

  useEffect(() => {
    const savedPoints = storage.getNumber('scoreLimit');
    const savedTime = storage.getNumber('time');

    if (savedPoints !== undefined) {
      setPoints(savedPoints);
    }
    if (savedTime !== undefined) {
      setTime(savedTime);
    }
  }, []);

  useEffect(() => {
    storage.set('scoreLimit', points);
    storage.set('time', time);
  }, [points, time]);

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
            values={points}
            valueChange={setPoints}
            sliderText="Set points"
          />
          <CustomSlider
            minValue={30}
            maxValue={60}
            values={time}
            valueChange={setTime}
            sliderText="Set timer"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
