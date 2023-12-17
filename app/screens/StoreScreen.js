import React from 'react';
import { View, StyleSheet} from 'react-native';

import colors from '../config/colors';
import SearchInput from '../components/SearchInput';
import Screen from '../components/Screen';
import StoreList from '../components/StoreList';

const appleStoreProductData = [
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
const walmartStoreProductData = [
    {                                                                                                                          
      id: 100,
      name: "walmart something",
      price: "10,000.99",
      desc: "This is a red apple",
      image: require("../assets/apple.png"), 
      store: "Walmart Store",
    },
    {
      id: 102,
      name: "Banana 2",
      price: "2.99",
      desc: "This is a red banana",
      image: require("../assets/apple.png"),
      store: "Walmart Store",
    },
    {
      id: 103,                                                     
      name: "Orange 3",
      price: "3.99",
      desc: "This is a red orange",
      image: require("../assets/apple.png"),
      store: "Walmart Store",
    },
    {
      id: 104,
      name: "Pineapple 4",
      price: "4.99",
      desc: "This is a red pineapple",
      image: require("../assets/apple.png"),
      store: "Walmart Store",
    },
  ]

function StoreScreen() {
    
  return (
    <Screen style={styles.screen}>
        <View style={styles.header}>
            <SearchInput 
                placeholder="Search product from this store"  
                placeholderTextColor={colors.misty}
            />
        </View>
        <View style={styles.container}>
           <StoreList 
            productData={walmartStoreProductData}
           />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
        padding: 10,
  },
    header: {
        padding: 10,
    },
    screen: {
        backgroundColor: colors.midnight,
    }
});

export default StoreScreen;