import React from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const FormBackground = ({ children }) => {
  return (
    <View style={styles.registerForm}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo-black.png')}
        />
        <Text style={styles.fitnessText}>── FITNESS ──</Text>
        <Text style={styles.ownerText}>
          <Text style={{ fontSize: 12 }}>by</Text> LJUBOMIR VUKOVIĆ
        </Text>
      </View>
      <View style={styles.triangle} />
      <View style={styles.rectangle}>{children}</View>
    </View>
  );
};

export default FormBackground;

const styles = StyleSheet.create({
  registerForm: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '2%',
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 99999,
    top: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 65,
    borderBottomWidth: 90,
    borderLeftWidth: 65,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(265,265,265,0.7)',
    borderLeftColor: 'transparent',
    alignSelf: 'center',
  },
  rectangle: {
    height: windowHeight * 0.75,
    width: windowWidth * 0.9,
    backgroundColor: 'rgba(265,265,265,0.7)',
    alignItems: 'center',
    paddingTop: 120,
  },
  fitnessText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ownerText: {
    fontSize: 16,
  },
});
