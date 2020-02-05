import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik initialValues={{ title: "", body: "", rating: "" }} onSubmit={(values)=>{
          console.log(values)
        }}>
        {(props)=>(
          <View>
            <TextInput style={globalStyles.input} placeholder='review title' onChange={props.handleChange('title')} value={props.values.title}/>
            <TextInput style={globalStyles.input} placeholder='review body' onChange={props.handleChange('body')} value={props.values.body} multiline/>
            <TextInput style={globalStyles.input} placeholder='Rating (1-5)' onChange={props.handleChange('rating')} value={props.values.rating}/>
            <Button title='submit' color='maroon' onPress={props.handleSubmit}
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
