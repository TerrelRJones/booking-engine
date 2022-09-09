import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HotelInfoModal from 'components/HotelInfoModal';
import ImageSlider from 'components/ImageSlider';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { hotel as mockHotel } from 'mocks/hotelMocks';
import { Box, Button } from 'native-base';
import { useGetHotelQuery } from 'services/hotelService';
import { Hotel } from 'types/hotelModels';
import { AppParamList } from 'types/navigation';

const {
  rooms: [{ images }],
} = mockHotel;

export interface Address {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

const HotelInfoScreen: React.FC<
  NativeStackScreenProps<AppParamList, 'HotelInfoScreen'>
> = ({
  route: {
    params: { id },
  },
  navigation: { navigate },
}) => {
  const { data } = useGetHotelQuery(id);

  const formAddress = ({ address: { street, city, state, zip } }: Address) => {
    return `${street} ${city}, ${state} ${zip}`;
  };

  return (
    <Box flex={1}>
      <TopNavigation screenTitle="Hotel Information" />
      {data && (
        <Box flex="1" position="relative">
          <ImageSlider images={images} />
          <HotelInfoModal
            name={data.hotelName}
            address={formAddress(data)}
            phone={data.phone}
            summary={data.summary}
            amenities={['2 Adults', 'Wifi', 'Pool']}
            price={data.rooms[0].priceNight}
          />
          <Button
            backgroundColor={COLORS.secondaryBgColor}
            borderRadius={0}
            onPress={() => navigate('DatesScreen')}>
            Select Dates
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HotelInfoScreen;
