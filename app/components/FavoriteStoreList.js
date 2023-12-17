import { FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import FavoriteCard from './FavoriteCard'

const FavoriteStoreData = [
    {
        id: 1,
        shopName: "Apple store",
        image: require("../assets/apple.png"),
    },
    {
        id: 2,
        shopName: "Samsung store",
        image: require("../assets/apple.png"),
    },
    {
        id: 3,
        shopName: "google",
        image: require("../assets/apple.png"),
    },
    {
        id: 4,
        shopName: "facebook",
        image: require("../assets/apple.png"),
    },
    {
        id: 5,
        shopName: "niveel",
        image: require("../assets/apple.png"),
    },
    {
        id: 6,
        shopName: "itsreaddy",
        image: require("../assets/apple.png"),
    },
    {
        id: 7,
        shopName: "google",
        image: require("../assets/apple.png"),
    },
    {
        id: 8,
        shopName: "google",
        image: require("../assets/apple.png"),
    },
    {
        id: 9,
        shopName: "google",
        image: require("../assets/apple.png"),
    },
    {
        id: 10,
        shopName: "google",
        image: require("../assets/apple.png"),
    },
]

const FavoriteStoreList = () => {
    const [favStore, setFavStore] = useState(FavoriteStoreData)
    const [refreshing, setRefreshing] = useState(false)
    const navigation = useNavigation()
    
    const handleFavDelete = store =>{
        setFavStore(favStore.filter(s => s.id !== store.id))
    }
  return (
    <FlatList 
        data={favStore}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> <FavoriteCard 
                                    image={item.image}
                                    shopName={item.shopName}
                                    onPress={()=> navigation.navigate("Store", item)}
                                    removeFavorite={()=> handleFavDelete(item)}
                                />}
        refreshing={refreshing}
        onRefresh={()=>{
            setFavStore([
                {
                    id: 1,
                    shopName: "Apple store",
                    image: require("../assets/apple.png"),
                },
                {
                    id: 2,
                    shopName: "Samsung store",
                    image: require("../assets/apple.png"),
                },
            ])
        }}
        numColumns={2}
    />
  )
}


export default FavoriteStoreList