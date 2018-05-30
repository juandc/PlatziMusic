import React from "react";
import { View, Text, Image } from "react-native";

export default ({ image = defaultImage }) => (
  <View>
    <Image style={{ width: 150, height: 150 }} source={{ uri: image }} />
    <View>
      <Text>Ricardo Montaner</Text>
      {/* Likes */}
      {/* Comments */}
    </View>
  </View>
);

const defaultImage =
  "https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png";
