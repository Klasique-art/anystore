import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const LoginSignupStack = () => (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={()=>({
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="SignUp" 
                component={SignUpScreen} 
                options={()=>({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
);

function LoginSignupNavigator(props) {
  return (
    <NavigationContainer>
        <LoginSignupStack />
    </NavigationContainer>
  );
}

export default LoginSignupNavigator;