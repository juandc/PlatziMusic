import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Render, withAdditionalItem } from "./list--utils";
import { isListLoading } from "../../utils/global-helpers";

// A simple wrapper, with terrible performance.
export default function SimpleList(props) {
  if (isListLoading(props.list)) return props.fallback;

  return <ScrollView {...props}>{renderList(props)}</ScrollView>;
}

// Reder logic
function renderList(props) {
  const newList = [];
  const oldList = [...props.list];
  if (props.additionalItem) oldList.push(props.additionalItem);

  const formatItems = oldList.map(item => {
    newList.push({
      item,
      ...(props.additionalProps || {}),
      onPress: item.onPress || props.onPress,
      renderRow: props.render || props.children
    });
  });

  return newList.map(Render);
}
