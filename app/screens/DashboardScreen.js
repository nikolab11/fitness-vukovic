import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DashboardButton from '../components/DashboardButton';
import MealsCalendar from '../components/MealsCalendar';

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dashboard}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="settings" size={30} color="black" />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.fitnessText}>── FITNESS ──</Text>
            <Text style={styles.ownerText}>
              <Text style={{ fontSize: 10 }}>by</Text> LJUBOMIR VUKOVIĆ
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="notifications" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <DashboardButton icon="sticky-note-2" label="Plan ishrane" />
          <DashboardButton icon="fitness-center" label="Vežbe" />
          <DashboardButton icon="messenger-outline" label="Poruke" />
        </View>
        <MealsCalendar />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  dashboard: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 15,
  },
  fitnessText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ownerText: {
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
