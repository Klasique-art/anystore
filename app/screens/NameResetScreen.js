import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name").min(3),
})

const NameResetScreen = () => {
  return ( 
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <AppForm
            initialValues={{name: ""}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
            <AppFormField
                name="name"
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                placeholder="Enter new name"
                placeholderTextColor={colors.misty}
                textContentType="name"
            />
            <SubmitButton 
                title="Reset name" 
                width="90%"
                color={colors.amberGlow}
                textColor={colors.midnight}
            />
            </AppForm>
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.midnight,
    },  
})

export default NameResetScreen