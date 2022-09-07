import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FullScreenImageSlider from 'components/FullScreenImageSlider';
import HotelInfoModal from 'components/HotelInfoModal';
import * as colors from 'const/colors';
import { hotel as mockHotel } from 'mocks/hotelMocks';
import { Box, Button, Text } from 'native-base';

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
  const { goBack, navigate } = useNavigation();

  return (
    <Box flex={1} safeArea>
      <Box
        paddingY={2}
        backgroundColor={colors.bgColor}
        justifyContent="space-between"
        flexDirection="row">
        <Text
          color={colors.textColor}
          paddingX={3}
          fontWeight="bold"
          onPress={() => goBack()}>
          Go Back
        </Text>
      </Box>
      <Box flex="1" position="relative">
        {/* Image Slider  */}
        <FullScreenImageSlider images={images} />

        {/* Modal  */}
        <HotelInfoModal
          name={hotelName}
          address={formAddress()}
          phone={phone}
          summary={summary}
          amenities={['2 Adults', 'Wifi', 'Pool']}
          price={priceNight}
        />
      </Box>
      <Button onPress={() => navigate('DatesScreen')}>Select Dates</Button>
    </Box>
  );
};

export default HotelInfoScreen;
