import React from "react";
import { View, Text } from "react-native";
import List from "../components/List";
import { CoolTrack, CoolTrackLoading, styles } from "../components/Track";
import * as api from "../utils/api-client";

export default class TopTracks extends React.Component {
  state = { tracks: [] };

  componentDidMount() {
    this.getTopTracks();
  }

  getTopTracks = async () => {
    const tracks = await api.getTopTracks({ limit: 4 });
    this.setState({ tracks });
  };

  render() {
    const { tracks } = this.state;
    const list = [...tracks];

    return (
      <React.Fragment>
        <Text style={{ color: "#fafafa50" }}>Top Tracks</Text>
        <List
          list={list}
          render={CoolTrack}
          fallback={<CoolTrackLoading />}
          contentContainerStyle={styles.topTracksContainer}
        />
        {/* // TODO: This should be a button */}
        <Text
          style={{ color: "#cc2222", textAlign: "right", marginBottom: 32 }}
        >
          View more
        </Text>
      </React.Fragment>
    );
  }
}
