import createDateContext from "./createDataContext";

// Reducer recibe el state=blogPosts y un action

const blogsReducer = (state, actions) => {
  switch (actions.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `My Post #${state.length + 1}` }];
    default:
      return state;
  }
};

// actions

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  }
};

export const { Context, Provider } = createDateContext(
  blogsReducer,
  { addBlogPost },
  []
);
