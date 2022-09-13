import React from 'react';
import { Box, FlatList, Image } from 'native-base';
import { Dimensions } from 'react-native';
// clashed with Image component above
import { Image as RoomImgType } from 'types/hotelModels';

interface FullScreenImageSliderTypes {
  images: RoomImgType[];
}

export const ImageSlider = ({ images }: FullScreenImageSliderTypes) => {
  const { width } = Dimensions.get('screen');

  return (
    <FlatList
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      pagingEnabled
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Box width={width} height={250}>
          <Image
            source={{ uri: item.url }}
            resizeMode="cover"
            alt={item.alt}
            width="100%"
            height="100%"
          />
        </Box>
      )}
    />
  );
};
