import { View, StyleSheet, KeyboardAvoidingView,  Platform } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'

import {AppForm, AppFormField, SubmitButton, ErrorMessage} from '../components/forms'
import colors from '../config/colors'
import Screen from '../components/Screen'
import resetPassword from '../api/changePassword'
import useAuth from '../auth/useAuth'

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Enter your previous password").min(8).label("Password").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Must contain at least one uppercase, one lowercase, one number and one symbol"),
  newPassword1: Yup.string().required("You need to create a password").min(8).label("Password").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Must contain at least one uppercase, one lowercase, one number and one symbol"),
  newPassword2: Yup.string().required("Confirm your password").label("Confirm Password").oneOf([Yup.ref('newPassword1')], 'Passwords must match')
})

const PasswordResetScreen = () => {
  const [isOldSecure, setIsOldSecure] = useState(true)
  const [isNewSecure, setIsNewSecure] = useState(true)
  const [isNewConfirmSecure, setIsNewConfirmSecure] = useState(true)
  const [error, setError] = useState()
  const auth = useAuth()

  const handleChangePassword = async ({oldPassword, newPassword1}) => {
    const result = await resetPassword.resetPassword(oldPassword, newPassword1)
    console.log(result.data)
    
  }

  return (
    <Screen style={styles.screen}>

      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}>
      <View style={styles.container}>

        <AppForm 
            initialValues={{oldPassword: "", newPassword1: "", newPassword2: ""}} 
            onSubmit={handleChangePassword}
            validationSchema={validationSchema}
        >
            <ErrorMessage error={error} visible={error} />
            <AppFormField 
                name="oldPassword"
                autoCapitalize="none" 
                autoCorrect={false}      
                textContentType="password"
                icon={isOldSecure ? "eye" : "eye-off"}
                placeholder="Enter old password" 
                placeholderTextColor={colors.misty}
                label="Old Password"
                secureTextEntry={isOldSecure} 
                onPress={() => setIsOldSecure(!isOldSecure)}
            />
            <AppFormField 
                name="newPassword1"
                autoCapitalize="none" 
                autoCorrect={false}    
                textContentType="password"
                icon={isNewSecure ? "eye" : "eye-off"}
                placeholder="Enter new password" 
                placeholderTextColor={colors.misty}
                label="new password"
                secureTextEntry={isNewSecure}
                onPress={() => setIsNewSecure(!isNewSecure)} 
            />
            <AppFormField 
                name="newPassword2"
                autoCapitalize="none" 
                autoCorrect={false}    
                textContentType="password"
                icon={isNewConfirmSecure ? "eye" : "eye-off"} 
                placeholder="Confirm new password" 
                placeholderTextColor={colors.misty}
                label="Confirm new password"
                secureTextEntry={isNewConfirmSecure}
                onPress={() => setIsNewConfirmSecure(!isNewConfirmSecure)} 
            />
          <SubmitButton title="Change Password" width="90%" />
        </AppForm>
      </View>
        </KeyboardAvoidingView>
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