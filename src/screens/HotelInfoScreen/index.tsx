import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HotelInfoModal from 'components/HotelInfoModal';
import ImageSlider from 'components/ImageSlider';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { hotel as mockHotel } from 'mocks/hotelMocks';
import { Box, Button } from 'native-base';
import { useGetHotelQuery } from 'services/hotelService';
import { AppParamList } from 'types/navigation';

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

const HotelInfoScreen: React.FC<
  NativeStackScreenProps<AppParamList, 'HotelInfoScreen'>
> = ({
  route: {
    params: { id },
  },
  navigation: { navigate },
}) => {
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
