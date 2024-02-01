import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import AppText from '../components/AppText';
import colors from '../config/colors';
import Accordion from '../components/Accordion';
import AppButton from '../components/AppButton'; 
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import routes from '../navigation/routes';

function ProductDetails({route, navigation}) {
    const [cartItemAdded, setCartItemAdded] = useState([]);
    const [favStoreAdded, setFavStoreAdded] = useState([]);
    const product = route.params;
    
    useEffect(() => {
        fetchFavStores()
        fetchCartItems();
    }, []);
    
    const fetchCartItems = async () => {
        try {
            const existingCartItems = await AsyncStorage.getItem('cartItems');
            const parsedExistingCartItems = JSON.parse(existingCartItems) || [];
            setCartItemAdded(parsedExistingCartItems);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const fetchFavStores = async () => {
        try {
          const existingStores = await AsyncStorage.getItem('favStores');
          const parsedExistingStores = JSON.parse(existingStores) || [];
          setFavStoreAdded(parsedExistingStores);
        } catch (error) {
          console.error('Error fetching fav stores:', error);
        }
      };

    const handleAddToCart = async (productID) =>{
        try {
            // Retrieve existing cart items from AsyncStorage
            const existingCartItems = await AsyncStorage.getItem('cartItems');
            const parsedExistingCartItems = JSON.parse(existingCartItems) || [];

            // Check if the product is already in the cart
            const isProductInCart = parsedExistingCartItems.some(
                (item) => item.id === productID
            );

            if (isProductInCart) {
                // Product is already in the cart
                Alert.alert("Product is already in the cart")
                return;
            }

            // Add the new product to the cart
            const updatedCartItems = [...parsedExistingCartItems, product];
            setCartItemAdded(updatedCartItems)
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            Alert.alert("Product added to cart")
          } catch (error) {
            console.error('Error adding product to cart:', error);
          }
    };
    const handleBuyNow = productID => {
        console.log("buy now", productID)
    }
    const handleAddToRadar = productID => {
        console.log("added to radar", productID)
    }
    const handleAddToFavStores = async (store) => {
        try {
            // Retrieve existing stores from AsyncStorage
            const existingStores = await AsyncStorage.getItem('favStores');
            const parsedExistingStores = JSON.parse(existingStores) || [];
        
            // Check if the store is already in the list
            const isStoreInList = parsedExistingStores.some(
              (item) => item === store
            );
        
            if (isStoreInList) {
              // Store is already in the list
              Alert.alert('Store is already in the list');
              return;
            }

            // const newStore = { id: generateUniqueId(), name: store };

            // Add the new store to the list
            const updatedStores = [...parsedExistingStores, store];
            setFavStoreAdded(updatedStores);
            await AsyncStorage.setItem('favStores', JSON.stringify(updatedStores));
            Alert.alert('Store added to list');

        } catch (error) {
            console.error('Error adding store to list:', error);
        }
    }
    const generateUniqueId = () => {
        return new Date().getTime();
    };


    const handleShare = id => {
        navigation.navigate(routes.SHARE_SCREEN, id)
    }
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{uri: product.images[0].image}} style={{width: "100%", height: "100%"}}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <AppText style={styles.name} numberOfLines={1}>{product.title}</AppText>
                    <AppText style={styles.price}>${product.price}</AppText>
                </View>
                {product.stores[0] && 
                    <View style={styles.storeWrapper}>
                        <AppText style={styles.store}>{product.stores[0]}</AppText>
                        <TouchableOpacity 
                            style={{flexDirection: "row", alignItems: "center"}} 
                            onPress={()=> handleAddToFavStores(product.stores[0])}
                        >
                            <AppText style={styles.heart}>Add to Favorite Stores</AppText>
                            <Icon
                                name="heart"
                                size={25}
                                color={colors.punch}
                            />
                        </TouchableOpacity>
                    </View>
                }
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.addToCartButton} onPress={()=> handleAddToCart(product.id)}>
                        <AppText style={styles.cartText}>Add to cart</AppText>
                        <Icon
                            name="cart"
                            size={30}
                            color={colors.midnight}
                        />
                    </TouchableOpacity>
                    <AppButton 
                    style={styles.button}
                        title="Buy Now"
                        onPress={()=> handleBuyNow(product.id)}
                    />
                </View>
                <View style={styles.radarShareWrapper}>
                    <AppButton 
                        title="Add to Radar"
                        width='70%'
                        onPress={()=> handleAddToRadar(product.id)}
                        style={styles.radar}
                    />
                    <TouchableOpacity style={styles.share} onPress={()=> handleShare(product.id)}>
                        <Icon 
                            name="share"
                            size={30}
                            color={colors.amberGlow}
                        />
                        <AppText style={styles.shareText}>SHARE</AppText>
                    </TouchableOpacity>
                </View>
                <Accordion 
                    title="Product Information"
                    content={product.description}
                />
            </View>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    addToCartButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        height: 50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.amberGlowLight,
    },
    button: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: colors.horizon,
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 20,
        marginVertical: 10,
        marginBottom: 20,
    },
    cartText: {
        textTransform: "uppercase",
    },
  container: {
    width: '100%',
    height: "100%",
    padding: 10,
  },
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 10,
    },
    detailsContainer: {
        padding: 20,
        width: '100%',
        height: "65%",

    },
    image: {
        width: '100%',
        height: "35%",
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: colors.horizon,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        maxWidth: "80%",
    },
    price: {
        fontSize: 16,
        fontWeight: "900",
        color: colors.amberGlow,
    },
    radar: {
        borderRadius: 5,
    },
    radarShareWrapper: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 20,
        marginVertical: 10,
    },
    screen: {
        backgroundColor: colors.midnight,
        paddingTop: 0,
    },
    share: {
        borderRadius: 5,
        backgroundColor: colors.horizon,
        padding: 5,
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
    },
    shareText: {
        fontSize: 14,
    },
    store: {
        fontSize: 18,
        color: colors.misty,
    },
    storeWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 20,
        marginVertical: 10,
    },
});

export default ProductDetails;