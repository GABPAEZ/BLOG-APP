import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  // console.log(navigation.getParam('id'));
  const { state } = useContext(Context);

  // se tiene que llamar blogPosto para usar el title del objeto porque esta si en el contexto creo

  const blogPost = state.find(item => item.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
