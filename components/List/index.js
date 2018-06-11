import React from "react";
import SimpleList from "./SimpleList";
import PerformantList from "./PerformantList";
import { defaultProps } from "./list--utils";

export default function List(props) {
  // This component decides the render method. If
  // `withPerformance` key is "true" is gonna render
  // the `PerformantList` component, using the "ListView"
  // native wrapper. Else is using the "ScrollView".
  const newProps = {
    ...defaultProps,
    ...props,
    renderRow: props.render || props.children
  };

  if (!props.withPerformance) return <SimpleList {...newProps} />;
  return <PerformantList {...newProps} />;
}
