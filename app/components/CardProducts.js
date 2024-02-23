import { FlatList, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import ProductCard from './ProductCard'
import routes from '../navigation/routes'
import {addToCart} from '../hooks/utils'

const CardProducts = ({productData}) => {
  const navigation = useNavigation()
  const [cartItemAdded, setCartItemAdded] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleProductPress = (item) => {
    navigation.navigate(routes.PRODUCT_DETAILS, item);
    navigation.setOptions({
      headerTitle: item.name,
    });
  };

  const fetchCartItems = async () => {
    try {
        const existingCartItems = await AsyncStorage.getItem('cartItems');
        const parsedExistingCartItems = JSON.parse(existingCartItems) || [];
        setCartItemAdded(parsedExistingCartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
    }
  };

  const handleAddToCart = async (product) => {
    addToCart(product);
  };

  return (
        <FlatList 
            data={productData}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({item}) => (
               <ProductCard 
                    name={item.title}
                    price={item.price}
                    image={item.images[0].image}
                    desc={item.description}
                    companyName={item.stores[0]}
                    addToCart
                    addToCartOnPress={() => handleAddToCart(item)}
                    onPress={() => handleProductPress(item)}
                    buyPress={() => console.log("Buy Now pressed")}
                />
            )} 
        />
  )
}
export default CardProducts 