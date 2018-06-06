import React from "react";
import { ListView, TouchableOpacity } from "react-native";
import { isListLoading } from "../utils/global-helpers";

export default class List extends React.Component {
  // In "mounting" list is empty, so app is loading. Then
  // `componentDidMount` updates the `ListView` "dataSource"
  // and app renders the real content.

  // The `componentWillReceiveProps` method is there
  // just in case the wrapper component provides a pagination
  // method or something like that 😉.

  state = { list: dataSource };

  componentDidMount() {
    this.updateList(this.props.list);
  }

  componentWillReceiveProps({ list }) {
    this.props.list !== list && this.updateList(list);
  }

  updateList = list => {
    this.setState(updateList(list));
  };

  render() {
    const { render, children, fallback, ...props } = this.props;
    const { list } = this.state;
    const renderRow = render || children;

    if (isListLoading(list)) return fallback;

    return (
      <ListView
        enableEmptySections
        dataSource={list}
        renderRow={renderRow} // `renderRow` returns a function, so children is a render prop 🎉
        {...props}
      />
    );
  }
}

// Helpers
function updateList(list) {
  return function updateState(state, props) {
    return {
      list: state.list.cloneWithRows(list)
    };
  };
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
