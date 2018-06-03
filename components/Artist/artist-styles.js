import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../../styles/common";

export const ArtistContainer = props => (
  <View style={styles.artistContainer} {...props} />
);

export const ArtistDescription = props => (
  <View style={styles.descriptionContainer} {...props} />
);

export const ArtistActions = props => (
  <View style={styles.actionsContainer} {...props} />
);

export const ArtistAction = props => (
  <View style={styles.actionContainer} {...props} />
);

export const ArtistPointer = props => (
  <View style={styles.pointerContainer} {...props} />
);

export const ArtistImage = props => (
  <Image style={styles.artistImage} {...props} />
);

export const ArtistTitle = props => (
  <Text style={[styles.text, styles.artistTitle]} {...props} />
);

export const ArtistActionCount = ({ count, ...props }) => (
  <Text style={[styles.text, styles.artistCount]} children={count} {...props} />
);

export const ArtistLoading = () => (
  <ArtistContainer>
    <Text style={[styles.text]}>Loading...</Text>
  </ArtistContainer>
);

const styles = StyleSheet.create({
  // containers
  artistContainer: {
    flexDirection: "row",
    padding: 16
  },
  descriptionContainer: {
    borderBottomColor: colors.white + 25, // 25 is the opacity
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginLeft: 12,
    paddingHorizontal: 8,
    flex: 1
  },
  actionsContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  actionContainer: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 16
  },
  pointerContainer: {
    position: "absolute",
    right: 8,
    top: 24
  },

  // elements
  artistImage: {
    borderRadius: 1,
    height: 56,
    width: 56
  },
  artistTitle: { fontSize: 18, lineHeight: 22 },
  artistCount: { fontSize: 10, opacity: 0.75 },

  // utils
  text: { color: colors.white }
});
