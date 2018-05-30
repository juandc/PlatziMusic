import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../styles/common";

export default ({
  name = defaults.name,
  image = defaults.image,
  likes = defaults.likes,
  comments = defaults.comments
}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: image }} />
    <View style={styles.description}>
      <Text style={[styles.text, styles.title]}>{name}</Text>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Text style={{ fontSize: 22 }}>♥</Text>
          <Text style={[styles.text, styles.count]}>{likes}</Text>
        </View>
        <View style={styles.action}>
          <Text style={{ fontSize: 22 }}>💬</Text>
          <Text style={[styles.text, styles.count]}>{comments}</Text>
        </View>
      </View>
      <View style={{ position: "absolute", right: 8, top: 18 }}>
        <Text style={{ fontSize: 16, color: "#FFF" }}>➡</Text>
      </View>
    </View>
  </View>
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
    marginHorizontal: 12,
    paddingBottom: 12,
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
  comments: 6
};
