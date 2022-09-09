import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Image, Text } from 'native-base';

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
    <Box
      mr={4}
      backgroundColor={COLORS.secondaryBgColor}
      borderRadius={5}
      minWidth={250}>
      <Box h={40} maxWidth="100%">
        <Image
          source={{ uri: imageSrc }}
          alt="Alternate Text"
          height="100%"
          width="100%"
          resizeMode="cover"
          borderTopRadius={5}
        />
      </Box>
      <Box px={3} pb={1}>
        <Text color={COLORS.textColor} fontWeight="bold" fontSize="lg">
          {hotelName}
        </Text>
        <Text color={COLORS.textColor} fontWeight="medium" lineHeight={0}>
          From
        </Text>
        <Text color={COLORS.textColor} fontWeight="bold" lineHeight={0}>
          {price}
        </Text>
      </Box>
    </Box>
  );
};
