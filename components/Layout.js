import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../styles/common";

export default props => <View style={styles.layout} {...props} />;

const styles = StyleSheet.create({
  layout: { backgroundColor: colors.black, flex: 1 }
});
