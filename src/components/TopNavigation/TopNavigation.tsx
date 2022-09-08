import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BackButton from 'components/BackButton';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';

interface TopNavigationProps {
  screenTitle: string;
}

export const TopNavigation = ({ screenTitle }: TopNavigationProps) => {
  const { goBack } = useNavigation();
  return (
    <Box
      paddingY={2}
      paddingX={3}
      backgroundColor={COLORS.blurbBgColor}
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center">
      <BackButton onPress={() => goBack()} />
      <Box>
        <Text color={COLORS.textColor} fontWeight="bold">
          {screenTitle}
        </Text>
      </Box>
    </Box>
  );
};
