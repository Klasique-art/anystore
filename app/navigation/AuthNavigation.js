import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

const Stack = createStackNavigator()

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Welcome' 
            component={WelcomeScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='Login' 
            component={LoginScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='Register' 
            component={SignUpScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default AuthNavigation