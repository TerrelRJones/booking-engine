import React from 'react';
import { COLORS } from 'const/colors';
import { Text } from 'native-base';

interface BackButtonProps {
  onPress: () => void;
}

export const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <Text left={0} color={COLORS.textColor} fontWeight="bold" onPress={onPress}>
      Go Back
    </Text>
  );
};
