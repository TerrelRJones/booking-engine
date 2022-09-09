import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import HotelInfoModal from 'components/HotelInfoModal';
import ImageSlider from 'components/ImageSlider';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { hotel as mockHotel } from 'mocks/hotelMocks';
import { Box, Button } from 'native-base';
import { useGetHotelQuery } from 'services/hotelService';

const {
  hotelName,
  rooms: [{ priceNight, images }],
  address: { state, street, zip, city },
  summary,
  phone,
} = mockHotel;

const formAddress = () => {
  return `${street} ${city}, ${state} ${zip}`;
};

const HotelInfoScreen = () => {
  const { navigate } = useNavigation();
  const {
    params: { id },
  }: any = useRoute();

  const { data } = useGetHotelQuery(id);


  return (
    <Box flex={1}>
      <TopNavigation screenTitle="Hotel Information" />
      <Box flex="1" position="relative">
        <ImageSlider images={images} />

        <HotelInfoModal
          name={hotelName}
          address={formAddress()}
          phone={phone}
          summary={summary}
          amenities={['2 Adults', 'Wifi', 'Pool']}
          price={priceNight}
        />
        <Button
          backgroundColor={COLORS.secondaryBgColor}
          borderRadius={0}
          onPress={() => navigate('DatesScreen')}>
          Select Dates
        </Button>
      </Box>
    </Box>
  );
};

export default HotelInfoScreen;
