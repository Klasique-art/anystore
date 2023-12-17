import { View, StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import colors from '../config/colors'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required().min(8).label("Password"),
  newPassword1: Yup.string().required().min(8).label("Password"),
  newPassword2: Yup.string().required().min(8).label("Password"),
})

const PasswordResetScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AppForm 
            initialValues={{oldPassword: "", newPassword1: "", newPassword2: ""}} 
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormField 
                name="oldPassword"
                autoCapitalize="none" 
                autoCorrect={false}    
                keyboardType="password"  
                textContentType="password"
                icon="lock" 
                placeholder="Enter old password" 
                placeholderTextColor={colors.misty}
                label="Old Password"
                secureTextEntry 
            />
            <AppFormField 
                name="newPassword1"
                autoCapitalize="none" 
                autoCorrect={false}    
                keyboardType="password"  
                textContentType="password"
                icon="lock" 
                placeholder="Enter new password" 
                placeholderTextColor={colors.misty}
                label="new password"
                secureTextEntry 
            />
            <AppFormField 
                name="newPassword2"
                autoCapitalize="none" 
                autoCorrect={false}    
                keyboardType="password" 
                textContentType="password"
                icon="lock" 
                placeholder="Confirm new password" 
                placeholderTextColor={colors.misty}
                label="Confirm new password"
                secureTextEntry 
            />
            <SubmitButton title="Reset Password" width="90%" />
        </AppForm>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.midnight,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    backgroundColor: colors.midnight,
  },
})

export default PasswordResetScreen