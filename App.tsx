/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
// import StorybookUIRoot from './.ondevice/Storybook';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from 'const/colors';
import { Box, NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import DatesScreen from 'screens/DatesScreen';
import HomeScreen from 'screens/HomeScreen';
import HotelInfoScreen from 'screens/HotelInfoScreen';
import { store } from 'store';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Box safeArea flex={1} backgroundColor={COLORS.bgColor}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="HotelInfoScreen"
                component={HotelInfoScreen}
              />
              <Stack.Screen name="DatesScreen" component={DatesScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Box>
      </NativeBaseProvider>
    </Provider>
  );
};

//export { StorybookUIRoot as default };
export default App;
