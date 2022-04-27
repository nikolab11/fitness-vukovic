import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import desiredBodyTypes from '../data/desiredBodyTypes';
import AppButton from '../components/AppButton';
import BodyType from '../components/BodyType';
import Screen from '../components/Screen';

const DesiredBodyScreen = ({ registerData, setRegisterData }) => {
  const navigation = useNavigation();
  const isSerbian = registerData.language === 'sr';

  const handleNext = () => {
    navigation.navigate('CurrentBody');
  };

  const handleTypeChange = (id) => {
    setRegisterData({
      ...registerData,
      desired_body_id: id,
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {isSerbian ? 'TVOJE ŽELJENO TELO:' : 'YOUR DESIRED BODY:'}
        </Text>
        <View style={styles.imagesContainer}>
          {desiredBodyTypes[registerData.gender].map((item) => {
            return (
              <BodyType
                key={item.id}
                source={item.image}
                description={item.type[registerData.language]}
                style={
                  registerData.desired_body_id === item.id
                    ? styles.selected
                    : { opacity: registerData.desired_body_id ? 0.5 : 1 }
                }
                onPress={() => handleTypeChange(item.id)}
              />
            );
          })}
        </View>
        <AppButton
          onPress={handleNext}
          visible={registerData.desired_body_id}
          style={{ position: 'absolute', bottom: '10%' }}
        >
          {isSerbian ? 'DALJE' : 'NEXT'}
        </AppButton>
      </View>
    </Screen>
  );
};

export default DesiredBodyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15,
    color: 'rgba(0,0,0,0.8)',
  },
  imagesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 180,
    justifyContent: 'center',
    marginTop: '45%',
  },
  selected: {
    borderWidth: 2,
    borderColor: 'orange',
  },
});
