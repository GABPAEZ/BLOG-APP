import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from "./src/screens/indexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog List",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#055771" //#f4511e
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const App = createAppContainer(Navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
