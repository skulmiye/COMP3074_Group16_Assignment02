import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

const AboutScreen = ({ studentInfo, onAboutClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => onAboutClose()} color="#fff" />
        <Appbar.Content title="About" titleStyle={styles.appbarTitle} />
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
    backgroundColor: '#3498db',
  },
  appbar: {
    backgroundColor: '#2980b9',
  },
  appbarTitle: {
    color: '#fff',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default AboutScreen;




