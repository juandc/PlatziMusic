import React from "react";
import { Text } from "react-native";
import { colors } from "../../styles/common";

// List utils
export const defaultProps = {
  fallback: FallbackText
};

// Lists utils
export function withAdditionalItem(list, props) {
  if (props.additionalItem) return [...list, props.additionalItem];
  return list;
}

// Helpers (yes, utils for utils)
const FallbackText = <Text style={{ color: colors.white }}>loading...</Text>;
