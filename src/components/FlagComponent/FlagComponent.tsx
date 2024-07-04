import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './Styles';

import Geo from 'assets/images/GeoFlag.svg';
import US from 'assets/images/USFlag.svg';

export const FlagComponent = () => {
  const [selected, setSelected] = useState<string>('ka');
  const { i18n } = useTranslation();

  const handlePress = (lang: string) => {
    setSelected(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.flagContainer}>
      <Pressable
        style={selected === 'ka' && styles.ge}
        onPress={() => handlePress('ka')}>
        <Geo />
      </Pressable>
      <Pressable
        style={selected === 'en' && styles.ge}
        onPress={() => handlePress('en')}>
        <US />
      </Pressable>
    </View>
  );
};
