import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button/index';
import DatePicker from 'components/DatePicker';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';

const DatesScreen = () => {
  const { goBack } = useNavigation();

  return (
    <Box flex={1} safeArea backgroundColor={COLORS.bgColor}>
      <Box
        paddingY={2}
        backgroundColor={COLORS.secondaryBgColor}
        justifyContent="space-between"
        flexDirection="row">
        <Text
          color={COLORS.textColor}
          paddingX={3}
          fontWeight="bold"
          onPress={() => goBack()}>
          Go Back
        </Text>
      </Box>
      <DatePicker />
    </Box>
  );
};

export default DatesScreen;
