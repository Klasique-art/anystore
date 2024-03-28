import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import axios from 'axios';

import colors from '../config/colors';
import Screen from '../components/Screen';
import SearchInput from '../components/SearchInput';
import useAuth from '../auth/useAuth';
import SearchNotFound from '../components/SearchNotFound';
import AppText from '../components/AppText';

const ShareScreen = ({navigation, route}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const product = route.params.product;
  const groupId = route.params.groupId
  const groupName = route.params.title
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pacific-sierra-04938-5becb39a6e4f.herokuapp.com/api/search/?query=${searchQuery}`);

        // filter out the current user from the search results
        const filteredResults = response.data.filter((result) => result !== user.username);
        setSearchResults(filteredResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('dismissed keyboard');
          Keyboard.dismiss();
        }}
      >
        <>
        <View style={styles.header}>
          <SearchInput
            placeholder="Search user by name"
            placeholderTextColor={colors.misty}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <View style={styles.container}>
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <TouchableOpacity 
                key={result} 
                onPress={() => navigation.navigate('Crit', { username: result , product: product, groupId: groupId, groupName: groupName })}
                style={styles.item}
                activeOpacity={0.6}
              >
                <View style={styles.itemInner}>
                  <AppText style={styles.text}>{result}</AppText> 
                </View>
              </TouchableOpacity>
            )) 
          ) : (
            <SearchNotFound />
          )}
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
    width: "50%",
    height: 50,
    backgroundColor: colors.amberGlow,
    marginVertical: 10,
    borderRadius: 5,
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
