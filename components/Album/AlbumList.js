import React, { Component } from "react";
import { ListView, TouchableOpacity } from "react-native";
import Album from "./Album";
import { AlbumLoading, albumsContainer } from "./album-styles";

export default class AlbumList extends Component {
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

  componentWillReceiveProps({ list: newList }) {
    if (this.props.list !== newList) this.updateList(newList);
  }

  updateList = data => {
    this.setState(oldState => ({
      list: oldState.list.cloneWithRows(data)
    }));
  };

  render() {
    const { openDetail } = this.props;
    const { list } = this.state;

    // TODO: `isLoading` is universal for `ListView`, should be a helper
    const isLoading =
      !list._dataBlob || !list._dataBlob.s1 || !list._dataBlob.s1.length;

    if (isLoading) return <AlbumLoading />;

    return (
      <ListView
        enableEmptySections
        dataSource={list}
        renderRow={album => (
          <TouchableOpacity onPress={() => openDetail(album)}>
            <Album {...album} />
          </TouchableOpacity>
        )}
        contentContainerStyle={albumsContainer}
      />
    );
  }
}
