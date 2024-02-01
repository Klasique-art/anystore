import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState,} from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

import ActivityIndicator from '../components/ActivityIndicator'
import Screen from '../components/Screen'
import colors from '../config/colors'
import CodeSearch from '../components/CodeSearch'
import SearchInput from '../components/SearchInput'
import routes from '../navigation/routes'
import CardProducts from '../components/CardProducts'
import ListItem from '../components/ListItem'

const ProductsScreen = () => {
    const [searchText, setSearchText] = useState("")
    const [products, setProducts] = useState([])
    const [resultNotFound, setResultNotFound] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    const handleSearch = () => {
        setLoading(true)
        axios.get(`https://storeapi-961b4e11e016.herokuapp.com/api/products/?search=${searchText}`)
            .then(res => {
                const result = res.data
                setProducts(result)
                setLoading(false)

                if (result.length === 0) {
                    setResultNotFound(true)
                } else {
                    setResultNotFound(false)
                }
                
            })
            .catch(err => {
                console.log("error getting products",err)
            })
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
                    searchPress={handleSearch}
                />
                <CodeSearch />
            </View>
            {/* end of top bar */}
            {/* main body */}
            <View style={styles.mainBody}>
                <ActivityIndicator visible={loading} />
                <CardProducts 
                    productData={products}
                />
                {resultNotFound === true && 
                <View style={{
                    width: '100%',
                    height: "100%",
                    justifyContent: 'center',
                }}>
                    <ListItem
                        title="No result found"
                        subtitle="Try searching with another keyword"
                        style={{color: colors.midnight, fontSize: 18, fontWeight: "bold"}}
                        IconComponent={
                            <MaterialCommunityIcons name="alert-circle" size={35} color={colors.punch} />
                        }
                    />
                </View>}
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
