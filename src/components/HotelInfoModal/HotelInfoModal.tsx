import React from 'react';
import { Box, Button, Text } from 'native-base';
import { Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

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
// const bgColor = 'blueGray.400';

export const HotelInfoModal = ({
  name,
  address,
  phone,
  summary,
  price,
  amenities,
  onPress,
}: HotelInfoModalProps) => {
  const { width, height } = Dimensions.get('screen');
  const translateY = useSharedValue(0);

  const gesture = Gesture.Pan().onUpdate(e => {
    translateY.value = e.translationY;
  });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            position: 'absolute',
            justifyContent: 'space-between',
            bottom: 0,
            width: width,
            height: height,
            backgroundColor: 'white',
            paddingVertical: 2,
            paddingHorizontal: 10,
            marginTop: 5,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            top: height / 1.5,
          },
          rBottomSheetStyle,
        ]}>
        <Box>
          <Box alignItems="center">
            <Box
              height={1}
              width={60}
              borderRadius={5}
              marginTop={2}
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
      </Animated.View>
    </GestureDetector>
  );
};
