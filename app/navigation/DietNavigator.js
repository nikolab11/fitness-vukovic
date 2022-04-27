import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DietNavigator = () => {
  return (
    <View style={styles.container}>
      <Text>Lista Hrane</Text>
    </View>
  );
};

export default DietNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
