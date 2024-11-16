import React from 'react';
import { Pressable, View } from 'react-native';

import { AppText } from 'components';

import { styles } from './Styles';
import Close from '../../assets/images/Close.svg';

interface AddedTeamProps {
  id: string;
  name: string;
  onDelete: (id: string) => void;
}

export const AddedTeam = (props: AddedTeamProps) => {
  const { id, name, onDelete } = props;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onDelete(id)}>
        <Close />
      </Pressable>
      <AppText style={styles.name}>{name}</AppText>
      <View style={styles.empty} />
    </View>
  );
};
