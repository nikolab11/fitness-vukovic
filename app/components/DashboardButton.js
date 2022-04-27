import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Shadow } from 'react-native-shadow-2';

import colors from '../config/colors';

const DashboardButton = ({ icon, label }) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container}>
      <Shadow distance={10} startColor="rgba(176, 205, 213, 0.2)">
        <View style={styles.box}>
          <MaterialIcons name={icon} size={50} color={colors.primary} />
        </View>
      </Shadow>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DashboardButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    elevation: 5,
  },
  label: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: 11,
  },
});
