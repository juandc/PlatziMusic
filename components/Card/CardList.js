import React, { Component } from "react";
import { ListView } from "react-native";
import Card from "./Card";
import { CardLoading } from "./card-styles";

export default class CardList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      list: ds.cloneWithRows(props.list)
      // list: ds.cloneWithRows([])
    };
  }

  render() {
    if (!this.state.list._dataBlob.s1.length) return <CardLoading />;

    return (
      <ListView
        enableEmptySections
        dataSource={this.state.list}
        renderRow={artist => <Card {...artist} />}
      />
    );
  }
}
