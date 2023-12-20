import { FlatList } from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'

import CartItem from './cart/CartItem'
import routes from '../navigation/routes'

const initialCartData = [
    {
        id: 1,
        name: "Apple watch",
        desc: "this is an apple watch",
        price: "100",
        companyName: "apple",
        image: require("../assets/apple.png"),
    },
    {
        id: 2,
        name: "samsung watch",
        desc: "this is a samsung watch",
        price: "100",
        companyName: "samsung",
        image: require("../assets/apple.png"),
    },
    {
        id: 3,
        name: "mouse and keyboard",
        desc: "this is an apple watch",
        price: "100",
        companyName: "mouse",
        image: require("../assets/apple.png"),
    },
]

const CardList = () => {
  const [cartData, setCartData] = useState(initialCartData)
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()

  const handleDelete = item => {
    const newCartData = cartData.filter(i => i.id !== item.id)
    setCartData(newCartData) 
  }
  const handleCartItemPress = item => {
    navigation.navigate(routes.PRODUCT_DETAILS, item)
    
  }
  return (
    <FlatList 
        data={cartData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> <CartItem 
                                    companyName={item.companyName}
                                    desc={item.desc}
                                    image={item.image}
                                    name={item.name}
                                    onPress={()=> handleCartItemPress(item)}
                                    price={item.price}
                                    delPress={() =>handleDelete(item)}
                                />}
        refreshing={refreshing}
        onRefresh={()=>{
          setCartData([
            {
              id: 1,
              name: "Apple watch",
              desc: "this is an apple watch",
              price: "100",
              companyName: "apple",
              image: require("../assets/apple.png"),
            },
          ]) 
        }}
    />
  )
}

export default CardList