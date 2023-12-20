import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';

function FriendlyScreen(props) {
  return (
    <Screen style={styles.screen}>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
    screen: {
        backgroundColor: colors.midnight,
        padding: 10,
    },
});

export default FriendlyScreen;