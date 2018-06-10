import React from "react";
import { Text } from "react-native";
import List from "../components/List";
import { CoolArtist, CoolArtistLoading, styles } from "../components/Artist";
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
    const { artists: list } = this.state;
    const viewmore = {
      id: "VIEW_MORE_ARTISTS",
      name: "View more...",
      image: require("../public/view_more_artists.png")
    };

    return (
      <React.Fragment>
        <Text style={{ color: "#fafafa50" }}>Top Artists</Text>
        <List
          list={list}
          horizontal={true}
          render={CoolArtist}
          aditionalItem={viewmore}
          fallback={<CoolArtistLoading />}
          contentContainerStyle={styles.topArtistsContainer}
        />
      </React.Fragment>
    );
  }
}
