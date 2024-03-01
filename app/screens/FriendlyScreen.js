import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../config/colors';
import Screen from '../components/Screen';

function FriendlyScreen({ route }) {
  const [groupItems, setGroupItems] = useState({})
  const groupName = route?.params?.groupName;
  const groupId = route?.params?.groupId;
  const userName = route?.params?.userName;

  useEffect(() => {
    // Save group details to AsyncStorage
    const saveGroupDetails = async () => {
      try {
        const groupDetails = { groupName, groupId, userName };
        setGroupItems(groupDetails)
        await AsyncStorage.setItem('groupDetails', JSON.stringify(groupDetails));
      } catch (error) {
        console.error('Error saving group details to AsyncStorage:', error);
      }
    };

    saveGroupDetails();
  }, [groupName, groupId, userName]);
console.log(groupItems)
  return (
    <Screen style={styles.screen}>
      <View>
        <Text style={styles.heading}>CHATROOM</Text>
      </View>
      <TouchableOpacity></TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.amberGlow,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: colors.horizon,
    padding: 10,
    borderRadius: 5,
  },
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
  },
});

export default FriendlyScreen;
