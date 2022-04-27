import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import AuthContext from '../auth/context';

import DrawerContent from '../components/DrawerContent';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const { user } = useContext(AuthContext);
  const Drawer = createDrawerNavigator();

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="Home"
          component={user ? TabNavigator : AuthNavigator}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
