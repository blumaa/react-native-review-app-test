import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>Reading List rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#eee"
  }
});
