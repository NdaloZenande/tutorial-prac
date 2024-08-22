import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function TransaportationScreen({ navigation}) {
  const transportOption = [
    {
      name: 'Uber Rides',
      description: 'Reliable transportation service available 24/7 for your convenience',
      price: 'Avarage R40 but depends where your going',
      imageUri: require('../assets/uber.jpg')
    },
    {
      name: 'Gautrain',
      description: 'Gautrain is an 80-kilometre higher-speed express commuter rail system in Gauteng, South Africa, which links Johannesburg, Pretoria, Kempton Park and O. R. Tambo International Airport',
      price: 'Avarage R60 depends on your destination',
      imageUri: require('../assets/Gautrain.jpg'),
    },
    {
      name: 'Gautrain Bus',
      description: 'The Gautrain bus service provides safe, comfortable and reliable passage to and from all Gautrain stations, with the exception of the OR Tambo International Airport. Every second bus is equipped with a wheelchair ramp and a wheelchair bay',
      price: 'R70',
      imageUri: require('../assets/gautrain-buses.jpg')
    },
    {
      name: 'Waterfront helicopter tour',
      description: 'Fly with one of Waterfront Helicopter Tours Helicopters from the Cape Town V&A Waterfront over the beaches of Clifton and Camps Bay to our breathtaking Table Mountain bringing you home over the Cape Town City Bowl and finally back to the Cape Town V&A Waterfront.',
    },
  ];

  return(
    <ScrollView style = {styles.container}>
      {transportOption.map((Option, index) => (
        <TouchableOpacity
          key = {index}
          style = {styles.transportation}
          onPress = {() => navigation.navigate('Booking', {transportOption: Option})}
        >
        <Image source = {Option.imageUri} style = {styles.image} />
        <Text style = {styles.title}>{Option.name}</Text>
        <Text style = {styles.description}>{Option.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  transportation: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
});