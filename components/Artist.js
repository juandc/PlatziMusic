import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../styles/common";

export const CoolArtist = ({ name, image, ...props }) => (
  <View key={`CoolArtist-${props.key}`} style={styles.coolContainer}>
    <Image source={image} style={styles.coolImage} />

    <View style={styles.coolTextContainer}>
      <Text style={[styles.text, styles.coolText]}>{name}</Text>
    </View>
  </View>
);

export const CoolArtistLoading = () => (
  <View style={[styles.topArtistsContainer, { flexDirection: "row" }]}>
    {[...Array(1, 2, 3)].map(i => (
      <View
        key={i}
        style={[
          styles.coolContainer,
          { backgroundColor: colors.white + 30, borderRadius: 8 }
        ]}
      />
    ))}
  </View>
);

// Component for the Top List
export const VIEW_MORE = {
  key: "VIEW_MORE_ARTISTS",
  name: "View more...",
  image: require("../public/img/view_more_artists.png")
  // onPress: e => e.navigation.navigate("Artists")
};

// This is a bit longer than my suposted D:
export const styles = StyleSheet.create({
  // parent containers
  topArtistsContainer: {
    marginTop: 12,
    marginBottom: 32,
    padding: 0,
    height: 223
  },

  // containers
  coolContainer: {
    marginRight: 8,
    height: 174,
    width: 128
  },
  coolTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 8,
    bottom: -49,
    height: 40,
    width: 108
  },

  // elements
  coolImage: {
    borderRadius: 8,
    flex: 1,
    height: undefined,
    width: undefined
  },
  coolText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "100",
    lineHeight: 16,
    textAlign: "center",
    textAlignVertical: "center"
  },

  // utils
  text: { color: colors.white }
});
