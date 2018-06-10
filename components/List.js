import React from "react";
import { ScrollView, ListView, TouchableOpacity } from "react-native";
import {
  isListLoading,
  isPerformantListLoading
} from "../utils/global-helpers";

export default function scrollPerformance(props) {
  const newProps = {
    ...props,
    renderRow: props.render || props.children
  };

  if (!props.withPerformance) {
    if (isListLoading(props.list)) return props.fallback;
    return <SimpleList {...newProps} />;
  }

  if (isPerformantListLoading(props.list)) return props.fallback;
  return <PerformantList {...newProps} />;
}

function SimpleList({ list, renderRow, ...props }) {
  return <ScrollView {...props}>{list.map(renderRow)}</ScrollView>;
}

class PerformantList extends React.Component {
  state = { dataSource };

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
    const { renderRow, ...props } = this.children;
    const { dataSource } = this.state;

    return (
      <ListView
        enableEmptySections
        dataSource={dataSource}
        renderRow={renderRow} // `renderRow` returns a function, so children is a render prop 🎉
        {...props}
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
  rowHasChanged: (r1, r2) => r1 !== r2
});
