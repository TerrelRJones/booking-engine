import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Button, Text } from 'native-base';

const DatesScreen = () => {
  const { goBack } = useNavigation();

  return (
    <Box flex={1} justifyContent="center" alignItems={'center'}>
      <Button onPress={() => goBack()}>Go Back</Button>
      <Text>Dates Screen</Text>
    </Box>
  );
};

export default DatesScreen;
