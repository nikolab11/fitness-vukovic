import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProfileNavigator = () => {
  return (
    <View style={styles.container}>
      <Text>Profil</Text>
    </View>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
