import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'

import {AppForm, AppFormField, SubmitButton, ErrorMessage} from '../components/forms'
import colors from '../config/colors'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import usersApi from '../api/users'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    userName: Yup.string().required().label("Username").min(3),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
})

const SignUpScreen = ({navigation}) => {
    const [error, setError] = useState()
    const auth = useAuth()

    const handleSubmit = async (userInfo) => {
       const result = await usersApi.register(userInfo)

       if(!result.ok) {
        if(result.data) {
            setError(JSON.stringify(result.data));
        }
        else {
            setError("An unexpected error occurred.")
            console.log(result)
        }
        return;
       }
       console.log(userInfo.email)
       const response = await authApi.login(
                                            userInfo.email, 
                                            userInfo.password)
        auth.logIn(response.data.token)
    }
    

  return (
    <Screen style={{backgroundColor: colors.midnight}}>
         <View style={styles.headerContainer}>
            <Image source={require("../assets/signup.png")} style={styles.image} blurRadius={10} />
            <Text style={styles.heading}>Anystore</Text>
            <Text style={styles.subHeading}>Create an account</Text>
        </View>
        <View style={styles.signUpContainer}>
            <AppForm 
                initialValues={{ userName: "", email: "", password: ""}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible={error} />

                <AppFormField
                    name="userName"
                    icon="account" 
                    placeholder="Username" 
                    placeholderTextColor={colors.white}
                    label="Username" 
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <AppFormField
                    name="email"
                    icon="email" 
                    placeholder="Email" 
                    placeholderTextColor={colors.white}
                    label="email" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    icon="lock" 
                    placeholder="Password"
                    placeholderTextColor={colors.white} 
                    label="password" 
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
        height: "20%",  
        alignItems: 'center',
        justifyContent: 'center',
   },
   login: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
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