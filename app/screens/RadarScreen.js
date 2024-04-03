import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

import colors from '../config/colors';
import Screen from '../components/Screen';
import SearchInput from '../components/SearchInput';
import AppText from '../components/AppText';
import RadarList from '../components/RadarList';
import { registerForPushNotificationsAsync, sendPushNotification } from '../components/Notification';

function RadarScreen(props) {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const sendNotification = ()=>{

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      },
      trigger: null,
    });
  }

  useEffect(() => {

    registerForPushNotificationsAsync().then(token => {
      console.log("The token is",token);
      setExpoPushToken(token)
    });

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={{ }}>
        <Text>Your expo push token: {expoPushToken}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Title: {notification && notification.request.content.title} </Text>
          <Text>Body: {notification && notification.request.content.body}</Text>
          <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
        </View>
        <Button
          title="Press to Send Notification"
          onPress={ () => {
            sendNotification();
          }}
        />
      </View>
        <View style={styles.header}>
            <SearchInput
                placeholder="Search by Keyword"
                placeholderTextColor={colors.amberGlowLight}
                icon="magnify"
                width="90%"
            />
            <AppText style={styles.text}>Track your products to get notified of price changes.</AppText>
        </View>
        <View style={styles.container}>
          <RadarList />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
    header: {
        paddingVertical: 10,
        gap: 10,
    },
    screen: {
        backgroundColor: colors.midnight,
        padding: 10,
    },
    text: {
        color: colors.white,
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RadarScreen;