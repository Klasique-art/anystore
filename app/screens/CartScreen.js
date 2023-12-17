import { View, StyleSheet } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import colors from '../config/colors'
import CardList from '../components/CartList'
import SearchInput from '../components/SearchInput'

const CartScreen = () => {
  return (
    <Screen style={styles.screen}>
        <View style={styles.headBox}>
            <SearchInput placeholder="search product" placeholderTextColor={colors.amberGlow} />
        </View>
        <View style={{paddingBottom: 150, height: "100%"}}>
            <CardList />
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    headBox: {
        width: "100%",
        backgroundColor: colors.light,
        padding: 10,
        gap: 5,
        marginBottom: 15,
        borderRadius: 5
    },
    head: {
        fontWeight: "900",
    },
    screen: {
        backgroundColor: colors.midnight,
        padding: 10,
    }
})

export default CartScreen