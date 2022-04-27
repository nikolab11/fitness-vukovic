import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import FlashMessage from 'react-native-flash-message';
import AppLoading from 'expo-app-loading';

import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import Screen from './app/components/Screen';

import { getUser } from './app/auth/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState();

  async function getUserInfo() {
    const info = await getUser();
    setUser(info);
  }

  if (!isReady)
    return (
      <AppLoading
        startAsync={getUserInfo}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StatusBar hidden={true} />
      <Screen>
        <FlashMessage position="top" />
        <AppNavigator />
      </Screen>
    </AuthContext.Provider>
  );
}
