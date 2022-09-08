import React from 'react';
import TopNavigation from 'components/TopNavigation';
import { Box } from 'native-base';
import { Calendar } from 'react-native-calendars';

const DatesScreen = () => {
  return (
    <Box flex={1}>
      <TopNavigation screenTitle="Dates" />
      <Calendar />
    </Box>
  );
};

export default DatesScreen;
