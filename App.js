import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { NavigationContainer } from '@react-navigation/native';

// custom imports
import AppButton from './app/components/AppButton';
import colors from './app/config/colors';
import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppInput from './app/components/AppInput';
import AppFormField from './app/components/forms/AppFormField';
import SubmitButton from './app/components/forms/SubmitButton';
import LoginScreen from './app/screens/LoginScreen';
import ProductCard from './app/components/ProductCard';
import FavoriteCard from './app/components/FavoriteCard';
import ProductsScreen from './app/screens/ProductsScreen';
import AppPicker from './app/components/AppPicker';
import SignUpScreen from './app/screens/SignUpScreen';
import CodeSearch from './app/components/CodeSearch';
import SearchInput from './app/components/SearchInput';
import FavoriteStoreList from './app/components/FavoriteStoreList';
import FavoriteStoreScreen from './app/screens/FavoriteStoreScreen';
import CartScreen from './app/screens/CartScreen';
import ListItem from './app/components/ListItem';
import Icon from './app/components/Icon';
import AccountSettingsScreen from './app/screens/AccountSettingsScreen';
import LoginSignupNavigator from './app/navigation/LoginSignupNavigator';
import FavoriteNavigator from './app/components/FavoriteNavigator';
import AuthNavigation from './app/navigation/AuthNavigation';
import AppNavigator from './app/navigation/AppNavigator';
import CardProducts from './app/components/CardProducts';
import Accordion from './app/components/Accordion';
import ProductDetails from './app/screens/ProductDetailsScreen';
import PasswordResetScreen from './app/screens/PasswordResetScreen';
import EmailResetScreen from './app/screens/EmailResetScreen';
import StoreScreen from './app/screens/StoreScreen';


export default function App() {
  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
  }
})