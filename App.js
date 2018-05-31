import React from "react";
import { createStackNavigator } from "react-navigation";
import Home from "./views/Home";
import Albums from "./views/Albums";

export default class App extends React.Component {
  render() {
    return <Router />;
  }
}

const routes = {
  Home,
  Albums
};

const conf = {
  headerStyle: {
    backgroundColor: "#cc2222"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "normal"
  }
};

const Router = createStackNavigator(routes, {
  initialRouteName: "Home",
  navigationOptions: conf
});
