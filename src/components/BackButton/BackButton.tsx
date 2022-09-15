import React from 'react';
import { COLORS } from 'const/colors';
import { Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

interface BackButtonProps {
  onPress: () => void;
}

export const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box>
        <Entypo name="chevron-left" size={25} color={COLORS.textColor} />
      </Box>
    </TouchableOpacity>
  );
};
