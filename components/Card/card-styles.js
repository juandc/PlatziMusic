import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../../styles/common";

export const CardContainer = props => (
  <View style={styles.cardContainer} {...props} />
);

export const CardDescription = props => (
  <View style={styles.descriptionContainer} {...props} />
);

export const CardActions = props => (
  <View style={styles.actionsContainer} {...props} />
);

export const CardAction = props => (
  <View style={styles.actionContainer} {...props} />
);

export const CardPointer = props => (
  <View style={styles.pointerContainer} {...props} />
);

export const CardImage = props => <Image style={styles.cardImage} {...props} />;

export const CardTitle = props => (
  <Text style={[styles.text, styles.cardTitle]} {...props} />
);

export const CardActionCount = ({ count, ...props }) => (
  <Text style={[styles.text, styles.cardCount]} children={count} {...props} />
);

export const CardLoading = () => (
  <CardContainer>
    <Text style={[styles.text]}>Loading...</Text>
  </CardContainer>
);

const styles = StyleSheet.create({
  // containers
  cardContainer: {
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
  cardImage: {
    borderRadius: 1,
    height: 56,
    width: 56
  },
  cardTitle: { fontSize: 18, lineHeight: 22 },
  cardCount: { fontSize: 10, opacity: 0.75 },

  // utils
  text: { color: colors.white }
});
