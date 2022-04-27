import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

import { useNavigation } from '@react-navigation/core';

const windowHeight = Dimensions.get('window').height;

const GenderScreen = ({ registerData, setRegisterData }) => {
  const navigation = useNavigation();

  const isSerbian = registerData.language === 'sr';

  const handleNext = () => {
    navigation.navigate('DesiredBody');
  };

  const handleGenderPress = (gender) => {
    setRegisterData({ ...registerData, gender: gender });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.genderText}>{isSerbian ? 'POL' : 'GENDER'}:</Text>
        <TouchableOpacity
          onPress={() => handleGenderPress('female')}
          activeOpacity={0.7}
          style={styles.imageContainer}
        >
          <Image
            style={
              registerData.gender === 'female'
                ? [styles.image, styles.selected]
                : [styles.image, { opacity: registerData.gender ? 0.7 : 1 }]
            }
            source={require('../../assets/woman-gym.jpg')}
          />
          <Text style={styles.imageText}>{isSerbian ? 'Žena' : 'Female'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleGenderPress('male')}
          activeOpacity={0.7}
          style={styles.imageContainer}
        >
          <Image
            style={
              registerData.gender === 'male'
                ? [styles.image, styles.selected]
                : [styles.image, { opacity: registerData.gender ? 0.5 : 1 }]
            }
            source={require('../../assets/man-gym.jpg')}
          />
          <Text style={styles.imageText}>
            {isSerbian ? 'Muškarac' : 'Male'}
          </Text>
        </TouchableOpacity>
        <AppButton
          visible={registerData.gender}
          onPress={handleNext}
          style={{ marginTop: '5%' }}
        >
          {isSerbian ? 'DALJE' : 'NEXT'}
        </AppButton>
      </View>
    </Screen>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  genderText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15,
  },
  imageContainer: {
    height: windowHeight * 0.33,
    width: '90%',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageText: {
    position: 'absolute',
    color: 'white',
    right: 20,
    bottom: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  selected: {
    borderWidth: 3,
    borderColor: 'orange',
    opacity: 1,
  },
});
