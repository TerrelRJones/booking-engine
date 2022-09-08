import React from 'react';
import Button from 'components/Button/index';
import DatePicker from 'components/DatePicker';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { Box } from 'native-base';

const DatesScreen = () => {
  return (
    <Box backgroundColor={COLORS.bgColor}>
      <TopNavigation screenTitle="DatesScreen" />
      <DatePicker />
    </Box>
  );
};

export default DatesScreen;
