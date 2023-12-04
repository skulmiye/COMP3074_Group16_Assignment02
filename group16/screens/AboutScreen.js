// AboutScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

const AboutScreen = ({ studentInfo, onAboutClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => onAboutClose()} />
        <Appbar.Content title="About" />
      </Appbar.Header>

      <FlatList
        data={studentInfo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
  },
  appbar: {
    backgroundColor: 'black', 
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: 'white', 
  },
});

export default AboutScreen;



