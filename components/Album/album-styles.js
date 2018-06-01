import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { colors } from "../../styles/common";

// Components
export const AlbumCard = props => (
  <View style={styles.albumCardContainer}>
    <View style={styles.albumCard} {...props} />
  </View>
);

export const AlbumTitle = ({ name }) => (
  <View styles={styles.albumTitleContainer}>
    <Text style={[styles.text, styles.albumTitle]}>{name}</Text>
  </View>
);

export const AlbumImage = ({ image }) => (
  <Image source={{ uri: image }} style={styles.albumImage} />
);

export const AlbumLoading = () => <Text style={[styles.text]}>Loading...</Text>;

// TODO: I NEED TO REMOVE THIS!!!
const { width } = Dimensions.get("window");
const albumWidth = width * 0.5 - 2;

// Styles
export const { albumsContainer, ...styles } = StyleSheet.create({
  albumsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 3,
    width: "100%"
  },
  albumCardContainer: {
    height: albumWidth,
    padding: 2,
    width: albumWidth
  },
  albumTitleContainer: {
    backgroundColor: colors.red + 50
  },

  // elements
  albumCard: { flex: 1 },
  albumTitle: {
    fontSize: 16,
    lineHeight: 24,
    padding: 4
  },
  albumImage: {
    top: 0,
    height: undefined,
    flex: 1,
    width: undefined
  },

  // utils
  text: { color: colors.white }
});
