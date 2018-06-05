import React from "react";
import { Text } from "react-native";
import Layout from "../components/Layout";
import List from "../components/List";
import * as api from "../utils/api-client";

export default class Browse extends React.Component {
  static navigationOptions = { title: "Browse" };

  render() {
    return (
      <Layout>
        <TopArtists />
        {/* Top Tracks */}
      </Layout>
    );
  }
}

class TopArtists extends React.Component {
  state = { artists: [] };

  async componentDidMount() {
    await this.getTopArtists();
  }

  getTopArtists = async () => {
    const artists = await api.getTopArtists();
    this.setState({ artists });
  };

  render() {
    const { artists } = this.state;

    return (
      <List list={artists} fallback={<Text>loading...</Text>}>
        {artist => <Text>Hey! I did found an artist :D</Text>}
      </List>
    );
  }
}
