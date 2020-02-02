import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";


function ReviewDetails( { navigation } ) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>I'm ReviewDetails</Text>
      <Button title="back to home" onPress={pressHandler} />
    </View>
  );
}

export default ReviewDetails;
