import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from "./src/screens/indexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";

const Navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog",
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: "#f4511e"
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
        <App/>
    </BlogProvider>
  )
}

