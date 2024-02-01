import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
 
import FavoriteCard from './FavoriteCard'

const FavoriteStoreList = () => {
    const [favStore, setFavStore] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {
        fetchFavoriteStores();
    }, []); 
    
    const fetchFavoriteStores = async () => {
        try {
            const storedFavStores = await AsyncStorage.getItem('favStores');
            if (storedFavStores) {
                const parsedFavStores = JSON.parse(storedFavStores);
                setFavStore(parsedFavStores);
            }
        } catch (error) {
            console.error('Error fetching favorite stores:', error);
        }
    };

    const handleFavDelete = async (store) => {
        try {
            const updatedFavStores = favStore.filter(s => s.id !== store.id);
            setFavStore(updatedFavStores);
            await AsyncStorage.setItem('favStores', JSON.stringify(updatedFavStores));
        } catch (error) {
            console.error('Error removing favorite store:', error);
        }
    };
    console.log(favStore)
    return (
        <FlatList 
            data={favStore}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
                <FavoriteCard 
                    shopName={item}
                    onPress={() => {
                        navigation.navigate("Store", item)
                    }}
                    removeFavorite={() => handleFavDelete(item)}
                />
            )}
            refreshing={refreshing}
            onRefresh={() => {
                fetchFavoriteStores();
            }}
            numColumns={2}
        />
    );
};


export default FavoriteStoreList;
