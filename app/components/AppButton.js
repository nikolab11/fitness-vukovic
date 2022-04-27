import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const AppButton = ({ onPress, children, style, visible }) => {
  return (
    <>
      {visible ? (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
