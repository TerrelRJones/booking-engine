import React from 'react';
import { Box, Button, Text } from 'native-base';
import { Dimensions } from 'react-native';

interface HotelInfoModalProps {
  name: string;
  address: string;
  phone: string;
  summary: string;
  price: string;
  amenities: string[];
  onPress: () => void;
}

const textColor = 'warmGray.900';
const bgColor = 'blueGray.400';

export const HotelInfoModal = ({
  name,
  address,
  phone,
  summary,
  price,
  amenities,
  onPress,
}: HotelInfoModalProps) => {
  const { width } = Dimensions.get('screen');

  return (
    <Box
      position="absolute"
      justifyContent="space-between"
      bottom={0}
      width={width}
      height={350}
      backgroundColor={bgColor}
      paddingY={2}
      paddingX={5}
      marginTop={5}
      borderTopRadius={25}>
      <Box>
        <Box alignItems="center">
          <Box
            height={1}
            width={60}
            borderRadius={5}
            marginBottom={3}
            backgroundColor="black"
          />
        </Box>
        <Text fontSize={25} fontWeight="bold" color={textColor}>
          {name}
        </Text>
        <Text fontWeight="medium" color={textColor}>
          {address}
        </Text>
        <Text fontWeight="medium" color={textColor}>
          {phone}
        </Text>

        <Box marginTop={3} flexDirection="row">
          {amenities.map((item, index) => (
            <Box
              key={index}
              justifyContent="center"
              alignItems="center"
              paddingX={2}
              paddingY={2}
              height={10}
              minWidth={60}
              marginRight={3}
              borderRadius={10}
              backgroundColor="white">
              <Text fontWeight="bold">{item}</Text>
            </Box>
          ))}
        </Box>
        <Text marginTop={5} fontSize={15} fontWeight="medium">
          {summary}
        </Text>
        <Box flexDirection="row" justifyContent="flex-end">
          <Text fontSize={20} fontWeight="bold" marginTop={5}>
            From {price}
          </Text>
        </Box>
      </Box>

      <Box>
        <Button onPress={onPress}>Select Dates</Button>
      </Box>
    </Box>
  );
};
