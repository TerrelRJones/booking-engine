import React from 'react';
import { Box, FlatList, Image } from 'native-base';
import { Dimensions } from 'react-native';

type RoomImagesType = { id: string; url: string; alt: string };

interface FullScreenImageSliderTypes {
  images: RoomImagesType[];
}

export const FullScreenImageSlider = ({
  images,
}: FullScreenImageSliderTypes) => {
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
        <Box width={width} height="100%">
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
