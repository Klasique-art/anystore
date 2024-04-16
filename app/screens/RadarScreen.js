import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

import colors from '../config/colors';
import Screen from '../components/Screen';
import SearchInput from '../components/SearchInput';
import AppText from '../components/AppText';
import RadarList from '../components/RadarList';

function RadarScreen(props) {

  return (
    <Screen style={styles.screen}>
        <View style={styles.header}>
          <AppText style={styles.text}>Track your products to get notified of price changes.</AppText>
        </View>
        <View style={styles.container}>
          <RadarList />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
    header: {
      marginVertical: 10,
      backgroundColor: colors.horizon,
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    screen: {
        backgroundColor: colors.midnight,
        padding: 10,
    },
    text: {
        color: colors.white,
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RadarScreen;
