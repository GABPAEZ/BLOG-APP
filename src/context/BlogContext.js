import React, { createContext, useReducer } from "react";

const BlogContext = createContext();

// Reducer recibe el state=blogPosts y un action

const blogsReducer = (state, actions) => {
  switch(actions.type) {
    case 'ADD_BLOG_POST':
      return [...state, { title: `My Post #${state.length + 1}` }]
    default:
      return state
  }

}


export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogsReducer, []);


// actions
  
  const addBlogPost = () => {
    dispatch({ type: 'ADD_BLOG_POST'});
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;