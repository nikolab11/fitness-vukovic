import React from 'react';
import { StyleSheet, Dimensions, View, ImageBackground } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const triangleTopPosition = windowHeight * 0.88;
const triangleHeight = windowHeight * 0.12;
const triangleWidth = windowWidth * 0.5;
const triangleOffset = windowWidth * 0.25;

const Screen = ({ children }) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../../assets/app-background.png')}
    >
      {children}
    </ImageBackground>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  center: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  behind: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  triangles: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 0,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: triangleWidth,
    borderBottomWidth: triangleHeight,
    borderLeftWidth: triangleWidth,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(176, 205, 213,0.3)',
    borderLeftColor: 'transparent',
    alignSelf: 'center',
  },
  firstTriangle: {
    position: 'absolute',
    top: triangleTopPosition,
    left: -triangleOffset,
  },
  secondTriangle: {
    position: 'absolute',
    top: triangleTopPosition,
    alignSelf: 'center',
  },
  thirdTriangle: {
    position: 'absolute',
    top: triangleTopPosition,
    alignSelf: 'center',
    right: -triangleOffset,
  },
});
