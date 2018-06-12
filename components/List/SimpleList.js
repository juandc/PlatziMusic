import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { withAdditionalItem } from "./list--utils";
import { isListLoading } from "../../utils/global-helpers";

// A simple wrapper, with terrible performance.
export default function SimpleList({
  renderRow: Render,
  list,
  fallback,
  onPress,
  ...props
}) {
  if (isListLoading(list)) return fallback;

  return (
    <ScrollView {...props}>
      {withAdditionalItem(list, props).map(item => (
        <TouchableOpacity
          key={item.key}
          onPress={() => onPress(item.key)}
          activeOpacity={0.5}
        >
          <Render {...item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
