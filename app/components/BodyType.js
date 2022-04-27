import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const BodyType = ({ source, description, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.imageContainer}
      onPress={onPress}
    >
      <Image style={[styles.image, style]} source={source} />
      <Text style={styles.typeText}>{description}</Text>
    </TouchableOpacity>
  );
};

export default BodyType;

const styles = StyleSheet.create({
  imageContainer: {
    width: '30%',
    height: windowHeight * 0.25,
    margin: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  typeText: {
    fontWeight: '600',
    marginTop: 10,
  },
});
