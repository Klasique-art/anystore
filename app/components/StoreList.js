import React, {useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import ProductCard from '../components/ProductCard';
import SearchInput from './SearchInput';
import colors from '../config/colors';
import { addToCart } from '../hooks/utils';

function StoreList({productData}) {
    const [storeProducts, setStoreProducts] = useState(productData)
    const [refreshing, setRefreshing] = useState(false)
    const [searchText, setSearchText] = useState("")

    const navigation = useNavigation()
    const route = useRoute()
    const storeName = route.params.shopName

    const handleAddToCart = async (product)=> {
        addToCart(product);
    }
    const handleProductPress = item => {
        console.log(item, "pressed");
        // navigation.navigate("ProductDetails", item);
        // navigation.setOptions({
        //     headerTitle: item.name,
        // });
    };
    const handleSearch = () => {
        console.log("searched", searchText, storeName);
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
         <FlatList 
                data={storeProducts}
                keyExtractor={(storeProduct) => storeProduct.id.toString()}
                renderItem={({item}) => (
                    <ProductCard 
                        desc={item.desc}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        addToCart 
                        // addToCartOnPress={() => handleAddToCart(item)}
                        onPress={() => handleProductPress(item)}
                    />
                )}
                refreshing={refreshing}
                onRefresh={()=>{
                    setStoreProducts(storeProducts)
                }}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 220,
    marginTop: 0,
  },
  header: {
    marginTop: 0,
    paddingBottom: 10,
  },
});

export default StoreList;