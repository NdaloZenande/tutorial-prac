import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

export default function RestaurantScreen(){
  return(
    <ScrollView style = {styles.container}>
      <View style = {styles.restuarant}>
        <Image source={require('../assets/Signature.jpeg')} style = {styles.image} />
        <Text style = {styles.title}>Signature</Text>
        <Text style = {styles.description}>The restaurant's menu offers classic and innovative dishes that will tantalise your taste buds. The calamari is a signature dish</Text>
        <Image source={require('../assets/forum.jpg')} style = {styles.image} />
        <Text style = {styles.title}>Forum Homini & Roots Restaurant</Text>
        <Text style = {styles.description}>Most of the produce used in roots is locally sourced, but more specifically from our direct surrounds, ensuring superlative standards of freshness and quality.Enter a world of calm sophistication and sumptuous luxury in our restaurant</Text>
        <Image source={require('../assets/fishmonger.jpg')} style = {styles.image} />
        <Text style = {styles.title}>Fishmonger lllove</Text>
        <Text style = {styles.description}>Fishmonger Illovo is the first of all of the Fishmonger restaurants and is one of Johannesburg’s top seafood eateries. We are well situated in the Thrupps Centre in Illovo, Sandton. Our menu offers a wide variety of shellfish, fresh line fish and sushi.</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  restuarant:{
    marginBottom: 20,
    alignItems: 'center',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
  },
  description:{
    color: '#555',
    fontSize: 14,
  },
  image: {
    width: 300,
    height: 200, 
    marginBottom: 10,
  },
})
