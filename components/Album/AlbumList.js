import React, { Component } from "react";
import { ListView, TouchableOpacity } from "react-native";
import Layout from "./Layout";
import { LayoutLoading } from "./layout-styles";

export default class LayoutList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = { list: ds };
  }

  componentDidMount() {
    this.updateList(this.props.list);
  }

  componentWillReceiveProps({ list }) {
    if (this.props.list !== list) this.updateList(list);
  }

  updateList = data => {
    this.setState(oldState => ({
      list: oldState.list.cloneWithRows(data)
    }));
  };

  render() {
    const { openDetail } = this.props;
    const { list } = this.state;

    const isLoading =
      !list._dataBlob || !list._dataBlob.s1 || !list._dataBlob.s1.length;

    if (isLoading) return <LayoutLoading />;

    return (
      <ListView
        enableEmptySections
        dataSource={list}
        renderRow={artist => (
          <TouchableOpacity onPress={() => openDetail(artist)}>
            <Layout {...artist} />
          </TouchableOpacity>
        )}
      />
    );
  }
}
