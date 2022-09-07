import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Carousel } from 'components/Carousel/Carousel';
import { Section } from 'components/Section/Section';
import { hotels as mockHotels } from 'mocks/hotelMocks';
import { Flex } from 'native-base';
import { Text, TouchableOpacity } from 'react-native';
import { useGetHotelsQuery } from 'services/hotelService';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { data } = useGetHotelsQuery(null);

  return (
    <Flex justifyContent="center" alignItems="center" flex={1}>
      <TouchableOpacity onPress={() => navigate('HotelInfoScreen')}>
        <Text>HomeScreen SUCCESS</Text>
      </TouchableOpacity>
      <Section header="TestHeader">
        <Carousel hotels={mockHotels.hotels} />
      </Section>
    </Flex>
  );
};

export default HomeScreen;
