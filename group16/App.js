// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import RestaurantDetails from './screens/RestaurantDetails';
import LoadingScreen from './screens/LoadingScreen'; 

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

  
    return () => clearTimeout(timeout);
  }, []);

 
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
