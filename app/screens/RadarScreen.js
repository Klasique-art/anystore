import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import SearchInput from '../components/SearchInput';
import AppText from '../components/AppText';
import RadarList from '../components/RadarList';

function RadarScreen(props) {
  return (
    <Screen style={styles.screen}>
        <View style={styles.header}>
            <SearchInput
                placeholder="Search by Keyword"
                placeholderTextColor={colors.amberGlowLight}
                icon="magnify"
                width="90%"
            />
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
        paddingVertical: 10,
        gap: 10,
    },
    screen: {
        backgroundColor: colors.midnight,
        padding: 10,
    },
    text: {
        color: colors.white,
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RadarScreen;