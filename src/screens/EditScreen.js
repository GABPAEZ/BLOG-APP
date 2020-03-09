import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editPostBlog } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find(blogPost => blogPost.id === id);
  // // como vamos a editar tengo que psarles los valores por defecto para editarlos

  // const [title, setTitle] = useState(blogPost.title);
  // const [content, setContent] = useState(blogPost.content);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editPostBlog(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
