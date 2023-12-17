import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import SearchInput from '../components/SearchInput';
import AppText from '../components/AppText';

function RadarScreen(props) {
  return (
    <Screen style={styles.screen}>
        <View style={styles.header}>
            <SearchInput
                placeholder="Search products"
                placeholderTextColor={colors.amberGlowLight}
                icon="magnify"
                width="90%"
            />
            <AppText style={styles.text}>Track your products to get notified of changed prices.</AppText>
        </View>
        <View style={styles.container}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
    header: {
        paddingVertical: 10,
        gap: 10,
    },
    screen: {
        backgroundColor: colors.midnight,
        padding: 10,
    }
});

export default RadarScreen;