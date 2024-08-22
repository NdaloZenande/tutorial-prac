import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function BookingScreen({route, navigation}) {
  const { transportOption} = route.params;

  return(
    <View style = {styles.container}>
      <Text style = {styles.title}>Booking {transportOption.name}</Text>
      <Text style = {styles.description}>{transportOption.description}</Text>
      <Text style = {styles.price}>Price: {transportOption.price}</Text>
      <Button title = "Confirm Booking" onPress = {() => alert('Booking Cornfirmed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',

    marginBottom: 20,
  },
})