import React from 'react';
import {
  Pressable,
  type StyleProp,
  type ViewStyle,
  TextStyle,
} from 'react-native';

import {AppText} from 'components';

import {styles} from './Styles';

interface AppButtonProps {
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export const AppButton = (props: AppButtonProps) => {
  const {style, styleText, text, onPress, disabled} = props;

  return (
    <Pressable
      style={disabled ? styles.disabled : [styles.btn, style]}
      onPress={onPress}>
      <AppText
        style={disabled ? styles.disabledText : [styles.btnText, styleText]}>
        {text}
      </AppText>
    </Pressable>
  );
};
