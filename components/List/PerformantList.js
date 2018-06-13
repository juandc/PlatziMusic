import React from "react";
import { TouchableOpacity, ListView } from "react-native";
import { Render } from "./list--utils";
import { isDataSourceLoading } from "../../utils/global-helpers";

// A complicated wrapper with excelent performance 😎.
export default class PerformantList extends React.Component {
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
    if (this.props.list !== newProps.list) {
      this.updateList([...newProps.list, newProps.additionalItem]);
    }
  }

  updateList = list => {
    this.setState(updateList(list));
  };

  render() {
    const { dataSource } = this.state;
    const { fallback, render, children, ...props } = this.props;
    const renderRow = render || children;

    if (isDataSourceLoading(dataSource)) return fallback;

    return (
      <ListView
        {...props}
        dataSource={dataSource}
        renderRow={item => (
          <Render
            key={`Render-${item.key}`}
            {...props.additionalProps || {}}
            onPress={item.onPress || props.onPress}
            renderRow={renderRow}
            item={item}
          />
        )}
        // ^^^ The `renderRow` prop returns a function,
        // so children and render are render props... 🎉
      />
    );
  }
}

// Helpers
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
