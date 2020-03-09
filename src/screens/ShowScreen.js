import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  // console.log(navigation.getParam('id'));
  const { state } = useContext(Context);

  // se tiene que llamar blogPosto para usar el title del objeto porque esta si en el contexto creo, no se puede pasar directamente el id del objeto porque no me serviria pra compoarar

  const blogPost = state.find(item => item.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <MaterialCommunityIcons name="pencil" size={30} color={"white"} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
