import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

export default function DestinationScreen(){
  return(
      <ScrollView style = {styles.container}>
      <View style= {styles.destination}>
      <Image source = {require('../assets/Krugar.jpeg')} style = {styles.image} />
      <Text style = {styles.title}>Krugar National Park</Text>
      <Image source = {require('../assets/Bora.jpeg')} style = {styles.image} />
      <Text style = {styles.title}>Bora Bora</Text>
      <Image source = {require('../assets/Tsitsikamma_Park.jpeg')} style = {styles.image} />
      <Text style = {styles.title}>Tsitsikama National Park</Text>
      <Image source = {require('../assets/petra.jpeg')} style = {styles.image} />
      <Text style = {styles.title}>Petra</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  destination:{
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize:18,
    fontWeight:'bold',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
})