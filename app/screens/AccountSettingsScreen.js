import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import AppButton from '../components/AppButton'

const settingsData = [
  {
      title: "Email",
      subTitle: "feboapong@gmail.com",
      icon:"email",  
      color: colors.amberGlowLight,
      targetScreen: "EmailReset",
  },
  {
      title: "Password",
      subTitle: "*****",
      icon:"lock",  
      color: colors.misty,
      targetScreen: "PasswordReset",
  },
  

]

const AccountSettingsScreen = ({navigation}) => {
  const logoutAlert = () => {
    Alert.alert(
        "Log Out",
        "Are you sure you want to log out of your account?",
        [
            { text: "No" },
            { text: "Yes", onPress: ()=> console.log("logged out") },
        ],
        { cancelable: false }
    )
}
  return (
    <Screen style={styles.screen}>
      <View>
        <Text style={styles.heading}>Account Settings</Text>
      </View>
      <View style={styles.itemsContainer}>
        <FlatList 
          data={settingsData}
          keyExtractor={item => item.title}
          renderItem={({item})=> (
            <ListItem 
              title={item.title}
              subtitle={item.subTitle}
              IconComponent={<Icon 
                                name={item.icon}  
                                size={35}
                                color={item.color}
                                backgroundColor={item.icon.backgroundColor} 
                              />}
              onPress={()=> navigation.navigate(item.targetScreen)}
              Chevron
            />
          )}
          ItemSeparatorComponent={() => <View style={{width: "100%", height: 5, backgroundColor: colors.lighter}} />}
        />
        <AppButton title="Log Out" color={colors.amberGlowLight} onPress={logoutAlert} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  itemsContainer: {
    justifyContent: "space-between",
    height: "90%",
    paddingVertical: 10,
  },
  heading: {
    color: colors.amberGlow,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    backgroundColor: colors.horizon,
    padding: 10,
    borderRadius: 5,
  },
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
  }
})

export default AccountSettingsScreen