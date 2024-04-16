import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import useAuth from '../auth/useAuth';

const ShareScreen = ({navigation, route}) => {
  const [groups, setGroups] = useState([]);

  const product = route.params;
  const { user } = useAuth();
  const userId = user?._id;

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get(`https://pacific-sierra-04938-5becb39a6e4f.herokuapp.com/api/user/groups/?userId=${userId}`)
  
      if(response.data) {
        setGroups(response.data);
      }

    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  }

  const handleSendProductToGroup = (groupId) => {
    axios.post(`https://pacific-sierra-04938-5becb39a6e4f.herokuapp.com/api/share-to-group`, {
      groupId: groupId,
      content: JSON.stringify(product),
      senderId: userId,
    })
    .then((response) => {
      if(response.data) {
        console.log('Product sent to group:', response.data);
        navigation.goBack();
      }
    })
    .catch((error) => {
      console.error('Error sending product to group:', error);
    });
  }

  const createdGroups = groups?.createdGroups;
  const joinedGroups = groups?.joinedGroups;

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      > 
        <>
        <View style={styles.container}>
          {/* groups */}
          <ScrollView>
            <View>
              {createdGroups && createdGroups.length > 0 && (
                <View>
                  <AppText style={{ color: colors.white, marginVertical: 10 }}>Created Groups</AppText>
                  {createdGroups.map((group) => (
                    <TouchableOpacity 
                      key={group?._id} 
                      style={styles.item} 
                      onPress={() => handleSendProductToGroup(group?._id)}
                    >
                      <AppText style={{ color: colors.white, fontWeight: "bold" }}>{group?.groupName}</AppText>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {joinedGroups && joinedGroups.length > 0 && (
                <View>
                  <AppText style={{ color: colors.white, marginVertical: 10 }}>Joined Groups</AppText>
                  {joinedGroups.map((group) => (
                    <TouchableOpacity 
                      key={group._id} 
                      style={styles.item}
                      onPress={() => handleSendProductToGroup(group?._id)}
                    >
                      <AppText style={{ color: colors.white, fontWeight: "bold" }}>{group?.groupName}</AppText>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </ScrollView>
        </View>
        </>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.midnight,
    padding: 10,
  },
  item: {
    width: "65%",
    height: 50,
    backgroundColor: colors.amberGlow,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  itemInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
    paddingTop: 0,
  },
  header: {
    backgroundColor: colors.midnight,
    padding: 10,
  },
  text: {
    color: colors.midnight,
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default ShareScreen;
