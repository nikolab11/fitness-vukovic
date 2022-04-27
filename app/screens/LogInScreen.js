import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import AuthContext from '../auth/context';

import AppButton from '../components/AppButton';
import FormBackground from '../components/FormBackground';
import FormInput from '../components/FormInput';

import { API_KEY } from '@env';
import { persistUser } from '../auth/store';

const LogInScreen = ({ registerData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AuthContext);

  const navigation = useNavigation();
  const isSerbian = registerData.language === 'sr';

  const handleLogIn = async () => {
    const response = await fetch(
      'https://fitness.dev2.nbgcreator.com/api/login',
      {
        method: 'POST',
        headers: {
          'X-API-KEY': API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (data.status === 200) {
      persistUser(data.data);
      setUser(data.data);
    } else Alert.alert('Greška', 'Došlo je do greške pri prijavljivanju');
  };

  return (
    <ImageBackground
      source={require('../../assets/background-login.jpg')}
      style={styles.backgroundImage}
    >
      <FormBackground>
        <Text style={styles.headerText}>
          {isSerbian ? 'PRIJAVA' : 'LOG IN'}
        </Text>
        <View style={styles.form}>
          <FormInput
            name="email"
            icon="email"
            material
            placeholder={isSerbian ? 'email adresa' : 'email adress'}
            textContentType="emailAddress"
            value={email}
            onChangeText={(value) => setEmail(value.trim())}
            autoCapitalize="none"
          />
          <FormInput
            name="password"
            icon="lock"
            placeholder={isSerbian ? 'Šifra' : 'Password'}
            textContentType="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={{ alignSelf: 'flex-start' }}>
          <Text style={styles.forgotPassword}>
            {isSerbian ? 'Zaboravili ste šifru?' : 'Forgot password?'}
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <AppButton
            visible={true}
            style={{ width: '100%', alignItems: 'center' }}
            onPress={handleLogIn}
          >
            {isSerbian ? 'PRIJAVITE SE' : 'LOG IN'}
          </AppButton>
          <TouchableOpacity
            onPress={() => {
              if (registerData.gender) {
                navigation.navigate('Register');
              } else navigation.navigate('Language');
            }}
          >
            <Text style={styles.registerText}>
              {isSerbian ? 'Novi nalog' : 'New account'}
            </Text>
          </TouchableOpacity>
        </View>
      </FormBackground>
    </ImageBackground>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 0.9,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  form: {
    width: '90%',
  },
  forgotPassword: {
    paddingLeft: '5%',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    bottom: '2%',
    position: 'absolute',
    width: '90%',
  },
  registerText: {
    fontSize: 20,
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});
