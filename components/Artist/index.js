import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./artist-styles";

export const CoolArtist = ({ name, image }) => (
  <View style={styles.coolContainer}>
    <Image source={{ uri: image }} style={styles.coolImage} />
    <View style={styles.coolTextContainer}>
      <Text style={[styles.text, styles.coolText]}>{name}</Text>
    </View>
  </View>
);

export const ArtistLoading = () => (
  <Text style={[styles.text]}>loading...</Text>
);

export { styles };
