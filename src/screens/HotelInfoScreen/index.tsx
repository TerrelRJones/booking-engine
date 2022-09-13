import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HotelInfoModal from 'components/HotelInfoModal';
import ImageSlider from 'components/ImageSlider';
import TopNavigation from 'components/TopNavigation';
import { hotel as mockHotel } from 'mocks/hotelMocks';
import { Box } from 'native-base';
import { useGetHotelQuery } from 'services/hotelService';
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
}) => {
  const { data } = useGetHotelQuery(id);

  const formAddress = ({ address: { street, city, state, zip } }: Address) => {
    return `${street} ${city}, ${state} ${zip}`;
  };

  return (
    <Box flex={1}>
      {data && (
        <Box flex="1" position="relative">
          <TopNavigation screenTitle={data.hotelName} />
          <ImageSlider images={images} />
          <HotelInfoModal
            name={data.hotelName}
            address={formAddress(data)}
            phone={data.phone}
            summary={data.summary}
            amenities={['2 Adults', 'Wifi', 'Pool']}
            price={data.rooms[0].priceNight}
            rooms={data.rooms}
          />
        </Box>
      )}
    </Box>
  );
};

export default HotelInfoScreen;
