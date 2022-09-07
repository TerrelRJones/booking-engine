import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';
import { Calendar } from 'react-native-calendars';

const DatesScreen = () => {
  const { goBack } = useNavigation();

  return (
    <Box flex={1}>
      <Box
        paddingY={2}
        backgroundColor={COLORS.bgColor}
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
      <Calendar />
    </Box>
  );
};

export default DatesScreen;
