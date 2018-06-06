import React from "react";
import { Text } from "react-native";
import { CoolArtist, ArtistLoading, styles } from "./Artist";
import List from "./List";
import * as api from "../utils/api-client";

export default class TopArtists extends React.Component {
  state = { artists: [] };

  componentDidMount() {
    this.getTopArtists();
  }

  getTopArtists = async () => {
    const artists = await api.getTopArtists({ limit: 6 });
    this.setState({ artists });
  };

  render() {
    const { artists } = this.state;
    const list = [...artists];

    return (
      <React.Fragment>
        <Text>Top Artists</Text>
        <List
          list={list}
          fallback={<ArtistLoading />}
          horizontal={true}
          contentContainerStyle={styles.topArtistsContainer}
        >
          {CoolArtist}
        </List>
        {/* <Text>Top Tracks</Text>
        <List
          list={list}
          fallback={<ArtistLoading />}
          horizontal={true}
          contentContainerStyle={styles.topArtistsContainer}
        >
          {CoolArtist}
        </List> */}
      </React.Fragment>
    );
  }
}
