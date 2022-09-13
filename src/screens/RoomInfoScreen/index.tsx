import React from 'react';
import ImageSlider from 'components/ImageSlider';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { Box, Button, Text } from 'native-base';
import { ScreenProps } from 'types/navigation';

interface RoomInfoScreenProps extends ScreenProps<'RoomInfoScreen'> {}

const RoomInfoScreen: React.FC<RoomInfoScreenProps> = ({
  navigation: { navigate },
  route: {
    params: { roomData },
  },
}) => {
  const { priceNight, bedType, images, summary } = roomData;

  return (
    <Box flex={1}>
      <TopNavigation screenTitle="Room" />
      <Box>
        <ImageSlider images={images} />
      </Box>
      <Box flex={1} backgroundColor="amber.300">
        <Text>{bedType}</Text>
        <Text>{priceNight}</Text>
        <Text>{summary}</Text>
      </Box>
      <Button
        backgroundColor={COLORS.secondaryBgColor}
        borderRadius={0}
        onPress={() => navigate('DatesScreen')}>
        Select Dates
      </Button>
    </Box>
  );
};

export default RoomInfoScreen;
