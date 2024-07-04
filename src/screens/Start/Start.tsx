import React, { useState } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { AppButton, CustomHeader, CustomModal, ModalSlider } from 'components';

import { styles } from './Styles';
import GoBack from '../../assets/images/GoBackIcon.svg';

export const Start = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [timerVisible, setTimerVisible] = useState(false);
  const [points, setPoints] = useState<number>(30);
  const [time, setTime] = useState<number>(30);
  const navigation = useNavigation();

  const handleModalPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSliderPress = () => {
    setSliderVisible(true);
  };

  const handleTimerPress = () => {
    setTimerVisible(true);
  };

  const handleContinue = () => {
    navigation.navigate('PLAY' as never);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/back.jpg')}
      style={styles.img}>
      <SafeAreaView style={styles.container}>
        <CustomHeader canGoBack mainText="Start" />
        <View style={styles.wrapper}>
          <AppButton
            text="Add team"
            style={styles.addTeamBtn}
            onPress={handleModalPress}
          />
          <View style={styles.smallWrapper}>
            <AppButton
              text="Set points"
              style={styles.addTeamBtn}
              onPress={handleSliderPress}
            />
            <AppButton
              text="Set timer"
              style={styles.addTeamBtn}
              onPress={handleTimerPress}
            />
            <AppButton
              text="Continue"
              style={styles.addTeamBtn}
              onPress={handleContinue}
            />
          </View>
        </View>

        <CustomModal
          isVisible={modalVisible}
          hide={() => setModalVisible(false)}
          title="Add team"
          close={handleModalClose}
        />
        <ModalSlider
          isVisible={sliderVisible}
          hide={() => setSliderVisible(false)}
          minValue={30}
          maxValue={100}
          value={points}
          valueChange={setPoints}
          sliderText="Set points"
        />
        <ModalSlider
          isVisible={timerVisible}
          hide={() => setTimerVisible(false)}
          minValue={30}
          maxValue={60}
          value={time}
          valueChange={setTime}
          sliderText="Set timer"
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
