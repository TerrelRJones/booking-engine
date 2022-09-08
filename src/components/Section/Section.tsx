import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';

interface SectionProps {
  header: string;
  children: any;
}

export const Section = ({ header, children }: SectionProps) => {
  return (
    <Box mt={5}>
      <Text color={COLORS.textColor} fontWeight="bold" mb={2} fontSize={20}>
        {header}
      </Text>
      <Box>{children}</Box>
    </Box>
  );
};
