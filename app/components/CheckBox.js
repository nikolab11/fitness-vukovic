import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const CheckBox = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsSelected(!isSelected)}
      style={styles.container}
    >
      {isSelected ? (
        <MaterialIcons name="check" size={18} color="black" />
      ) : null}
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
