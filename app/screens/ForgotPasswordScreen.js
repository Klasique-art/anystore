import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

function ForgotPasswordScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AppText style={styles.text}>Enter your email, a password reset link will be sent to you.</AppText>
        <AppInput 
          icon="email"
          placeholder="Email"
          placeholderTextColor={colors.misty}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TouchableOpacity
          onPress={() =>console.log("Reset")}
          style={styles.sendLink}
        >
          <AppText >Didn't receive link? Send again.</AppText>
        </TouchableOpacity>
        <AppButton title="Send Link" color={colors.amberGlow} width='90%' style={{
                                                        alignSelf: "center", 
                                                        marginTop: 20,
                                                        }} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  screen: {
    backgroundColor: colors.midnight,
  },
  sendLink: {
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    color: colors.amberGlow,
    fontWeight: 'bold',
    padding: 0,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ForgotPasswordScreen;
