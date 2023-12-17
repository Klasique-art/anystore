import { createStackNavigator } from '@react-navigation/stack'

import FavAndCartNavigator from './FavAndCartNavigator'
import ProductDetails from '../screens/ProductDetailsScreen'
import colors from '../config/colors'

const Stack = createStackNavigator()

const ProductNavigator = () => {
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
            name='Product' 
            component={FavAndCartNavigator}
            options={{headerShown: false}}
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

export default ProductNavigator