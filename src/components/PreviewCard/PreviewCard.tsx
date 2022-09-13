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
      <Box
        mx={3}
        backgroundColor={COLORS.secondaryBgColor}
        borderRadius={5}
        mb={5}
        position="relative">
        <Box h={40}>
          <Image
            source={{ uri: imageSrc }}
            alt="Alternate Text"
            height="100%"
            width="100%"
            resizeMode="cover"
            borderTopRadius={5}
          />
          <Box
            position="absolute"
            bg="rgba(0,0,0,.5)"
            right={1}
            top={1}
            px={2}
            py={2}
            borderRadius={5}>
            <Text
              color={COLORS.textColor}
              fontWeight="bold"
              lineHeight={0}
              zIndex={1}>
              {price}
            </Text>
          </Box>
        </Box>
        <Box
          px={3}
          py={2}
          pb={1}
          flexDirection="row"
          justifyContent="space-between">
          <Text color={COLORS.textColor} fontWeight="bold" fontSize="lg">
            {hotelName}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
