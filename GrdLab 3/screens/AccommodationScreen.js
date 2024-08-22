import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

export default function AccommodationScreen(){
  return(
    <ScrollView style = {styles.container}>
      <View style = {styles.accommodation}>
        <Image source = {require('../assets/sun.jpeg')} style = {styles.image} />
        <Text style = {styles.title}>SunCity Resort</Text>
        <Text style = {styles.description}>SunCity Hotel is located in North West</Text>
        <Image source = {require('../assets/Botique.jpg')} style = {styles.image} />
        <Text style = {styles.title}>Boutique Hotel</Text>
        <Text style = {styles.description}>Boutique hotels are small-capacity hotels that provide more personalized service than typical hotels</Text>
        <Image source = {require('../assets/raid.jpeg')} style = {styles.image} />
        <Text style = {styles.title}>Raid</Text>
        <Text style = {styles.description}>The riad. Pinnacles of traditional architecture and Moroccan culture with their open patio, the riads are now often converted into guest houses.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    padding: 10,
  },
  accommodation: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description:{
    fontSize: 18,
    color: '#555',
  },
  image: {
    width: 300,  
    height: 200, 
    marginBottom: 10,
  },
})