import React from 'react';
import HotelInfoBlurb from './HotelInfoBlurb';
import { useNavigation } from '@react-navigation/native';
import RoomPreviewCard from 'components/RoomPreviewCard';
import { COLORS } from 'const/colors';
import { Box, ScrollView, Text } from 'native-base';
import { Dimensions } from 'react-native';
import { Room } from 'types/hotelModels';

interface HotelInfoModalProps {
  name: string;
  address: string;
  phone: string;
  summary: string;
  price: string;
  amenities: string[];
  rooms: Room[];
  onPress?: () => void;
}

export const HotelInfoModal = ({
  name,
  address,
  phone,
  summary,
  amenities,
  rooms,
}: HotelInfoModalProps) => {
  const { width } = Dimensions.get('screen');
  const { navigate } = useNavigation();

  return (
    <ScrollView
      width={width}
      height="100%"
      backgroundColor={COLORS.bgColor}
      paddingY={2}
      paddingX={2}
      showsVerticalScrollIndicator={false}>
      <Box>
        <HotelInfoBlurb>
          <Text fontSize={25} fontWeight="bold" color={COLORS.textColor}>
            {name}
          </Text>
          <Text fontWeight="medium" color={COLORS.textColor}>
            {address}
          </Text>
          <Text fontWeight="medium" color={COLORS.textColor}>
            {phone}
          </Text>
        </HotelInfoBlurb>

        <HotelInfoBlurb>
          <Text color={COLORS.textColor}>Amenities</Text>
          <Box marginTop={3} flexDirection="row">
            {amenities.map((item, index) => (
              <Box
                key={index}
                justifyContent="center"
                alignItems="center"
                paddingX={2}
                paddingY={2}
                height={10}
                minWidth={60}
                marginRight={3}
                borderRadius={10}
                backgroundColor="white">
                <Text fontWeight="bold">{item}</Text>
              </Box>
            ))}
          </Box>
        </HotelInfoBlurb>
        <HotelInfoBlurb>
          <Text color={COLORS.textColor}>Summary</Text>
          <Text color={COLORS.textColor} fontSize={15} fontWeight="medium">
            {summary}
          </Text>
        </HotelInfoBlurb>

        <Text color={COLORS.textColor} mb={1} fontSize={20} fontWeight="bold">
          Rooms
        </Text>

        {rooms.map(data => (
          <HotelInfoBlurb key={data.id}>
            <RoomPreviewCard
              bedType={data.bedType}
              summary={data.summary}
              price={data.priceNight}
              onPress={() => navigate('RoomInfoScreen', { roomData: data })}
            />
          </HotelInfoBlurb>
        ))}
      </Box>
    </ScrollView>
  );
};
