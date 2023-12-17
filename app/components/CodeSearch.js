import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { TouchableHighlight } from 'react-native'



const CodeSearch = () => {

  const handleCodeSearch = ()=> {
    console.log("qr code or bar code")
  }
  return (
    <TouchableHighlight style={styles.searchBar} onPress={handleCodeSearch} underlayColor={colors.lighter}>
        <AppText>Search by Barcode / QR code</AppText>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    width: "90%",
    alignSelf: "center",
    height: 50,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  }
})

export default CodeSearch