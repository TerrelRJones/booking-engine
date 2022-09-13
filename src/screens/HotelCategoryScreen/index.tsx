import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Carousel } from 'components/Carousel/Carousel';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { Box } from 'native-base';
import { useGetHotelsQuery } from 'services/hotelService';
import { AppParamList } from 'types/navigation';

const HotelCategoryScreen: React.FC<
  NativeStackScreenProps<AppParamList, 'HotelCategoryScreen'>
> = ({ route }) => {
  const { navigationTitle } = route.params;

  const { data: hotels } = useGetHotelsQuery(null);

  return (
    <Box flex={1} backgroundColor={COLORS.bgColor}>
      <TopNavigation screenTitle={navigationTitle} />
      <Box py={5}>
        <Carousel hotels={hotels} />
      </Box>
    </Box>
  );
};

export default HotelCategoryScreen;
