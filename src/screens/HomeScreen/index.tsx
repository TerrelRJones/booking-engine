import React from 'react';
import { Carousel } from 'components/Carousel/Carousel';
import HomeScreenTitle from 'components/HomeScreenTitle';
import SearchInput from 'components/SearchInput';
import { Section } from 'components/Section/Section';
import { UserPhoto } from 'components/UserPhoto/UserPhoto';
import { COLORS } from 'const/colors';
import { hotels as mockHotels } from 'mocks/hotelMocks';
import { Box, ScrollView } from 'native-base';
import { useGetHotelsQuery } from 'services/hotelService';

const image =
  'https://media.architecturaldigest.com/photos/603fd63ce5e723e4f559fb16/16:9/w_2560%2Cc_limit/1300769954';

const HomeScreen = () => {
  const { data: hotels } = useGetHotelsQuery(null);
  //pull user info from db? maybe add to mock json-server or maybe get fancy

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
          <Carousel hotels={hotels} />
        </Section>
        <Section header="Near You">
          <Carousel hotels={hotels} />
        </Section>
        <Section header="All">
          <Carousel hotels={hotels} />
        </Section>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
