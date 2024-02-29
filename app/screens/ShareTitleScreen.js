import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

function ShareTitleScreen({navigation, route}) {
    const [title, setTitle] = useState(''); 
    const username = route.params.username;
    const product = route.params.product;
    
  return (
    <Screen style={styles.screen}>
        <View>
            <AppText style={{textTransform: "capitalize", marginVertical: 10}}>Share this product to {username}</AppText>
            <View>
                <AppText style={{color: colors.amberGlow, marginVertical: 10}}>Enter chat title. This will create a chat with {username}</AppText>
                <AppInput
                    placeholder="Enter chat title"
                    placeholderTextColor={colors.amberGlow}
                    icon="text"
                    autoCapitalize="none"
                    autoCorrect={true}
                    keyboardType="default"
                    maxLength={25}
                    onChangeText={text => setTitle(text)}
                    value={title}
                />
                <AppButton
                    title="Share"
                    color={colors.amberGlowLight}
                    onPress={() => {
                      if(title.length === 0) return alert('Please enter a title');
                      navigation.navigate('Crit', {username: username, title: title, product: product})
                    }}
                    style={{marginTop: 20, alignSelf: "center"}}
                    width='50%'
                />
            </View>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
    paddingTop: 0,
  },
});

export default ShareTitleScreen;