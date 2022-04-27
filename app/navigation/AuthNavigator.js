import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LanguageScreen from '../screens/LanguageScreen';
import GenderScreen from '../screens/GenderScreen';
import DesiredBodyScreen from '../screens/DesiredBodyScreen';
import CurrentBodyScreen from '../screens/CurrentBodyScreen';
import ActivityLevelScreen from '../screens/ActivityLevelScreen';
import UserDataScreen from '../screens/UserDataScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const [registerData, setRegisterData] = useState({
    first_name: null,
    last_name: null,
    address: null,
    email: null,
    password: null,
    gender: null,
    language: 'sr',
    current_body_id: null,
    desired_body_id: null,
    activity_level_id: null,
  });

  return (
    <Stack.Navigator initialRouteName="Language">
      <Stack.Screen
        name="Language"
        children={() => (
          <LanguageScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gender"
        children={() => (
          <GenderScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DesiredBody"
        children={() => (
          <DesiredBodyScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CurrentBody"
        children={() => (
          <CurrentBodyScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityLevel"
        children={() => (
          <ActivityLevelScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserData"
        children={() => (
          <UserDataScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogIn"
        children={() => (
          <LogInScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        children={() => (
          <RegisterScreen
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
