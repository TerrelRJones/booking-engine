import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PreviewCard } from 'components/PreviewCard/PreviewCard';
import { FlatList } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { HotelsResponse } from 'types/hotelModels';

interface CarouselProps {
  hotels: HotelsResponse;
}

export const Carousel = ({ hotels }: CarouselProps) => {
  const { navigate } = useNavigation();

  return (
    <>
      <FlatList
        data={hotels}
        horizontal
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({
          item: {
            id,
            hotelName,
            images: [{ url }],
            rooms: [{ priceNight }],
          },
        }) => (
          <TouchableOpacity
            onPress={() => {
              navigate('HotelInfoScreen', {
                id,
              });
            }}>
            <PreviewCard
              imageSrc={url}
              hotelName={hotelName}
              price={priceNight}
            />
          </TouchableOpacity>
        )}
      />
    </>
  );
};
