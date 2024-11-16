import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { ReactNativeModal } from 'react-native-modal';
import { useTranslation } from 'react-i18next';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { AppButton, AppText } from 'components';

import { styles } from './Styles';
import { colors } from '../../constants';

import Close from 'assets/images/Close.svg';

interface CustomModalProps {
  isVisible?: boolean;
  hide: () => void;
  title: string;
  close: () => void;
  onAddTeam: (team: { id: number; name: string; points: number }) => void;
}

export const CustomModal = (props: CustomModalProps) => {
  const { isVisible, hide, title, close } = props;
  const { t } = useTranslation();
  const [teamName, setTeamName] = useState('');

  const handlePress = () => {
    if (teamName.trim()) {
      const newTeam = {
        id: Date.now(),
        name: teamName,
        points: 0,
      };
      props.onAddTeam(newTeam);
      setTeamName('');
      hide();
    }
  };

  return (
    <ReactNativeModal
      style={styles.container}
      isVisible={isVisible}
      onBackdropPress={hide}>
      <View style={styles.headWrapper}>
        <AppText style={styles.title}>{title}</AppText>
        <View style={{ position: 'absolute', top: 0, right: 0 }}>
          <TouchableWithoutFeedback onPress={close}>
            <Close width={25} height={25} />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.modalFooter}>
        <View style={styles.nameInputContainer}>
          <TextInput
            value={teamName}
            onChangeText={setTeamName}
            placeholder={t('Type...')}
            placeholderTextColor={colors.gray}
            style={styles.nameInput}
          />
        </View>
        <View>
          <AppButton
            text="Add"
            style={styles.btn}
            styleText={styles.btnText}
            onPress={handlePress}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};
