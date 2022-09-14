import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

interface SectionProps {
  header: string;
  children: any;
  onPress?: () => void;
}

export const Section = ({ header, children, onPress }: SectionProps) => {
  return (
    <Box mt={5}>
      <TouchableOpacity onPress={onPress}>
        <Text
          color={COLORS.textColor}
          fontWeight="bold"
          mb={2}
          fontSize={20}
          pl={3}>
          {header}
        </Text>
      </TouchableOpacity>
      <Box>{children}</Box>
    </Box>
  );
};
