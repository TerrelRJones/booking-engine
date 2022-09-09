import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Image, Text } from 'native-base';
import { Dimensions } from 'react-native';

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
  const { width } = Dimensions.get('screen');
  return (
    <Box width={width}>
      <Box mx={3} backgroundColor={COLORS.secondaryBgColor} borderRadius={5}>
        <Box h={40}>
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
    </Box>
  );
};
