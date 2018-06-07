import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { colors } from "../styles/common";

export default props => <ScrollView style={styles.layout} {...props} />;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.black,
    flex: 1,
    padding: 16
  }
});
