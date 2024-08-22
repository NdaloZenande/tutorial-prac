import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function HomeScreen(){
  return(
    <View style = {styles.container}>
      <Text style = {styles.welcome}>Heita dah, 
Mzansi! Explore the beauty of South Africa</Text>
      <Image source = {require('../assets/SA.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 300, 
    height: 200, 
    marginBottom: 10,
  },
})