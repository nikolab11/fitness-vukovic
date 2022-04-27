import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';

import MealsCalendarItem from './MealsCalendarItem';

const MealsCalendar = () => {
  const today = moment(new Date()).format('D MMM');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="calendar-today" size={35} color="black" />
          <Text style={styles.dateText}>{today}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.calendarButtonText}>Vidi kalendar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{ backgroundColor: '#f9f9f9' }}
        showsVerticalScrollIndicator={false}
      >
        <MealsCalendarItem time="08:00" label="Doručak" />
        <MealsCalendarItem time="09:30" label="Teretana" />
        <MealsCalendarItem time="11:00" label="Užina" />
        <MealsCalendarItem time="15:00" label="Ručak" />
      </ScrollView>
    </View>
  );
};

export default MealsCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollview: {
    width: '110%',
    alignSelf: 'center',
  },
  calendarButtonText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 12,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 5,
  },
});
