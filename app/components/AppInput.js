import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

import colors from '../config/colors';

const windowHeight = Dimensions.get('window').height;

const AppInput = ({
  updateInfo,
  style,
  item,
  desired,
  language,
  ...otherProps
}) => {
  const [currentValue, setCurrentValue] = useState(item.defaultValue);
  const [desiredValue, setDesiredValue] = useState(item.defaultDesiredValue);

  useLayoutEffect(() => {
    return () => {
      if (!desired) {
        updateInfo({ [item.name]: parseInt(currentValue) });
      } else
        updateInfo({
          [item.name]: parseInt(currentValue),
          [`desired_${item.name}`]: parseInt(desiredValue),
        });
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{item.label[language]}</Text>
      {desired ? (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '48%' }}>
            <TextInput
              value={currentValue}
              onChangeText={(value) => {
                setCurrentValue(value);
              }}
              style={[styles.input, style]}
              {...otherProps}
            />
          </View>
          <View style={{ width: '48%' }}>
            <TextInput
              value={desiredValue}
              onChangeText={(value) => {
                setDesiredValue(value);
              }}
              style={[
                styles.input,
                style,
                { backgroundColor: '#596875', color: 'white' },
              ]}
              {...otherProps}
            />
          </View>
        </View>
      ) : (
        <TextInput
          value={currentValue}
          onChangeText={(value) => {
            setCurrentValue(value);
          }}
          style={[styles.input, style, { color: 'gray' }]}
          {...otherProps}
        />
      )}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  label: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    backgroundColor: colors.primary,
    height: windowHeight * 0.058,
    paddingLeft: 15,
    fontSize: 18,
  },
});
