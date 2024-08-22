import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DestinationScreen from './screens/DestinationScreen';
import AccommodationScreen from './screens/AccommodationScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BookingScreen from './screens/BookingScreen';
import TransaportationScreen from './screens/TransportationScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TransportationStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name = "Transportation" component = {TransaportationScreen} />
      <Stack.Screen name = "Booking" component = {BookingScreen} />
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "Home">
        <Tab.Screen name="Home" component = {HomeScreen} />
        <Tab.Screen name="Destination" component = {DestinationScreen} />
        <Tab.Screen name="Accommodation" component = {AccommodationScreen} />
        <Tab.Screen name="Restaurant" component = {RestaurantScreen} />
      <Tab.Screen name="Transportation" component = {TransaportationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

