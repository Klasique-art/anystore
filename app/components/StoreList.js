import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductCard from '../components/ProductCard';
import SearchInput from './SearchInput';
import colors from '../config/colors';
import { addToCart } from '../hooks/utils';
import ActivityIndicator from './ActivityIndicator';
import ListItem from './ListItem';

function StoreList() {
    const [storeProducts, setStoreProducts] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [resultNotFound, setResultNotFound] = useState(false)
    const [loading, setLoading] = useState(false)
    const [cartData, setCartData] = useState([]);
    const [productLoaded, setProductLoaded] = useState(true)

    const navigation = useNavigation()
    const route = useRoute()
    const storeName = route.params.shopName

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

    const handleAddToCart = async (product)=> {
        addToCart(product);
    }
    const handleProductPress = item => {
        navigation.navigate("ProductDetails", item);
        navigation.setOptions({
            headerTitle: item.name,
        });
    };
    const handleSearch = () => {
        setLoading(true)
        setProductLoaded(true)

        axios.get(`https://anystore-13b784c090db.herokuapp.com/api/stores/${storeName}/?product=${searchText}`, {
            timeout: 10000
        })
        .then(res => {
            const result = res.data
            const products = result[0].products
            setStoreProducts(products)

            setLoading(false)
            setProductLoaded(true)

            if (products.length === 0) {
                setResultNotFound(true)
            } else {
                setResultNotFound(false)
            }
        })
        .catch(err => {
            console.log("error getting products",err)
            setLoading(false)
            setProductLoaded(false)
        })

    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <SearchInput 
                placeholder="Search within this Store"  
                placeholderTextColor={colors.misty}
                searchPress={handleSearch}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setSearchText(text)}
            />
        </View>
        <ActivityIndicator visible={loading} />
         <FlatList 
          style={{ flex: 1}}
          data={storeProducts}
          keyExtractor={(storeProduct) => storeProduct?.id.toString()}
          renderItem={({item}) => (
              <ProductCard 
                  desc={item?.description}
                  name={item?.title}
                  price={item?.price}
                  image={item?.images[0].image}
                  companyName={item?.stores[0]}
                  addToCart 
                  addToCartOnPress={() => handleAddToCart(item)}
                  onPress={() => handleProductPress(item)}
              />
          )}
          refreshing={refreshing}
          onRefresh={()=>{
              setLoading(true)
              setStoreProducts(storeProducts)
          }}
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
                {productLoaded === false && 
                <View style={{
                    width: '100%',
                    height: "100%",
                    justifyContent: 'center',
                }}>
                    <ListItem
                        title="No product loaded"
                        subtitle="There was an error loading products, please try again later."
                        style={{color: colors.midnight, fontSize: 18, fontWeight: "bold"}}
                        IconComponent={
                            <MaterialCommunityIcons name="alert-circle" size={35} color={colors.punch} />
                        }
                    />
                </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 220,
    marginTop: 0,
    height: "100%",
  },
  header: {
    marginTop: 0,
    paddingBottom: 10,
  },
});

export default StoreList;