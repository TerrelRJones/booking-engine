import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ImageSlider from 'components/ImageSlider';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { Box, Button, Text } from 'native-base';
import { AppParamList } from 'types/navigation';

const RoomInfoScreen: FC<
  NativeStackScreenProps<AppParamList, 'RoomInfoScreen'>
> = ({ navigation, route }) => {
  const { priceNight, bedType, images, summary } = route.params.roomData;
  const { navigate } = navigation;

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
