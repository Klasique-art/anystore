import React, {useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProductCard from '../components/ProductCard';

function StoreList({productData}) {
    const [storeProducts, setStoreProducts] = useState(productData)
    const [refreshing, setRefreshing] = useState(false)
    const navigation = useNavigation()

    handleAddToCart = item => {
        console.log(item, "added to cart");
    }
    handleProductPress = item => {
        navigation.navigate("ProductDetails", item);
        navigation.setOptions({
            headerTitle: item.name,
        });
    };
  return (
    <View style={styles.container}>
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
                        addToCartOnPress={() => handleAddToCart(item)}
                        onPress={() => handleProductPress(item)}
                    />
                )}
                refreshing={refreshing}
                onRefresh={()=>{
                    setStoreProducts([
                        {
                            id: 1,
                            name: "Apple",
                            price: "10,000.99",
                            desc: "This is a red apple",
                            image: require("../assets/apple.png"), 
                            store: "Apple Store",
                        },
                    ])
                }}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 150,
  }
});

export default StoreList;