import React, {useState} from 'react'
import { FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import CartItem from './cart/CartItem'
import routes from '../navigation/routes'

const initialRadarData = [
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

function RadarList(props) {
  const [radarData, setRadarData] = useState(initialRadarData)
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()

  const handleDelete = item => {
    const newRadarData = radarData.filter(i => i.id !== item.id)
    setRadarData(newRadarData) 
  }
  const handleRadarItemPress = item => {
    navigation.navigate(routes.PRODUCT_DETAILS, item)
    
  }
  return (
    <FlatList 
        data={radarData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> <CartItem 
                                    companyName={item.companyName}
                                    desc={item.desc}
                                    image={item.image}
                                    name={item.name}
                                    onPress={()=> handleRadarItemPress(item)}
                                    price={item.price}
                                    delPress={() => handleDelete(item)}
                                />}
        refreshing={refreshing}
        onRefresh={() => {
            setRadarData(initialRadarData)
        }}
    />
  );
}


export default RadarList;