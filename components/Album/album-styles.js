import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { colors } from "../../styles/common";

export const AlbumContainer = props => (
  <View style={styles.albumContainer}>
    <View
      style={{
        backgroundColor: "red",
        flex: 1
      }}
    />
  </View>
);

const { width } = Dimensions.get("window");
const albumWidth = width * 0.5 - 2;

const styles = StyleSheet.create({
  albumContainer: {
    padding: 2,
    width: albumWidth,
    height: albumWidth
  }
});
