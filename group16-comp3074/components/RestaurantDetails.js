import React from 'react';
import { View, Text, Button, StyleSheet, Linking, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantDetails = ({ route }) => {
  const { restaurant, onDeleteRestaurant } = route.params;
  const { name, details } = restaurant;
  const navigation = useNavigation();

  const handleMapPress = () => {
    const addressEncoded = encodeURIComponent(details.address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${addressEncoded}`;
    
    Linking.canOpenURL(mapUrl).then((supported) => {
      if (supported) {
        Linking.openURL(mapUrl);
      } else {
        console.error("Cannot open Google Maps.");
      }
    });
    
  };

  const handleDeletePress = () => {
    onDeleteRestaurant();
    navigation.navigate('MainScreen');
  };



  return (
    <View style={styles.container}>
      <Text style={styles.restaurantName}>{name}</Text>
      <Image style={styles.logo} source={route.params.restaurant.logo} resizeMode="contain" />
      <Text style={styles.description}>{details.description}</Text>
      <Text style={styles.address}>{details.address}</Text>
      <Text style={styles.phoneNumber}>Phone: {details.phoneNumber}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Map"
          onPress={handleMapPress}
          style={styles.button}
          color="#007bff"
        />
        <Button
          title="Delete"
          onPress={handleDeletePress}
          style={styles.button}
          color="#ff6961"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default RestaurantDetails;