import React from 'react';
import { Box, Image } from 'native-base';

interface PreviewCardProps {
  imageSrc: string;
  hotelName: string;
  price: string;
}

export const PreviewCard = ({
  imageSrc,
  hotelName,
  price,
}: PreviewCardProps) => {
  return (
    <Box m={5}>
      <Image source={{ uri: imageSrc }} alt="Alternate Text" size="xl" />
      <Box>{hotelName}</Box>
      <Box>{price}</Box>
    </Box>
  );
};
