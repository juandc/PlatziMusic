import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../../styles/common";

// Components
export const AlbumCard = props => (
  <View
    style={[
      styles.albumCardContainer,
      (() => {
        const widthLogic = props.orientation === "portrait" ? 0.5 : 0.31;
        const width = props.width * widthLogic - 2;
        console.log(props.width, width);
        return {
          height: width,
          width
        };
      })()
    ]}
  >
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

export const AlbumLoading = () => (
  <Text style={[styles.text, styles.albumLoading]}>Loading...</Text>
);

// const { width } = Dimensions.get("window");
// const albumWidth = width * 0.5 - 2;

// Styles
export const { albumsContainer, ...styles } = StyleSheet.create({
  albumsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 3,
    width: "100%"
  },
  albumCardContainer: { padding: 2 },
  albumTitleContainer: { backgroundColor: colors.red + 50 },

  // elements
  albumCard: { flex: 1 },
  albumTitle: {
    fontSize: 16,
    lineHeight: 24,
    padding: 4
  },
  albumImage: {
    top: 0,
    flex: 1,
    height: undefined,
    width: undefined
  },
  albumLoading: { fontSize: 14, padding: 16 },

  // utils
  text: { color: colors.white }
});
