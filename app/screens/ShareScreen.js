import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import colors from '../config/colors';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import SearchInput from '../components/SearchInput'

userData = 
    [
        {
          id: 1,
          title: "John Doe",
          subtitle: "johndoe",
        },
        {
          id: 2,
          title: "Jane Doe",
          subtitle: "janedoe",
        },
        {
          id: 3,
          title: "John Smith",
          subtitle: "johnsmith",
        },
      ]

function ShareScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.header}>
        <SearchInput 
            placeholder="Search for user"
            placeholderTextColor={colors.misty}
            searchPress={()=> console.log("search pressed")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={userData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              onPress={()=> console.log("pressed", item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.midnight,
    padding: 10,
  },
  screen: {
    backgroundColor: colors.midnight,
    padding: 10,
  },
    header: {
        backgroundColor: colors.midnight,
        padding: 10,
    },
    seperator: {
        width: "100%",
        height: 10,
    },
});

export default ShareScreen;