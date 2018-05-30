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
    const { list } = this.state;
    const isLoading =
      !list._dataBlob || !list._dataBlob.s1 || !list._dataBlob.s1.length;

    if (isLoading) return <CardLoading />;

    return (
      <ListView
        enableEmptySections
        dataSource={this.state.list}
        renderRow={artist => <Card {...artist} />}
      />
    );
  }
}
