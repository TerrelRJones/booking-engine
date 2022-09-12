import React, { useMemo } from 'react';
import { Carousel } from 'components/Carousel/Carousel';
import HomeScreenTitle from 'components/HomeScreenTitle';
import SearchInput from 'components/SearchInput';
import { Section } from 'components/Section/Section';
import UserPhoto from 'components/UserPhoto';
import { COLORS } from 'const/colors';
import { useRandomizeHotels } from 'hooks/useRandomizeHotels';
import { Box, ScrollView } from 'native-base';
import { useGetHotelsQuery, useGetUserQuery } from 'services/hotelService';

const HomeScreen = () => {
  const { data: hotels } = useGetHotelsQuery(null);
  const { data: user } = useGetUserQuery(null);
  const { randomizeHotels } = useRandomizeHotels(hotels);

  const firstName = useMemo(() => {
    return user?.name.split(' ')[0];
  }, [user]);

  return (
    <Box flex={1} backgroundColor={COLORS.bgColor}>
      <Box px={3} mt={5} mb={2}>
        <Box flexDirection="row" justifyContent="flex-end">
          <UserPhoto img={user?.image} />
        </Box>
        <HomeScreenTitle name={firstName} />
        <SearchInput placeHolder="Search Hotels..." />
      </Box>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Section header="Most Popular">
          {hotels && <Carousel hotels={randomizeHotels()} />}
        </Section>
        <Section header="Near You">
          {hotels && <Carousel hotels={randomizeHotels()} />}
        </Section>
        <Section header="All">
          {hotels && <Carousel hotels={randomizeHotels()} />}
        </Section>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
