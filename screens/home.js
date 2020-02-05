import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Modal
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from './reviewForm'

function Home({ navigation }) {
  const [ modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1"
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2"
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3"
    }
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews)=>{
      return [review, ...currentReviews]
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='fade'>
        <View style={styles.modalContent}>

          <MaterialIcons name="close" size={24} onPress={()=>setModalOpen(false)} style={{...styles.modalToggle, ...styles.modalClose}}></MaterialIcons>
          <ReviewForm addReview={addReview}/>

        </View>
      </Modal>

      <MaterialIcons name="add" size={24} onPress={()=>setModalOpen(true)} style={styles.modalToggle}></MaterialIcons>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})
