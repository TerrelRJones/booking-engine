import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';

interface HomeScreenTitleProps {
  name: string;
}

export const HomeScreenTitle = ({ name }: HomeScreenTitleProps) => {
  return (
    <Box>
      <Text
        color={COLORS.textColor}
        fontSize={35}
        fontWeight="bold"
        lineHeight={0}>
        Hello {name},
      </Text>
      <Text
        color={COLORS.textColor}
        fontSize={35}
        fontWeight="bold"
        lineHeight={0}>
        welcome back.
      </Text>
    </Box>
  );
};
