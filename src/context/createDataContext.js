import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
    const Provider = ({ children }) => {
    //use reducer
      const [state, dispatch] = useReducer(reducer, initialState);
      
      // actions === { addBlogPosts: (dispatch)=>{ return ()=>{}}}

      const boundActions = {};
      for (let key in actions) {
          boundActions[key] = actions[key](dispatch);
      }

    return (
      <Context.Provider value={{ state: state, ...boundActions }}>
          {children}
      </Context.Provider>
    )
    }
    return { Context, Provider };
};
