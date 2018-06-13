import React from "react";
import { Text } from "react-native";
import List from "../components/List";
import {
  CoolArtist,
  CoolArtistLoading,
  VIEW_MORE,
  styles
} from "../components/Artist";
import { NavigationConsumer } from "../utils/navigation";
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

    return (
      <NavigationConsumer>
        {navigation => (
          <React.Fragment>
            <Text style={{ color: "#fafafa50" }}>Top Artists</Text>
            <List
              list={list}
              render={CoolArtist}
              additionalItem={VIEW_MORE}
              additionalProps={{ navigation }}
              fallback={<CoolArtistLoading />}
              onPress={e => navigation.navigate("Albums", e.item)}
              contentContainerStyle={styles.topArtistsContainer}
              withPerformance
              horizontal
            />
          </React.Fragment>
        )}
      </NavigationConsumer>
    );
  }
}
