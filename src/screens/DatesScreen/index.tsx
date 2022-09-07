import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as colors from 'const/colors';
import { Box, Text } from 'native-base';
import { Agenda, Calendar, CalendarList } from 'react-native-calendars';

const DatesScreen = () => {
  const { goBack } = useNavigation();

  return (
    <Box flex={1} safeArea>
      <Box
        paddingY={2}
        backgroundColor={colors.bgColor}
        justifyContent="space-between"
        flexDirection="row">
        <Text
          color={colors.textColor}
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
