import React, { useMemo } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Carousel } from 'components/Carousel/Carousel';
import HomeScreenTitle from 'components/HomeScreenTitle';
import SearchInput from 'components/SearchInput';
import { Section } from 'components/Section/Section';
import UserPhoto from 'components/UserPhoto';
import { COLORS } from 'const/colors';
import { useRandomizeHotels } from 'hooks/useRandomizeHotels';
import { Box, ScrollView } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useGetHotelsQuery, useGetUserQuery } from 'services/hotelService';
import { AppParamList } from 'types/navigation';

const HomeScreen: React.FC<NativeStackScreenProps<AppParamList, 'Home'>> = ({
  navigation: { navigate },
}) => {
  const { data: hotels } = useGetHotelsQuery(null);
  const { data: user } = useGetUserQuery(null);
  const { randomizeHotels } = useRandomizeHotels(hotels);

  const firstName = useMemo(() => {
    return user?.name.split(' ')[0];
  }, [user]);

  return (
    <Box flex={1} backgroundColor={COLORS.bgColor}>
      <TouchableOpacity onPress={() => navigate('ProfileTab')}>
        <Box px={3} mt={5} mb={2}>
          <Box flexDirection="row" justifyContent="flex-end">
            <UserPhoto img={user?.image} />
          </Box>
          <HomeScreenTitle name={firstName} />
          <SearchInput placeHolder="Search Hotels..." />
        </Box>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Section
          header="Most Popular"
          onPress={() =>
            navigate('HotelCategoryScreen', { navigationTitle: 'Most Popular' })
          }>
          {hotels && (
            <Carousel horizontal pagingEnabled hotels={randomizeHotels()} />
          )}
        </Section>

        <Section
          header="Near You"
          onPress={() =>
            navigate('HotelCategoryScreen', { navigationTitle: 'Near You' })
          }>
          {hotels && (
            <Carousel horizontal pagingEnabled hotels={randomizeHotels()} />
          )}
        </Section>

        <Section
          header="All"
          onPress={() =>
            navigate('HotelCategoryScreen', { navigationTitle: 'Near You' })
          }>
          {hotels && (
            <Carousel horizontal pagingEnabled hotels={randomizeHotels()} />
          )}
        </Section>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
