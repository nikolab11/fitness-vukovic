import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import activityLevels from '../data/activityLevels';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';

const ActivityLevelScreen = ({ registerData, setRegisterData }) => {
  const navigation = useNavigation();
  const isSerbian = registerData.language === 'sr';

  const handleNext = () => {
    navigation.navigate('UserData', { page: 1 });
  };

  const handleActivityChange = (id) => {
    setRegisterData({
      ...registerData,
      activity_level_id: id,
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {isSerbian
              ? 'KOLIKO ČESTO STE AKTIVNI?'
              : 'YOUR LEVEL OF ACTIVITY?'}
          </Text>
          <View style={styles.questionBox}>
            <AntDesign name="question" size={23} color="white" />
          </View>
        </View>
        <View style={{ width: '85%', marginTop: '5%' }}>
          {activityLevels.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => handleActivityChange(item.id)}
                style={[
                  styles.activity,
                  {
                    backgroundColor:
                      registerData.activity_level_id === item.id
                        ? colors.secondary
                        : colors.primary,
                  },
                ]}
                activeOpacity={0.7}
                key={item.id}
              >
                <Text style={{ fontSize: 16, color: 'white' }}>
                  {item.level[registerData.language]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <AppButton
          onPress={handleNext}
          visible={registerData.activity_level_id}
          style={{ position: 'absolute', bottom: '10%' }}
        >
          {isSerbian ? 'REGISTRUJ SE' : 'REGISTER'}
        </AppButton>
      </View>
    </Screen>
  );
};

export default ActivityLevelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '85%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
  questionBox: {
    backgroundColor: colors.secondary,
  },
  activity: {
    width: '100%',
    backgroundColor: colors.primary,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
