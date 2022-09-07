import React from 'react';
import { COLORS } from 'const/colors';
import { Box } from 'native-base';

interface HotelInfoBlurbProps {
  children: React.ReactNode;
}

const HotelInfoBlurb = ({ children }: HotelInfoBlurbProps) => {
  return (
    <Box
      backgroundColor={COLORS.blurbBgColor}
      paddingX={4}
      paddingY={2}
      borderRadius={4}
      marginBottom={2}>
      {children}
    </Box>
  );
};

export default HotelInfoBlurb;
