import createDateContext from "./createDataContext";
//import "react-native-get-random-values";
//import {v4 as uuidv4} from "uuid"; ---NO ME FUNCIONA NO SE PORQUE
// Reducer recibe el state=blogPosts y un action

const blogsReducer = (state, actions) => {
  switch (actions.type) {
    case "EDIT_BLOG_POST":
      return state.map(blogPost => {
        return blogPost.id === actions.payload.id ? actions.payload : blogPost;

        // esta es la forma tradiciona if-else
        // if (blogPost.id === actions.payload.id) {
        //   return actions.payload
        // } else {
        //   return blogPost;
        // }
      });
    case "DELETE_POST":
      return state.filter(item => item.id !== actions.payload);
    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: `id # ${Math.floor(Math.random() * 99999)}`,
          title: actions.payload.title,
          content: actions.payload.content
        }
      ];
    default:
      return state;
  }
};
//
// actions

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
const deletePost = dispatch => {
  return id => {
    dispatch({ type: "DELETE_POST", payload: id });
  };
};

const editPostBlog = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDateContext(
  blogsReducer,
  { addBlogPost, deletePost, editPostBlog },
  []
);
