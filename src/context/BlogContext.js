import createDateContext from "./createDataContext";
//import "react-native-get-random-values";
//import {v4 as uuidv4} from "uuid"; ---NO ME FUNCIONA NO SE PORQUE
// Reducer recibe el state=blogPosts y un action



const blogsReducer = (state, actions) => {
  switch (actions.type) {
    case 'DELETE_POST':
      return state.filter((item) => item.id !== actions.payload)
    case "ADD_BLOG_POST":
      return [
        ...state,
        {id: `id # ${Math.floor(Math.random()*99999)}` , title: `My Post #${state.length + 1}` }
      ];
    default:
      return state;
  }
};

// actions

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };
};

const deletePost = dispatch => {
  return (id) => {
    dispatch({type: 'DELETE_POST', payload: id})
  }
};


export const { Context, Provider } = createDateContext(
  blogsReducer,
  { addBlogPost, deletePost },
  []
);
