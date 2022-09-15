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
import { COLORS } from 'const/colors';
import { Box, NativeBaseProvider, StatusBar } from 'native-base';
import { Provider } from 'react-redux';
import AppStack from 'routes/AppStack';
import { store } from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Box safeArea flex={1} backgroundColor={COLORS.bgColor}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </Box>
      </NativeBaseProvider>
    </Provider>
  );
};

//export { StorybookUIRoot as default };
export default App;
