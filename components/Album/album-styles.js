import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../../styles/common";

export const AlbumCard = props => {
  const widthLogic = props.isPortrait ? 0.5 : 0.31;
  const width = props.width * widthLogic - 2;

  return (
    <View style={[styles.albumCardContainer, { height: width, width }]}>
      <View style={styles.albumCard} {...props} />
    </View>
  );
};

export const AlbumTitle = ({ name }) => (
  <Text style={[styles.text, styles.albumTitle]}>{name}</Text>
);

export const AlbumImage = ({ image }) => (
  <Image source={{ uri: image }} style={styles.albumImage} />
);

export const AlbumLoading = () => (
  <Text style={[styles.text, styles.albumLoading]}>Loading...</Text>
);

const styles = StyleSheet.create({
  albumsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 3,
    width: "100%"
  },
  albumCardContainer: { padding: 2 },

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

export const { albumsContainer } = styles;
