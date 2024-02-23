import { FlatList, ActivityIndicator, View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CartItem from './cart/CartItem';
import routes from '../navigation/routes';
import colors from '../config/colors';
import SearchInput from './SearchInput';

const CardList = () => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchCartItems();
  }, []); 
  
  const fetchCartItems = async () => {
    try {
      // Retrieve cart items from AsyncStorage
      const cartItems = await AsyncStorage.getItem('cartItems');
      if (cartItems) {
        // If there are items in the cart, parse and set them
        const parsedCartItems = JSON.parse(cartItems);
        setCartData(parsedCartItems);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      // Set loading to false once the data has been fetched
      setLoading(false);
    }
  };
  const handleDelete = (item) => {
    const newCartData = cartData.filter((i) => i.id !== item.id);
    setCartData(newCartData);
    AsyncStorage.setItem('cartItems', JSON.stringify(newCartData));
  };

  const handleCartItemPress = (item) => {
    navigation.navigate(routes.PRODUCT_DETAILS, item);
  };

  if (loading) {
    // Display a loading indicator while data is being fetched
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
    <View style={styles.headBox}>
        <SearchInput 
          placeholder="Search Product" 
          placeholderTextColor={colors.amberGlow} 
        />
      </View>
    <FlatList
      data={cartData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CartItem
          companyName={item.stores[0]}
          desc={item.description}
          image={item.images[0].image}
          name={item.title}
          onPress={() => handleCartItemPress(item)}
          price={item.price}
          delPress={() => handleDelete(item)}
        />
      )}
      refreshing={loading} 
      onRefresh={() => {
        // This will refetch the data from AsyncStorage
        setLoading(true);
        fetchCartItems();
      }}
    />
    </>
  );
};

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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardList;
