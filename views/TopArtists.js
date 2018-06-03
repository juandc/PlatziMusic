import React from "react";
import Layout from "../components/Layout";
import ArtistList from "../components/Artist/ArtistList";
import { topArtists } from "../utils/api-client";

export default class TopArtists extends React.Component {
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
        <ArtistList
          list={this.state.artists}
          openDetail={artist => navigation.navigate("Albums", { artist })}
        />
      </Layout>
    );
  }
}
