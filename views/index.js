import { createStackNavigator } from "react-navigation";
import TopArtists from "./TopArtists";
import Albums from "./Albums";
import { colors } from "../styles/common";

const routes = {
  TopArtists,
  Albums
};

const navConfig = {
  headerStyle: { backgroundColor: colors.red },
  headerTintColor: colors.white,
  headerTitleStyle: { fontWeight: "normal" }
};

export const Router = createStackNavigator(routes, {
  initialRouteName: "TopArtists",
  navigationOptions: navConfig
});
