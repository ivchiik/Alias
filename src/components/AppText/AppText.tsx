import React, {ReactNode} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, type StyleProp, type TextStyle} from 'react-native';

interface AppTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const AppText = (props: AppTextProps) => {
  const {children, style} = props;
  const {t, i18n} = useTranslation();

  const text = t(children as string);

  return <Text style={[style]}>{text}</Text>;
};
