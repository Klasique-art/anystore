import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
})


function EmailResetScreen(props) {
  return (
    <Screen style={styles.screen}>

        <View style={styles.container}>
            <AppForm
                initialValues={{email: ""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Enter new email"
                    placeholderTextColor={colors.misty}
                    textContentType="emailAddress"
                />
                <SubmitButton 
                    title="Reset email" 
                    width="90%"
                    color={colors.amberGlow}
                    textColor={colors.midnight}
                />
            </AppForm>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.midnight,
    alignItems: 'center',
    justifyContent: 'center',
  },
    screen: {
        backgroundColor: colors.midnight,
    },
});

export default EmailResetScreen;