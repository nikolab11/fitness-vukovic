import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const CustomTabIcon = ({ label, color, iconName }) => {
  return (
    <View style={styles.tab}>
      {label === 'Profil' ? (
        <FontAwesome5
          name={iconName}
          size={25}
          color={color}
          style={{ marginBottom: 6, marginTop: -2 }}
        />
      ) : label === 'Lista hrane' ? (
        <View style={{ width: '60%' }}>
          <View style={[styles.fishMenu, { backgroundColor: color }]}>
            <FontAwesome5
              name="fish"
              size={15}
              color="white"
              style={{ transform: [{ rotate: '180deg' }] }}
            />
          </View>
          <View style={styles.lines}>
            <View style={[styles.line, { backgroundColor: color }]} />
            <View style={[styles.line, { backgroundColor: color }]} />
          </View>
        </View>
      ) : (
        <MaterialIcons
          style={{ marginTop: -5, marginBottom: 1 }}
          name={iconName}
          size={35}
          color={color}
        />
      )}
      <Text style={{ color: color, fontSize: 11 }}>{label}</Text>
    </View>
  );
};

export default CustomTabIcon;

const styles = StyleSheet.create({
  tab: {
    width: '300%',
    alignItems: 'center',
    marginTop: -6,
  },
  fishMenu: {
    borderRadius: 5,
    alignItems: 'center',
  },
  line: {
    height: 2.5,
    width: '95%',
    marginTop: 3,
    alignSelf: 'center',
  },
  lines: {
    marginTop: 2,
    marginBottom: 3,
  },
});
