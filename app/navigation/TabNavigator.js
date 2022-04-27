import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import DietNavigator from './DietNavigator';
import MeniNavigator from './MeniNavigator';
import ProfileNavigator from './ProfileNavigator';

import CustomTabIcon from '../components/CustomTabIcon';

import { NavigationContainer } from '@react-navigation/native';

const TabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, state }) => {
          let iconName;
          let label;
          if (route.name === 'Diet') {
            iconName = 'dashboard';
            label = 'Lista hrane';
          } else if (route.name === 'Meni') {
            iconName = 'dashboard';
            label = 'Meni';
          } else if (route.name === 'Profile') {
            iconName = 'user-alt';
            label = 'Profil';
          }

          // You can return any component that you like here!
          return (
            <CustomTabIcon iconName={iconName} color={color} label={label} />
          );
        },
      })}
      labeled={false}
      activeColor={'gray'}
      inactiveColor={'#a9a9a9'}
      shifting={true}
      barStyle={{
        backgroundColor: 'transparent',
        paddingBottom: 10,
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      initialRouteName={'Meni'}
      keyboardHidesNavigationBar={true}
    >
      <Tab.Screen name="Diet" component={DietNavigator} />
      <Tab.Screen name="Meni" component={MeniNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
