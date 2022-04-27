import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

import AppInput from '../components/AppInput';
import userInformation from '../data/userInformation';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

import colors from '../config/colors';

const { height } = Dimensions.get('window');
let info = {};

const UserDataScreen = ({ registerData, setRegisterData }) => {
  const route = useRoute();
  const navigation = useNavigation();

  const page = route.params.page;

  const userData = userInformation[registerData.gender];
  const data =
    page === 1 ? userData.slice(0, 5) : userData.slice(5, userData.length);

  const handleNext = () => {
    if (page === 1) {
      navigation.navigate('UserData', { page: 2 });
    } else {
      setTimeout(() => {
        setRegisterData({ ...registerData, ...info });
      }, 500);

      navigation.navigate('Register');
    }
  };

  const updateInfo = (update) => {
    info = { ...info, ...update };
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {registerData.language === 'sr' ? 'PODACI' : 'INFORMATION'}
        </Text>

        {data.map((item) => {
          return (
            <AppInput
              key={item.id}
              updateInfo={updateInfo}
              language={registerData.language}
              item={item}
              desired={item.desired}
              keyboardType="numeric"
              autoCorrect={false}
            />
          );
        })}

        <View style={styles.buttonContainer}>
          <View style={styles.squareIndicators}>
            <View
              style={[
                styles.square,
                { backgroundColor: page === 1 ? colors.secondary : 'gray' },
              ]}
            />
            <View
              style={[
                styles.square,
                { backgroundColor: page === 1 ? 'gray' : colors.secondary },
              ]}
            />
          </View>
          <AppButton onPress={handleNext} visible={true}>
            DALJE
          </AppButton>
        </View>
      </View>
    </Screen>
  );
};

export default UserDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: '5%',
    alignSelf: 'center',
    height: height,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15,
    alignSelf: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: '7%',
    alignSelf: 'center',
  },
  squareIndicators: {
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 30,
  },
  square: {
    width: 15,
    height: 15,
    backgroundColor: 'gray',
  },
});
