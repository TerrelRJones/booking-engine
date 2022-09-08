import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';
import { DateData } from 'react-native-calendars';

interface CheckDateProps {
  checkType: 'In' | 'Out';
  date: DateData['dateString'];
}

export const CheckDate = ({ checkType, date }: CheckDateProps) => {
  return (
    <Box>
      <Text color={COLORS.textColor}>Check-{checkType}</Text>
      <Text color={COLORS.textColor}>{date}</Text>
    </Box>
  );
};
