import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ProductsFetchData from '../backend/ProductsFetchData'
import Screen from '../components/Screen'
import colors from '../config/colors'
import CodeSearch from '../components/CodeSearch'
import SearchInput from '../components/SearchInput'
import routes from '../navigation/routes'
import CardProducts from '../components/CardProducts'

const ProductsScreen = () => {
    const [searchText, setSearchText] = useState("")
    const navigation = useNavigation()

    const handleSearch = () => {
        console.log("searching for: ", searchText)
    }
    const navBarToggle = () => {
        console.log("toggle navbar")
    }
    const handleFavorite = () => {
        navigation.navigate(routes.FAVORITES)
    }
    const handleCart = () => {
        navigation.navigate(routes.CART)
    }

    return (
        <Screen style={{ backgroundColor: colors.midnight }}>
            <ProductsFetchData />
            {/* top bar */}
            <View style={styles.topBarContainer}>
                <View style={styles.navbar}>
                    <Text style={{ color: colors.white, fontSize: 20, fontWeight: '900', marginLeft: 10 }}>Anystore</Text>
                    <View style={styles.iconBox}>
                        <TouchableOpacity onPress={handleFavorite}>
                            <MaterialCommunityIcons name="heart" size={30} color={colors.punch} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCart}>
                            <MaterialCommunityIcons name="cart" size={30} color={colors.amberGlow} />
                        </TouchableOpacity>
                    </View>
                </View>
                <SearchInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Search by Keyword"
                    placeholderTextColor={colors.misty}
                    onChangeText={text => setSearchText(text)}
                    onPress={handleSearch}
                />
                <CodeSearch />
            </View>
            {/* end of top bar */}
            {/* main body */}
            <View style={styles.mainBody}>
                <CardProducts />
            </View>
            {/* end of main body */}
        </Screen>
    )
}


const styles = StyleSheet.create({
    iconBox: {
        flexDirection: "row",
        gap: 20,
    },
    mainBody: {
        width: '100%',
        height: '75%',
        marginTop: 40,
        backgroundColor: colors.horizon,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    navbar: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    topBarContainer: {
        width: '100%',
        height: "20%",
        gap: 15,
    },
});

export default ProductsScreen;
