import React from 'react';
import { Box, Image } from 'native-base';

interface UserPhotoProps {
  img?: string;
}

export const UserPhoto = ({ img }: UserPhotoProps) => {
  return (
    <Box
      h={10}
      w={10}
      justifyContent="center"
      alignItems="center"
      borderRadius={50}>
      <Image
        source={{
          uri: img,
        }}
        alt="User Photo"
        resizeMode="cover"
        h="100%"
        w="100%"
        borderRadius={50}
      />
    </Box>
  );
};
