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
import { NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import DatesScreen from 'screens/DatesScreen';
import HomeScreen from 'screens/HomeScreen';
import HotelInfoScreen from 'screens/HotelInfoScreen';
import { store } from 'store';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const flex = { flex: 1 };

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <GestureHandlerRootView style={flex}>
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
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </Provider>
  );
};

//export { StorybookUIRoot as default };
export default App;
