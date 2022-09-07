import React from 'react';
import { Carousel } from 'components/Carousel/Carousel';
import { Section } from 'components/Section/Section';
import { hotels as mockHotels } from 'mocks/hotelMocks';
import { Box } from 'native-base';

const HomeScreen = () => {
  //make call with RTKQ here using hook thing

  return (
    <Box flex={1} safeArea>
      <Section header="TestHeader">
        <Carousel hotels={mockHotels.hotels} />
      </Section>
    </Box>
  );
};

export default HomeScreen;
