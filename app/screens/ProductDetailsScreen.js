import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import Accordion from '../components/Accordion';
import AppButton from '../components/AppButton'; 
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import routes from '../navigation/routes';

function ProductDetails({route, navigation}) {
    const product = route.params;
    
    const handleAddToCart = productID =>{
        console.log("add to cart pressed", productID)
    }
    const handleBuyNow = productID => {
        console.log("buy now", productID)
    }
    const handleAddToRadar = productID => {
        console.log("added to radar", productID)
    }
    const handleAddToFavStores = store => {
        console.log("added to fav stores", store)
    }
    const handleShare = id => {
        navigation.navigate(routes.SHARE_SCREEN, id)
    }
 
  return (
    <Screen style={styles.screen}>

        <View style={styles.container}>
            <Image source={product.image} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <AppText style={styles.name} numberOfLines={1}>{product.name}</AppText>
                    <AppText style={styles.price}>${product.price}</AppText>
                </View>
                {product.store && 
                    <View style={styles.storeWrapper}>
                        <AppText style={styles.store}>{product.store}</AppText>
                        <TouchableOpacity 
                            style={{flexDirection: "row", alignItems: "center"}} 
                            onPress={()=> handleAddToFavStores(product.store)}
                        >
                            <AppText style={styles.heart}>Add to favorite stores</AppText>
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
                        width='80%'
                        onPress={()=> handleAddToRadar(product.id)}
                        style={styles.radar}
                    />
                    <TouchableOpacity style={styles.share} onPress={()=> handleShare(product.id)}>
                        <Icon 
                            name="share"
                            size={30}
                            color={colors.amberGlow}
                        />
                    </TouchableOpacity>
                </View>
                <Accordion 
                    title="Description"
                    content={product.desc}
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
    },
    share: {
        borderRadius: 5,
        backgroundColor: colors.horizon,
        padding: 10,
        width: "15%",
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