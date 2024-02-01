import { FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

import ProductCard from './ProductCard'
import routes from '../navigation/routes'

const CardProducts = ({productData}) => {
  const navigation = useNavigation()

  const handleProductPress = (item) => {
    navigation.navigate(routes.PRODUCT_DETAILS, item);
    navigation.setOptions({
      headerTitle: item.name,
    });
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
                    addToCartOnPress={() => console.log("Add to cart pressed", item.id)}
                    onPress={() => handleProductPress(item)}
                    buyPress={() => console.log("Buy Now pressed")}
                />
            )}
        />
  )
}
export default CardProducts 