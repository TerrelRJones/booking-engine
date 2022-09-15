import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';

const BookingsScreen = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor={COLORS.bgColor}>
      <Text color={COLORS.textColor}>BookingsScreen</Text>
    </Box>
  );
};

export default BookingsScreen;
