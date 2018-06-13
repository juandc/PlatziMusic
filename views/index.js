import { createStackNavigator } from "react-navigation";
import Browse from "./Browse";
import Albums from "./Albums";
import { colors } from "../styles/common";

const routes = {
  Browse,
  Albums
};

const navConfig = {
  headerStyle: { backgroundColor: colors.red },
  headerTintColor: colors.white,
  headerTitleStyle: { fontWeight: "normal" }
};

export const Router = createStackNavigator(routes, {
  initialRouteName: "Browse",
  navigationOptions: navConfig
});
