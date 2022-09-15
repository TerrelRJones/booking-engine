import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';

const ProfileScreen = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor={COLORS.bgColor}>
      <Text color={COLORS.textColor}>ProfileScreen</Text>
    </Box>
  );
};

export default ProfileScreen;
