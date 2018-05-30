import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default () => (
  <View style={styles.nav}>
    <Text style={styles.label}>Platzi Music</Text>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#cc2222",
    // alignItems: "center",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    minHeight: 94,
    paddingTop: 24
  },
  label: {
    alignSelf: "center",
    color: "#f5f5f5",
    fontSize: 22
  }
});
