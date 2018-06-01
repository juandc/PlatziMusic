import React from "react";
import Layout from "../components/Layout";
import CardList from "../components/Card/CardList";
import { topArtists } from "../utils/api-client";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Platzi Music"
  };

  state = { artists: [] };

  componentDidMount() {
    topArtists().then(artists => this.setState({ artists }));
  }

  render() {
    const { navigation } = this.props;

    return (
      <Layout>
        <CardList
          list={this.state.artists}
          openDetail={artist => navigation.navigate("Albums", { artist })}
        />
      </Layout>
    );
  }
}
