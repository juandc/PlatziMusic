import React from "react";
import { ScrollView } from "react-native";
import { withAdditionalItem } from "./list--utils";
import { isListLoading } from "../../utils/global-helpers";

// A simple wrapper, with terrible performance.
export default ({ list, renderRow, fallback, ...props }) => {
  if (isListLoading(list)) return fallback;

  return (
    <ScrollView {...props}>
      {withAdditionalItem(list, props).map(renderRow)}
    </ScrollView>
  );
};
