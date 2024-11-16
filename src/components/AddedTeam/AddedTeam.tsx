import React from 'react';
import { Pressable, View } from 'react-native';

import { AppText } from 'components';

import { styles } from './Styles';
import Close from '../../assets/images/Close.svg';

interface AddedTeamProps {
  name: string;
  points: number;
}

export const AddedTeam = (props: AddedTeamProps) => {
  const { name } = props;

  return (
    <View style={styles.container}>
      <Pressable>
        <Close />
      </Pressable>
      <AppText style={styles.name}>{name}</AppText>
      <View style={styles.empty} />
    </View>
  );
};
