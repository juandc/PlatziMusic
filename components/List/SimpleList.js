import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { withAdditionalItem } from "./list--utils";
import { isListLoading } from "../../utils/global-helpers";

// A simple wrapper, with terrible performance.
export default ({ list, renderRow: Render, fallback, onPress, ...props }) => {
  if (isListLoading(list)) return fallback;

  return (
    <ScrollView {...props}>
      {withAdditionalItem(list, props).map(item => (
        <TouchableOpacity key={item.id} onPress={() => onPress(item.id)}>
          <Render {...item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
