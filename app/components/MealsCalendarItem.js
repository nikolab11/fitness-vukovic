import React, { useState } from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import CheckBox from './CheckBox';

const windowWidth = Dimensions.get('window').width;

const MealsCalendarItem = ({ time, label }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox />
      </View>
    </View>
  );
};

export default MealsCalendarItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginVertical: 3,
    borderWidth: 0.5,
    borderColor: 'rgba(176, 205, 213, 0.3)',
    elevation: 2,
  },
  checkbox: {
    alignSelf: 'center',
    borderWidth: 1,
  },
  checkboxContainer: {
    paddingHorizontal: 5,
  },
  time: {
    color: 'gray',
    fontSize: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 4,
  },
});
