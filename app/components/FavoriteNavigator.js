import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FavoriteStoreScreen from '../screens/FavoriteStoreScreen'

const Stack = createStackNavigator()

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Favorites" 
            component={FavoriteStoreScreen} 
            options={()=>({
                headerShown: false,
            })}
        />
    </Stack.Navigator>
  )
}

export default FavoriteNavigator