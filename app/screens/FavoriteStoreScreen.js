import { View, StyleSheet } from 'react-native'
import React from 'react'

import FavoriteStoreList from '../components/FavoriteStoreList'
import Screen from '../components/Screen'
import colors from '../config/colors'
import SearchInput from '../components/SearchInput'

const FavoriteStoreScreen = () => {
  return (
    <Screen style={styles.screen}>
        <View style={styles.headBox}>
            <SearchInput placeholder="Search Store" placeholderTextColor={colors.amberGlow} />
        </View>
        <View style={{paddingBottom: 180,paddingTop: 15, height: "100%",}}>
            <FavoriteStoreList />
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    headBox: {
        width: "100%",
        backgroundColor: colors.light,
        padding: 10,
        marginBottom: 10,
        gap: 5,
        borderRadius: 5
    },
    head: {
        fontWeight: "900"
    },
    screen: {
        backgroundColor: colors.midnight,
    }
})

export default FavoriteStoreScreen