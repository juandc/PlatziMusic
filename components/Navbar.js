import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default () => (
  <View style={styles.navContainer}>
    <Text style={styles.navLabel}>Platzi Music</Text>
  </View>
);

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#cc2222",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    minHeight: 86,
    paddingHorizontal: 16,
    paddingTop: 24
  },
  navLabel: {
    alignSelf: "center",
    color: "#f5f5f5",
    fontSize: 22
  }
});
