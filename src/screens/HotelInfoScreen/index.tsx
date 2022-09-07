import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HotelInfoModal from 'components/HotelInfoModal';
import ImageSlider from 'components/ImageSlider';
import { COLORS } from 'const/colors';
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
    <Box flex={1} safeArea backgroundColor={COLORS.bgColor}>
      <Box
        paddingY={2}
        backgroundColor={COLORS.blurbBgColor}
        justifyContent="space-between"
        flexDirection="row">
        <Text
          color={COLORS.textColor}
          paddingX={3}
          fontWeight="bold"
          onPress={() => goBack()}>
          Go Back
        </Text>
      </Box>
      <Box flex="1" position="relative">
        {/* Image Slider  */}
        <ImageSlider images={images} />

        {/* Modal  */}
        <HotelInfoModal
          name={hotelName}
          address={formAddress()}
          phone={phone}
          summary={summary}
          amenities={['2 Adults', 'Wifi', 'Pool']}
          price={priceNight}
        />
        <Button
          backgroundColor={COLORS.blurbBgColor}
          borderRadius={0}
          onPress={() => navigate('DatesScreen')}>
          Select Dates
        </Button>
      </Box>
    </Box>
  );
};

export default HotelInfoScreen;
