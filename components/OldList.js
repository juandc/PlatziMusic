import React from "react";
import { ScrollView, ListView, TouchableOpacity, Text } from "react-native";
import { isListLoading, isDataSourceLoading } from "../utils/global-helpers";

export default function scrollPerformance(props) {
  // This component decides the render method. If
  // `withPerformance` key is "true" is gonna render
  // the `PerformantList` component, using the "ListView"
  // native wrapper. Else is using the "ScrollView".
  const newProps = {
    // Default Props
    fallback: <Text style={{ color: "#F5F5F5" }}>loading...</Text>,
    // Props
    ...props,
    // New Props
    renderRow: props.render || props.children
  };

  if (!props.withPerformance) return <SimpleList {...newProps} />;

  return <PerformantList {...newProps} />;
}

// A simple wrapper, with terrible performance.
const SimpleList = ({ list, renderRow, fallback, ...props }) => {
  if (isListLoading(list)) return fallback;

  return (
    <ScrollView {...props}>
      {withAdditionalItem(list, props).map(renderRow)}
    </ScrollView>
  );
};

// A complicated wrapper with excelent performance 😎.
class PerformantList extends React.Component {
  // In "mounting" list is empty, so app is loading. Then
  // `componentDidMount` updates the `ListView` "dataSource"
  // and app renders the real content.

  // The `componentWillReceiveProps` method is there
  // just in case the wrapper component provides a pagination
  // method or something like that 😉.
  state = { dataSource };

  componentDidMount() {
    this.updateList(this.props.list);
  }

  componentWillReceiveProps(newProps) {
    // TODO: "withAdditionalItem" is just working for
    // the first time "componentWillReceiveProps" call...
    this.props.list !== newProps.list &&
      this.updateList(withAdditionalItem(newProps.list, this.props));
  }

  updateList = list => {
    this.setState(updateList(list));
  };

  render() {
    const { dataSource } = this.state;
    const { renderRow, fallback, ...props } = this.props;

    if (isDataSourceLoading(dataSource)) return fallback;

    return (
      <ListView
        enableEmptySections
        {...props}
        dataSource={dataSource}
        renderRow={renderRow}
        // ^^^ The `renderRow` prop returns a function,
        // so children and render are render props... 🎉
      />
    );
  }
}

// PerformantList Helpers
function updateList(list) {
  return function updateState(state, props) {
    return {
      dataSource: state.dataSource.cloneWithRows(list)
    };
  };
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2 // obligatory, see https://facebook.github.io/react-native/docs/listview.html
});

// Shared Helpers
function withAdditionalItem(list, props) {
  if (props.additionalItem) return [...list, props.additionalItem];
  return list;
}
