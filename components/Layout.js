import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { NavigationProvider } from "../utils/navigation";
import { colors } from "../styles/common";

export default function DecideLayout(props) {
  if (!props.navigation) return <SimpleLayout {...props} />;

  return (
    <NavigationProvider
      navigation={props.navigation}
      render={<SimpleLayout {...props} />}
    />
  );
}

const SimpleLayout = props => <ScrollView style={styles.layout} {...props} />;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.black,
    flex: 1,
    padding: 16
  }
});
