import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Flex } from 'native-base';
import { Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <Flex justifyContent="center" alignItems="center" flex={1}>
      <TouchableOpacity onPress={() => navigate('HotelInfoScreen')}>
        <Text>HomeScreen SUCCESS</Text>
      </TouchableOpacity>
    </Flex>
  );
};

export default HomeScreen;
