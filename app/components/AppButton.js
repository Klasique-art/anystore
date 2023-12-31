import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../config/colors'

const AppButton = ({title, color = colors.misty, onPress, width = "100%", style}) => {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.button, {backgroundColor: color, width: width}, style]} underlayColor={colors.light}>
        <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 55,
        borderRadius: 35,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})
export default AppButton