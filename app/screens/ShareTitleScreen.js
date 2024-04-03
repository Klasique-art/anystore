import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';
import chatGroup from '../api/chatGroup';
import useAuth from '../auth/useAuth';

function ShareTitleScreen({navigation, route}) {
    const [title, setTitle] = useState(''); 
    const product = route?.params
    const {user} = useAuth()
    const userId = user?._id
    
    const handleSubmit = async () => {
      if(title.length === 0) return alert('Please enter a title');
      const response = await chatGroup.createGroup(title, userId)
      if(response.ok) {
          navigation.navigate(routes.SHARE_SCREEN, {title: title, product: product, groupId: response.data._id})
      }
    }
  return (
    <Screen style={styles.screen}>
          <View>
              <AppText style={{color: colors.amberGlow, marginVertical: 20}}>Enter chat group name. This will create a group where you can chat with users.</AppText>
              <AppInput
                  placeholder="Enter group title"
                  placeholderTextColor={colors.amberGlow}
                  icon="text"
                  autoCorrect={true}
                  keyboardType="default"
                  maxLength={25}
                  onChangeText={text => setTitle(text)}
                  value={title}
              />
              <AppButton
                  title="Share"
                  color={colors.amberGlowLight}
                  onPress={handleSubmit}
                  style={{marginTop: 20, alignSelf: "center"}}
                  width='50%'
              />
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