import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../styles/common";

export const CoolTrack = ({ name, artist }) => (
  <View style={styles.coolContainer}>
    <Text style={[styles.text]}>{name}</Text>
    <Text style={[styles.text]}>{artist}</Text>
    <Image
      style={[styles.icon]}
      source={require("../public/img/right-arrow.png")}
    />
  </View>
);

export const CoolTrackLoading = () => (
  <View style={[styles.topTracksContainer]}>
    {[...Array(1, 2, 3, 4)].map(i => (
      <View
        key={i}
        style={[
          styles.coolContainer,
          { backgroundColor: colors.white + 10, borderRadius: 2 }
        ]}
      />
    ))}
  </View>
);

// This is a bit longer than my suposted D:
export const styles = StyleSheet.create({
  // parent containers
  topTracksContainer: {
    marginTop: 12,
    marginBottom: 4,
    paddingHorizontal: 8
  },

  // containers
  coolContainer: { height: 46, marginBottom: 12 },

  // elements
  icon: {
    position: "absolute",
    top: 15,
    right: 4
  },

  // utils
  text: { color: colors.white }
});
