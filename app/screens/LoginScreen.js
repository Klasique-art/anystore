import { View, StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import * as Yup from 'yup' 
import { useNavigation } from '@react-navigation/native'

import Screen from '../components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'
import {AppForm, AppFormField, SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
})

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <Screen style={styles.screen}>
        <View style={styles.headerContainer}>
            <Image source={require("../assets/login.png")} style={styles.image} blurRadius={1.5} />
            <Text style={styles.heading}>Anystore</Text>
            <Text style={styles.subHeading}>Your one stop search engine for all your shopping</Text>
        </View>
        <View style={styles.loginContainer}>
            <AppForm 
                initialValues={{email: "", password: ""}} 
                onSubmit={values => console.log(values)} 
                validationSchema={validationSchema} 
            >
                <AppFormField 
                        name="email"
                        autoCapitalize="none" 
                        autoCorrect={false}    
                        keyboardType="email-address"  textContentType="emailAddress"
                        icon="email" 
                        placeholder="Email" 
                        label="email" 
                    />
                    <AppFormField 
                        name="password"
                        placeholder="Password" 
                        icon="lock" 
                        label="password" 
                        autoCapitalize="none" 
                        secureTextEntry 
                        autoCorrect={false} textContentType="password" 
                    />
                    <SubmitButton title="Login" width="90%" />
            </AppForm>
            <View style={styles.actionWrapper}>
                <View style={{alignItems: "center", gap: 5}}>
                    <Text style={{color: colors.white, alignSelf: "center", marginTop: 10}}>Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate(routes.REGISTER)} style={styles.signup}>
                        <Text style={styles.text}> Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: "center", gap: 5}}>
                    <Text style={{color: colors.white, alignSelf: "center", marginTop: 10}}>Forgot password? 
                    </Text>
                    <TouchableOpacity onPress={()=> console.log("reset")} style={styles.reset}>
                        <Text style={[styles.text, {color: colors.midnight, fontWeight: "bold"}]}>Reset</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        fontWeight: "900",
        color: colors.white,
        marginTop: 20,
    },
    subHeading: {
        fontSize: 16,
        color: colors.white,
        marginTop: 10,
        textAlign: "center",
    },
    headerContainer: {
        width: "100%",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 100,
        width: 140,
        borderRadius: 10,
        alignSelf: "center",
    },
    loginContainer: {
        width: "100%",
        height: "60%",
        backgroundColor: colors.horizon,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    screen: {
        backgroundColor: colors.midnight,
    },
    text: {
        color: colors.amberGlow, 
        fontSize: 14,
        fontWeight: "bold",  
        padding: 0,
        textTransform: "capitalize",
    },
    actionWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        padding: 10,
        height: 150,
        gap: 30,
    }
    ,
    signup: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: colors.midnight,
    },
    reset: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: colors.misty,
    }

})

export default LoginScreen