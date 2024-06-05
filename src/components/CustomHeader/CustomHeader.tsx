import React from 'react';
import {
  View,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {AppText} from 'components';

import {styles} from './Styles';
import GoBack from 'assets/images/GoBackIcon.svg';

interface CustomHeaderProps {
  canGoBack?: boolean;
  mainText?: string;
  mainStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  line?: boolean;
}

export const CustomHeader = (props: CustomHeaderProps) => {
  const {canGoBack, mainText, mainStyle, style, line} = props;

  const navigation = useNavigation();

  const LeftComponent = () => {
    if (canGoBack) {
      return (
        <Pressable onPress={() => navigation.goBack()}>
          <GoBack width={25} height={25} />
        </Pressable>
      );
    } else {
      return <View style={{width: 25}} />;
    }
  };

  const MainComponent = () => {
    return (
      <AppText style={[styles.mainText, mainStyle]}>
        {mainText && mainText}
      </AppText>
    );
  };

  const RightComponent = () => {
    return <View style={{width: 25}} />;
  };

  const Line = () => {
    return <View style={styles.line} />;
  };

  return (
    <>
      <View style={[styles.container, style]}>
        <LeftComponent />
        <MainComponent />
        <RightComponent />
      </View>
      {line && <Line />}
    </>
  );
};
