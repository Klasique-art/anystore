import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AccountSettingsScreen from '../screens/AccountSettingsScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';
import EmailResetScreen from '../screens/EmailResetScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            presentation: "modal",
            headerStyle: {
                backgroundColor: colors.horizon,
            },
            headerTintColor: colors.amberGlow,
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }}
    >
        <Stack.Screen 
            name="AccountSettings" 
            component={AccountSettingsScreen} 
            options={()=>({
            headerShown: false,
            })}
        />
        <Stack.Screen 
            name="PasswordReset" 
            component={PasswordResetScreen} 
            options={{
                title: "Reset Password",
            }}

        />
        <Stack.Screen 
            name="EmailReset" 
            component={EmailResetScreen} 
            options={{
                title: "Email Reset",
            }}
        />
    </Stack.Navigator>
  )
}

export default AccountNavigator