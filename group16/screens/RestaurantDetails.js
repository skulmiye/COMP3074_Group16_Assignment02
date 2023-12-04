import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const RestaurantDetails = ({ route }) => {
  const { restaurantName } = route.params;

  const handleMapPress = () => {

    const coordinates = {
      latitude: 37.7749,
      longitude: -122.4194,
    };


    openMap(coordinates);
  };

  const openMap = (coordinates) => {
    const { latitude, longitude } = coordinates;

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

   
    Linking.openURL(mapUrl);
  };

  return (
    <View style={styles.container}>
      {/* Restaurant Name */}
      <Text style={styles.restaurantName}>{restaurantName}</Text>

      {/* Restaurant Description */}
      <Text style={styles.description}>
        Welcome to our restaurant! We offer delicious and diverse cuisine.
      </Text>

      {/* Restaurant Address */}
      <Text style={styles.address}>123 Main Street, Cityville, Country</Text>

      {/* Restaurant Phone Number */}
      <Text style={styles.phoneNumber}>Phone: 1-555-123-4567</Text>

      {/* Map Button */}
      <Button title="Map" onPress={handleMapPress} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default RestaurantDetails;



