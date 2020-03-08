import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Entypo } from "@expo/vector-icons";

const indexScreen = ({ navigation }) => {
  //llamamos al valor value pasado en el context para mostrarlo en esta pantalla
  const { state, addBlogPost, deletePost } = useContext(Context);

  return (
    <View>
      {/* <Text>Index Screen Page</Text> */}
      <Button title="Add Blog Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.text}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deletePost(item.id)}>
                  <Entypo style={styles.avatar} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  text: {
    fontSize: 18
  },
  avatar: {
    fontSize: 18
  }
});

export default indexScreen;
