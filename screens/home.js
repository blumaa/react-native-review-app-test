import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from '../styles/global'

function Home({ navigation }) {
  const pressHandler = () => {
    console.log('review details button')
    navigation.navigate('ReviewDetails')
    // navigation.push('ReviewDetails')
  }
  return(
  <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}>Home Screen</Text>
    <Button title='go to review deets' onPress={pressHandler}/>
  </View>
)
}

export default Home;
