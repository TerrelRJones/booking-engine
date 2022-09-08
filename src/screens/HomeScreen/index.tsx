import React from 'react';
import { Carousel } from 'components/Carousel/Carousel';
import HomeScreenTitle from 'components/HomeScreenTitle';
import SearchInput from 'components/SearchInput';
import { Section } from 'components/Section/Section';
import UserPhoto from 'components/UserPhoto';
import { COLORS } from 'const/colors';
import { hotels as mockHotels } from 'mocks/hotelMocks';
import { Box, ScrollView } from 'native-base';

const image =
  'https://media.architecturaldigest.com/photos/603fd63ce5e723e4f559fb16/16:9/w_2560%2Cc_limit/1300769954';

const HomeScreen = () => {
  //make call with RTKQ here using hook thing

  return (
    <Box flex={1} backgroundColor={COLORS.bgColor}>
      <Box px={3} mt={5} mb={2}>
        {/* user photo  */}
        <Box flexDirection="row" justifyContent="flex-end">
          <UserPhoto img={image} />
        </Box>

        <HomeScreenTitle name="LeBron" />

        <SearchInput placeHolder="Search Hotels..." />
      </Box>

      <ScrollView pl={3} showsVerticalScrollIndicator={false}>
        <Section header="Most Popular">
          <Carousel hotels={mockHotels.hotels} />
        </Section>
        <Section header="Near You">
          <Carousel hotels={mockHotels.hotels} />
        </Section>
        <Section header="All">
          <Carousel hotels={mockHotels.hotels} />
        </Section>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
