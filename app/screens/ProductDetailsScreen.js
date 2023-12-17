import React, {useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import Accordion from '../components/Accordion';
import AppButton from '../components/AppButton'; 
import Icon from '../components/Icon';
import Screen from '../components/Screen';

function ProductDetails({route}) {
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
  return (
    <Screen style={styles.screen}>

        <View style={styles.container}>
            <Image source={product.image} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <AppText style={styles.name} numberOfLines={1}>{product.name}</AppText>
                    <AppText style={styles.price}>${product.price}</AppText>
                </View>
                <AppText style={styles.store}>{product.store}</AppText>
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
                <AppButton 
                    title="Add to Radar"
                    onPress={()=> handleAddToRadar(product.id)}
                    style={styles.radar}
                />
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
        marginBottom: 10,
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
        marginBottom: 20,
    },
    screen: {
        backgroundColor: colors.midnight,
    },
    store: {
        fontSize: 18,
        color: colors.misty,
        marginBottom: 20,
    }
});

export default ProductDetails;