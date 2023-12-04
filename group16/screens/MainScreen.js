// MainScreen.js
 import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AboutScreen from './AboutScreen';

const MainScreen = () => {
  const navigation = useNavigation();

  const [restaurants, setRestaurants] = useState([
    "Pai", "Kington Ramen", "McDonalds",
    "Ali Baba", "Burger King", "Wendys", "Tim Hortons",
    "ChaTime", "CoCo's", "Starbucks"
  ]);

  const [showAbout, setShowAbout] = useState(false);

  const [studentInfo, setStudentInfo] = useState([
    "Student Name: Jon\nStudent Id: 101124255",
    "Student Name: Adina\nStudent Id: 101391769",
    "Student Name: Khadija\nStudent Id: 101240746",
    "Student Name: Sabirin\nStudent Id: 101363605",
  ]);

  useEffect(() => {
  
  }, []);

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetails', { restaurantName: restaurant });
  };

  const handleAddRestaurant = () => {
    const newRestaurant = "New Restaurant";
    setRestaurants([...restaurants, newRestaurant]);
  };

  const handleDeleteRestaurant = (index) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants.splice(index, 1);
    setRestaurants(updatedRestaurants);
  };

  const handleAboutPress = () => {
    setShowAbout(!showAbout);
  };

  const handleAboutClose = () => {
    setShowAbout(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.restaurantItem}
            onPress={() => handleRestaurantPress(item)}
          >
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteRestaurant(index)}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddRestaurant}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAboutPress}>
          <Text>About</Text>
        </TouchableOpacity>
      </View>

   
      <Modal
        animationType="slide"
        transparent={true}
        visible={showAbout}
        onRequestClose={() => setShowAbout(false)}
      >
        <AboutScreen studentInfo={studentInfo} onAboutClose={handleAboutClose} />
      </Modal>


      <View style={styles.toolbar}>
       
      </View>

  
      <Image
        style={styles.logo}
        source={require('./logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 230,
    height: 91,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#007bff',
  },
  logo: {
    width: '100%',
    height: 'auto',
    alignSelf: 'center',
  },
});

export default MainScreen;
