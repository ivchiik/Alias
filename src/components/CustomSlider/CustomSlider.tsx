import React from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';

import { AppText } from 'components';

import { styles } from './Styles';
import { colors } from '../../constants';

interface CustomSliderProps {
  valueChange: (value: number) => void;
  values: number;
  minValue: number;
  maxValue: number;
  sliderText: string;
}

export const CustomSlider = (props: CustomSliderProps) => {
  const { valueChange, values, minValue, maxValue, sliderText } = props;

  return (
    <View style={styles.sliderContainer}>
      <AppText style={styles.sliderPoints}>{values}</AppText>
      <Slider
        style={styles.slider}
        minimumValue={minValue}
        maximumValue={maxValue}
        step={5}
        onValueChange={value => valueChange(value)}
        onSlidingComplete={value => valueChange(value)}
        value={values}
        minimumTrackTintColor={colors.secondaryColor}
        maximumTrackTintColor={colors.black}
      />
      <AppText style={styles.sliderText}>{sliderText}</AppText>
    </View>
  );
};
