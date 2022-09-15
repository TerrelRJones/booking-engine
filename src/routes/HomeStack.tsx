import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DatesScreen from 'screens/DatesScreen';
import HomeScreen from 'screens/HomeScreen';
import HotelCategoryScreen from 'screens/HotelCategoryScreen';
import HotelInfoScreen from 'screens/HotelInfoScreen';
import PaymentScreen from 'screens/PaymentScreen';
import RoomInfoScreen from 'screens/RoomInfoScreen';
import { AppParamList } from 'types/navigation';

const Stack = createNativeStackNavigator<AppParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="HotelCategoryScreen"
        component={HotelCategoryScreen}
      />
      <Stack.Screen name="HotelInfoScreen" component={HotelInfoScreen} />
      <Stack.Screen name="RoomInfoScreen" component={RoomInfoScreen} />
      <Stack.Screen name="DatesScreen" component={DatesScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
