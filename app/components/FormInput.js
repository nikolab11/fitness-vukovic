import React from 'react';
import { StyleSheet, TextInput, Dimensions, View } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const windowHeight = Dimensions.get('window').height;

const FormInput = ({ style, icon, material, ...otherProps }) => {
  return (
    <View>
      <View style={styles.icon}>
        {material ? (
          <MaterialIcons name={icon} size={18} color="rgba(0,0,0,0.6)" />
        ) : (
          <FontAwesome5 name={icon} size={18} color="rgba(0,0,0,0.6)" />
        )}
      </View>
      <TextInput style={[styles.input, style]} {...otherProps} />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.058,
    width: '100%',
  },
  input: {
    backgroundColor: colors.primary,
    height: windowHeight * 0.058,
    width: '100%',
    paddingLeft: 50,
    fontSize: 18,
    marginVertical: 3,
  },
  icon: {
    position: 'absolute',
    zIndex: 999,
    elevation: 999,
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
