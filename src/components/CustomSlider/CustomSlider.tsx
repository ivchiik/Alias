import React from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';

import { AppText } from 'components';

import { styles } from './Styles';
import { colors } from '../../constants';

interface CustomSliderProps {
  valueChange: (value: number) => void;
  value: number;
  minValue: number;
  maxValue: number;
  sliderText: string;
}

export const CustomSlider = (props: CustomSliderProps) => {
  const { valueChange, value, minValue, maxValue, sliderText } = props;

  return (
    <View style={styles.sliderContainer}>
      <AppText style={styles.sliderPoints}>{value}</AppText>
      <Slider
        style={styles.slider}
        minimumValue={minValue}
        maximumValue={maxValue}
        step={5}
        onValueChange={valueChange}
        minimumTrackTintColor={colors.secondaryColor}
        maximumTrackTintColor={colors.black}
      />
      <AppText style={styles.sliderText}>{sliderText}</AppText>
    </View>
  );
};
