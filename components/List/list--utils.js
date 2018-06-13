import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "../../styles/common";

// List utils
export const defaultProps = {
  enableEmptySections: true,
  fallback: FallbackText
};

// Reusable components
export const Render = props => (
  <TouchableOpacity
    key={`TouchableOpacity-${props.item.key}`}
    onPress={() => props.onPress(props)}
    activeOpacity={0.5}
  >
    {props.renderRow(props.item)}
  </TouchableOpacity>
);

// Helpers (yes, utils for utils)
const FallbackText = <Text style={{ color: colors.white }}>loading...</Text>;
