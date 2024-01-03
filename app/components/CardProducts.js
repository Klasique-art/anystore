import { FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

import ProductCard from './ProductCard'
import routes from '../navigation/routes'
import searchItemsApi from '../api/searchItems'

const productData = [
    {                                                                                                                          
      id: 1,
      name: "Apple",
      price: "10,000.99",
      desc: "This is a red apple",
      image: require("../assets/apple.png"),
      store: "Apple Store",
    },
    {
      id: 2,
      name: "Banana",
      price: "2.99",
      desc: "This is a red banana",
      image: require("../assets/apple.png"),
      store: "Apple Store",
    },
    {
      id: 3,                                                     
      name: "Orange",
      price: "3.99",
      desc: "This is a red orange",
      image: require("../assets/apple.png"),
      store: "Apple Store",
    },
    {
      id: 4,
      name: "Pineapple",
      price: "4.99",
      desc: "This is a red pineapple",
      image: require("../assets/apple.png"),
      store: "Apple Store",
    },
   
  ]

const CardProducts = () => {
  const [products, setProducts] = useState([])
  const navigation = useNavigation()

  const loadProducts = async () => {
    try {
      const response = await searchItemsApi.searchItems();
      setProducts(response.data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  useEffect(() => {
    loadProducts()
  }, [])

  const handleProductPress = (item) => {
    navigation.navigate(routes.PRODUCT_DETAILS, item);
    navigation.setOptions({
      headerTitle: item.name,
    });
  };
  return (
  
        <FlatList 
            data={products}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({item}) => (
               <ProductCard 
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    desc={item.desc}
                    companyName={item.store}
                    addToCart
                    addToCartOnPress={() => console.log("Add to cart pressed")}
                    onPress={() => handleProductPress(item)}
                    buyPress={() => console.log("Buy Now pressed")}
                />
            )}
        />
  )
}
export default CardProducts 