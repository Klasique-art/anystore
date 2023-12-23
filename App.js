import { StyleSheet } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

// custom imports
import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import LoginSignupNavigator from './app/navigation/LoginSignupNavigator';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {

  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
        {/* <LoginSignupNavigator /> */}
    </>

  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
  }
})