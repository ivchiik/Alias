import React from 'react';
import { View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

import { CustomSlider } from 'components';

import { styles } from './Styles';

interface ModalSliderProps {
  isVisible?: boolean;
  hide: () => void;
  valueChange: (value: number) => void;
  value: number;
  minValue: number;
  maxValue: number;
  sliderText: string;
}

export const ModalSlider = (props: ModalSliderProps) => {
  const {
    isVisible,
    hide,
    valueChange,
    value,
    minValue,
    maxValue,
    sliderText,
  } = props;

  return (
    <View style={styles.container}>
      <ReactNativeModal isVisible={isVisible} onBackdropPress={hide}>
        <View style={styles.insideContainer}>
          <CustomSlider
            valueChange={valueChange}
            values={value}
            minValue={minValue}
            maxValue={maxValue}
            sliderText={sliderText}
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};
