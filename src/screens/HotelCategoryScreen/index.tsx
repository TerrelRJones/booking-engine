import React from 'react';
import { Carousel } from 'components/Carousel/Carousel';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { Box } from 'native-base';
import { useGetHotelsQuery } from 'services/hotelService';
import { ScreenProps } from 'types/navigation';

interface HotelCategoryScreenProps extends ScreenProps<'HotelCategoryScreen'> {}

const HotelCategoryScreen: React.FC<HotelCategoryScreenProps> = ({ route }) => {
  const { data: hotels } = useGetHotelsQuery(null);
  const { navigationTitle } = route.params;

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
