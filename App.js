import { StyleSheet } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

// custom imports
import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';


export default function App() {

  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
  }
})