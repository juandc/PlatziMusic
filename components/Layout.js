import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "./Navbar";
import { colors } from "../styles/common";

export default ({ children }) => (
  <View style={[styles.layout]}>
    <Navbar />
    {children}
  </View>
);

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.black,
    flex: 1
  }
});
