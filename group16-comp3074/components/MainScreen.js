import React, { useState, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AboutScreen from './AboutScreen';

const MainScreen = () => {
  const navigation = useNavigation();

  const [restaurants, setRestaurants] = useState([
    {
      name: 'Pai',
      logo: require('../assets/pai-logo.png'),
      details: {
        description: 'Authentic Thai cuisine',
        address: '18 Duncan St, Toronto, ON M5H 3G8',
        phoneNumber: '(416) 901-4724',
      },
    },
    {
      name: 'Kinton Ramen',
      logo: require('../assets/kinton-logo.png'),
      details: {
        description: 'Indulge in the authentic tastes of Japanese Ramen',
        address: '2216 Bloor St W, Toronto, ON M6S 1N4',
        phoneNumber: '(647) 341-2216',
      },
    },
    {
      name: 'McDonalds',
      logo: require('../assets/mac-logo.png'),
      details: {
        description:
          'Classic, long-running fast-food chain known for its burgers & fries',
        address: '630 Keele St, Toronto, ON M6N 3E5',
        phoneNumber: '(416) 604-1496',
      },
    },
    {
      name: 'Ali Baba',
      logo: require('../assets/alibaba-logo.png'),
      details: {
        description:
          'Popular local chain outpost for falafels, shawarma wraps, combo plates & daily meal deals',
        address: '729 Bloor St W, Toronto, ON M6G 1L5',
        phoneNumber: '(416) 533-4874',
      },
    },
    {
      name: 'Burger King',
      logo: require('../assets/bking-logo.png'),
      details: {
        description:
          'Well-known fast-food chain serving grilled burgers, fries & shakes',
        address: ' 267 College St, Toronto, ON M5T 1R6',
        phoneNumber: '(416) 591-9999',
      },
    },
    {
      name: "Wendy's",
      logo: require('../assets/wendys-logo.png'),
      details: {
        description:
          'Fast-food burger chain serving sides such as chili & baked potatoes',
        address: '19 Western Battery Rd, Toronto, ON M6K 3S4',
        phoneNumber: '(416) 533-3456',
      },
    },
    {
      name: 'Tim Hortons',
      logo: require('../assets/tim-logo.png'),
      details: {
        description:
          'Canadian chain for signature premium-blend coffee, plus light fare, pastries & breakfast sandwiches',
        address: '55 York St, Toronto, ON M5J 1R7',
        phoneNumber: '(416) 363-1055',
      },
    },
    {
      name: 'ChaTime',
      logo: require('../assets/chatime-logo.png'),
      details: {
        description: 'Authentic Taiwanese tea beverages ',
        address: '80 Weston Rd, Toronto, ON M6N 3P4',
        phoneNumber: '(647) 241-8155',
      },
    },
    {
      name: 'Starbucks',
      logo: require('../assets/starbucks-logo.png'),
      details: {
        description:
          'Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability',
        address: '39 E Liberty St, Toronto, ON M6K 0A7',
        phoneNumber: '(647) 438-8274',
      },
    },
  ]);

  const [showAbout, setShowAbout] = useState(false);

  const [studentInfo, setStudentInfo] = useState([
    'Student Name: Jon\nStudent Id: 101124255',
    'Student Name: Adina\nStudent Id: 101391769',
    'Student Name: Khadija\nStudent Id: 101240746',
    'Student Name: Sabirin\nStudent Id: 101363605',
  ]);

  useEffect(() => {}, []);


  const [newRestaurantName, setNewRestaurantName] = useState('');
  const [newRestaurantDescription, setNewRestaurantDescription] = useState('');
  const [newRestaurantAddress, setNewRestaurantAddress] = useState('');
  const [newRestaurantPhoneNumber, setNewRestaurantPhoneNumber] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleAddRestaurant = () => {
    setModalVisible(true);
  };

  const handleSaveRestaurant = () => {
    if (newRestaurantName.trim()) {
      const newRestaurant = {
        name: newRestaurantName,
        logo: require('../assets/snack-icon.png'),
        details: {
          description: newRestaurantDescription,
          address: newRestaurantAddress,
          phoneNumber: newRestaurantPhoneNumber,
        },
      };
      setRestaurants([...restaurants, newRestaurant]);
      setModalVisible(false);
      setNewRestaurantName('');
      setNewRestaurantDescription('');
      setNewRestaurantAddress('');
      setNewRestaurantPhoneNumber('');
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
    setNewRestaurantName('');
    setNewRestaurantDescription('');
    setNewRestaurantAddress('');
    setNewRestaurantPhoneNumber('');
  };


  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetails', {
      restaurant,
      onDeleteRestaurant: () =>
        handleDeleteRestaurant(restaurants.indexOf(restaurant)),
    });
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
      <Appbar.Header style={styles.appbar}>
        <Image
          style={styles.appbarLogo}
          source={require('../assets/snack-icon.png')}
          resizeMode="contain"
        />
        <Appbar.Content title="Restaurant Guide" titleStyle={styles.appbarTitle} />
      </Appbar.Header>

      <FlatList
        style={{ marginTop: 75 }} 
        data={restaurants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.restaurantItem}
            onPress={() => handleRestaurantPress(item)}>
            <Text style={styles.restaurantName}>{item.name}</Text>
            <Image style={styles.logo} source={item.logo} resizeMode="contain" />
            <Text style={styles.restaurantDescription}>
              {item.details.description}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddRestaurant}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAboutPress}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Restaurant Details:</Text>
            <TextInput
              style={styles.input}
              placeholder="Restaurant Name"
              value={newRestaurantName}
              onChangeText={(text) => setNewRestaurantName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={newRestaurantDescription}
              onChangeText={(text) => setNewRestaurantDescription(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={newRestaurantAddress}
              onChangeText={(text) => setNewRestaurantAddress(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={newRestaurantPhoneNumber}
              onChangeText={(text) => setNewRestaurantPhoneNumber(text)}
            />
            <View style={styles.modalButtons}>
              <Button title="Save" onPress={handleSaveRestaurant} />
              <Button title="Cancel" onPress={handleCancel} color="#ff6961" />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showAbout}
        onRequestClose={() => setShowAbout(false)}>
        <AboutScreen
          studentInfo={studentInfo}
          onAboutClose={handleAboutClose}
        />
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#007bff',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  appbarLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  appbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 0,
  },
  restaurantItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007bff',
  },
  restaurantDescription: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007bff',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

export default MainScreen;