import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "./Navbar";

export default ({ children }) => (
  <View style={styles.nav}>
    <Navbar />
    {children}
  </View>
);

const styles = StyleSheet.create({
  layout: {
    marginTop: 150,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
