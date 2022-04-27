import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

import { useNavigation } from '@react-navigation/core';
import colors from '../config/colors';

const LanguageScreen = ({ registerData, setRegisterData }) => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('Gender');
  };

  const handleLanguageChange = (lan) => {
    setRegisterData({
      ...registerData,
      language: lan,
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.fitnessText}>── FITNESS ──</Text>
          <Text style={styles.ownerText}>by LJUBOMIR VUKOVIĆ</Text>
        </View>
        <Text style={styles.welcomeText}>Welcome to FITNESS.</Text>
        <View style={styles.flagsContainer}>
          <TouchableOpacity
            onPress={() => handleLanguageChange('sr')}
            style={styles.singleFlag}
          >
            <Image
              source={require('../../assets/serbian-flag.png')}
              style={
                registerData.language === 'sr'
                  ? [styles.flag, styles.selected]
                  : styles.flag
              }
            />
            <Text style={styles.languageText}>Srpski</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLanguageChange('en')}
            style={styles.singleFlag}
          >
            <Image
              source={require('../../assets/british-flag.png')}
              style={
                registerData.language === 'en'
                  ? [styles.flag, styles.selected]
                  : styles.flag
              }
            />
            <Text style={styles.languageText}>English</Text>
          </TouchableOpacity>
        </View>
        <AppButton
          visible={true}
          onPress={handleStart}
          style={{ marginTop: '20%' }}
        >
          START
        </AppButton>
      </View>
    </Screen>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: '25%',
    alignItems: 'center',
  },
  logo: {
    height: 130,
    width: 130,
  },
  fitnessText: {
    fontWeight: '600',
    fontSize: 32,
  },
  ownerText: {
    fontWeight: '400',
    fontSize: 26,
    color: 'rgba(0,0,0,0.8)',
  },
  welcomeText: {
    marginTop: '12%',
    fontWeight: '500',
    fontSize: 26,
    color: 'rgba(0,0,0,0.7)',
  },
  flagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    marginTop: '10%',
  },
  singleFlag: {
    alignItems: 'center',
  },
  flag: {
    height: 45,
    width: 70,
    borderRadius: 10,
    marginBottom: 8,
    opacity: 0.5,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '400',
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.secondary,
    opacity: 1,
  },
});
