import React, {useLayoutEffect} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import StoreList from '../components/StoreList';

const walmartStoreProductData = [
    {                                                                                                                          
      id: 100,
      name: "walmart something",
      price: "10,000.99",
      desc: "This is a red apple",
      image: "https://picsum.photos/200/300", 
      store: "Walmart Store",
    },
    {
      id: 102,
      name: "Banana 2",
      price: "2.99",
      desc: "This is a red banana",
      image: "https://picsum.photos/200/300",
      store: "Walmart Store",
    },
    {
      id: 103,                                                     
      name: "Orange 3",
      price: "3.99",
      desc: "This is a red orange",
      image: "https://picsum.photos/200/300",
      store: "Walmart Store",
    },
    {
      id: 104,
      name: "Pineapple 4",
      price: "4.99",
      desc: "This is a red pineapple",
      image: "https://picsum.photos/200/300",
      store: "Walmart Store",
    },
  ]

function StoreScreen({route, navigation}) {
  const { shopName } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shopName, 
    });
  }, [navigation, shopName]);

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.container}>
           <StoreList 
            productData={walmartStoreProductData}
           />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
        padding: 10,
  },
    
    screen: {
        backgroundColor: colors.midnight,
    }
});

export default StoreScreen;