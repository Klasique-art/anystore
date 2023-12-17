import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import colors from '../config/colors'
import routes from '../navigation/routes'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password1: Yup.string().required().min(8).label("Password"),
    password2: Yup.string().required().min(8).label("Password"),
})

const SignUpScreen = ({navigation}) => {
  return (
    <Screen style={{backgroundColor: colors.midnight}}>
         <View style={styles.headerContainer}>
            <Image source={require("../assets/signup.png")} style={styles.image} blurRadius={10} />
            <Text style={styles.heading}>Anystore</Text>
            <Text style={styles.subHeading}>Create an account</Text>
        </View>
        <View style={styles.signUpContainer}>
            <AppForm 
                initialValues={{ email: "", password1: "", password2: ""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    icon="email" 
                    placeholder="Email" 
                    label="email" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password1"
                    icon="lock" 
                    placeholder="Password" 
                    label="password" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"
                />
                <AppFormField
                    name="password2"
                    icon="lock" 
                    placeholder="Confirm password" 
                    label="confirm password" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Sign up" width="90%" />
            </AppForm>
            <View style={styles.loginBox}>
                <Text style={{color: colors.white, alignSelf: "center", marginBottom: 10}}>Already have an account?
                </Text>
                <TouchableOpacity onPress={()=> navigation.navigate(routes.LOGIN)} style={styles.login}>
                    <Text style={styles.text}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
   headerContainer: {
        width: '100%',
        height: "25%",
        alignItems: 'center',
        justifyContent: 'center',
   },
   heading: {
        fontSize: 25,
        fontWeight: '900',
        color: colors.white,
        marginTop: 5,
   },
   image: {
        height: 90,
        width: 110,
        borderRadius: 10,
   },
   loginBox: {
        width: '100%',
        paddingVertical: 20,
        height: "25%",  
        alignItems: 'center',
        justifyContent: 'center',
   },
   login: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: colors.midnight,
   },
   signUpContainer: {
        width: '100%',
        height: "75%",
        backgroundColor: colors.horizon,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
   },
   subHeading: {
        fontSize: 16,
        color: colors.white,
        marginTop: 10,
        textAlign: "center",
    },
    text: {
        color: colors.amberGlow, 
        fontSize: 14,
        fontWeight: "bold",  
        padding: 0,
        textTransform: "capitalize",
    }
})

export default SignUpScreen