import React from 'react';
import HomeStack from './HomeStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from 'const/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BookingsScreen from 'screens/BookingsScreen';
import ProfileScreen from 'screens/ProfileScreen';
import { AppParamList } from 'types/navigation';

const Tab = createBottomTabNavigator<AppParamList>();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.bgColor,
          paddingBottom: 0,
          paddingTop: 2,
          height: 40,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BookingsTab"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
