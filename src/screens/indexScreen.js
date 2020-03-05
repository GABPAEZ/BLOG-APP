import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context }from "../context/BlogContext";

const indexScreen = () => {
  //llamamos al valor value pasado en el context para mostrarlo en esta pantalla
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      {/* <Text>Index Screen Page</Text> */}
      <Button title="Add Blog Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default indexScreen;
