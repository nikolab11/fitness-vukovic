import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import AppButton from '../components/AppButton';
import BodyType from '../components/BodyType';
import Screen from '../components/Screen';

import actualBodyTypes from '../data/actualBodyType';

const CurrentBodyScreen = ({ registerData, setRegisterData }) => {
  const navigation = useNavigation();
  const isSerbian = registerData.language === 'sr';

  const handleNext = () => {
    navigation.navigate('ActivityLevel');
  };

  const handleTypeChange = (id) => {
    setRegisterData({
      ...registerData,
      current_body_id: id,
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {isSerbian ? 'TVOJE TRENUTNO TELO:' : 'YOUR CURRENT BODY:'}
        </Text>

        <FlatList
          style={{ marginRight: '-8%', marginTop: '15%', height: 300 }}
          data={actualBodyTypes[registerData.gender]}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <BodyType
              source={item.image}
              description={item.type[registerData.language]}
              style={
                registerData.current_body_id === item.id
                  ? styles.selected
                  : { opacity: registerData.current_body_id ? 0.5 : 1 }
              }
              onPress={() => handleTypeChange(item.id)}
            />
          )}
          bounces={false}
        />
        <AppButton
          onPress={handleNext}
          style={{ position: 'absolute', bottom: '10%' }}
          visible={registerData.current_body_id}
        >
          {isSerbian ? 'DALJE' : 'NEXT'}
        </AppButton>
      </View>
    </Screen>
  );
};

export default CurrentBodyScreen;

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
  selected: {
    borderWidth: 2,
    borderColor: 'orange',
  },
});
