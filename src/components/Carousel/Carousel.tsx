import React from 'react';
import { PreviewCard } from 'components/PreviewCard/PreviewCard';
import { Box, FlatList, SectionList } from 'native-base';
import { Hotels } from 'types/hotelModels';

interface CarouselProps {
  hotels: any[];
}

export const Carousel = ({ hotels }: Hotels) => {
  const {
    hotelName,
    images: [{ url }],
    rooms: [{ priceNight }],
  } = hotels[0];

  const mockHotels = [...hotels, hotels, hotels, hotels];

  return (
    <>
      <Box>This is the carousel</Box>
      <FlatList
        data={mockHotels}
        renderItem={() => (
          <PreviewCard
            imageSrc={url}
            hotelName={hotelName}
            price={priceNight}
          />
        )}
        horizontal
      />
    </>
  );
};
