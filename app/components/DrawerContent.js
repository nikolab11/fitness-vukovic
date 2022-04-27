import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { API_KEY } from '@env';
import AuthContext from '../auth/context';
import { removeUser } from '../auth/store';

const DrawerContent = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogOut = async () => {
    const response = await fetch(
      'https://fitness.dev2.nbgcreator.com/api/logout',
      {
        method: 'POST',
        headers: {
          'X-API-KEY': API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_token: user.user_token }),
      }
    );

    const data = await response.json();

    if (data.status === 200) {
      navigation.closeDrawer();
      await removeUser();
      setUser();
      navigation.navigate('Home', { screen: 'LogIn' });
    } else Alert.alert('Greška', 'Došlo je do greške pri odjavljivanju');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <FontAwesome name="sign-out" size={24} color="black" />
        <Text style={styles.buttonText}>Odjavi se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    width: '85%',
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
