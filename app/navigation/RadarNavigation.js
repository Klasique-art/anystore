import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RadarScreen from '../screens/RadarScreen'
import RadarList from '../components/RadarList'
import ProductDetails from '../screens/ProductDetailsScreen'
import colors from '../config/colors'

const Stack = createStackNavigator()

const RadarNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            presentation: "modal",
            headerStyle: {
                backgroundColor: colors.midnight,
                height: 80,   
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
            headerTintColor: colors.amberGlow,
        }}
    >
        <Stack.Screen 
            name='RadarScreen' 
            component={RadarScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name='RadarList'
            component={RadarList}
            options={{
                headerShown: true,
            }}
        />
        <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
            options={{
                headerShown: true,
            }}
        />
    </Stack.Navigator>
  )
}

export default RadarNavigation