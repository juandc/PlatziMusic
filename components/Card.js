import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../styles/common";

export default ({
  name = defaults.name,
  image = defaults.image,
  likes = defaults.likes,
  comments = defaults.comments
}) => (
  <CardContainer style={styles.container}>
    <CardImage source={{ uri: image }} />
    <CardDescription>
      <CardTitle>{name}</CardTitle>
      <CardActions>
        <CardAction>
          <Text style={{ fontSize: 22 }}>♥</Text>
          <CardActionCount count={likes} />
        </CardAction>
        <CardAction>
          <Text style={{ fontSize: 22 }}>💬</Text>
          <CardActionCount count={comments} />
        </CardAction>
      </CardActions>
      <CardPointer>
        <Text style={{ fontSize: 16 }}>👉</Text>
      </CardPointer>
    </CardDescription>
  </CardContainer>
);

const CardContainer = props => <View style={styles.container} {...props} />;
const CardDescription = props => <View style={styles.description} {...props} />;
const CardActions = props => <View style={styles.actions} {...props} />;
const CardAction = props => <View style={styles.action} {...props} />;
const CardPointer = props => <View style={styles.pointer} {...props} />;
const CardImage = props => <Image style={styles.image} {...props} />;
const CardTitle = props => (
  <Text style={[styles.text, styles.title]} {...props} />
);
const CardActionCount = ({ count, ...props }) => (
  <Text style={[styles.text, styles.count]} {...props} children={count} />
);

const styles = StyleSheet.create({
  // containers
  container: {
    flexDirection: "row",
    padding: 16
  },
  description: {
    borderBottomColor: colors.white + 25, // 25 is the opacity
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginLeft: 12,
    paddingHorizontal: 8,
    flex: 1
  },
  actions: { flexDirection: "row", marginTop: 10 },
  action: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 16
  },
  pointer: {
    position: "absolute",
    right: 8,
    top: 24
  },
  // elements
  image: {
    borderRadius: 1,
    height: 56,
    width: 56
  },
  title: { fontSize: 18, lineHeight: 22 },
  count: { fontSize: 10, opacity: 0.75 },
  // utils
  text: { color: colors.white }
});

const defaults = {
  name: "The Rolling Stones",
  image:
    "https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png",
  likes: 200,
  comments: 4
};
