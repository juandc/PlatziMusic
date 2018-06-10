import React from "react";
import { ScrollView, ListView, TouchableOpacity, Text } from "react-native";
import {
  isListLoading,
  isPerformantListLoading
} from "../utils/global-helpers";

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

  if (!props.withPerformance) {
    if (isListLoading(props.list)) return newProps.fallback;
    return <SimpleList {...newProps} />;
  }

  if (isPerformantListLoading(props.list)) return newProps.fallback;
  return <PerformantList {...newProps} />;
}

// A simple wrapper, problems with performance.
const SimpleList = ({ list, renderRow, ...props }) => (
  <ScrollView {...props}>{list.map(renderRow)}</ScrollView>
);

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
    this.props.list !== newProps.list && this.updateList(newProps.list);
  }

  updateList = list => {
    this.setState(updateList(list));
  };

  render() {
    const { renderRow, ...props } = this.props;
    const { dataSource } = this.state;

    return (
      <ListView
        enableEmptySections
        {...props}
        dataSource={dataSource}
        // The `renderRow` prop returns a function,
        // so children and render are render props... 🎉
        renderRow={renderRow}
      />
    );
  }
}

// PerformantList Helpers
function updateList(list) {
  return function updateState(state, props) {
    return {
      list: state.list.cloneWithRows(list)
    };
  };
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2 // obligatory, see https://facebook.github.io/react-native/docs/listview.html
});
