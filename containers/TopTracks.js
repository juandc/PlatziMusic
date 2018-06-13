import React from "react";
import { Text } from "react-native";
import List from "../components/List";
import Button from "../components/Button";
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
          onPress={e => console.log(e.item.key)}
          contentContainerStyle={styles.topTracksContainer}
        />
        <Button
          align="right"
          bgColor="#00000000"
          text="View more"
          buttonStyles={{ container: { marginTop: -8, marginBottom: 32 } }}
        />
      </React.Fragment>
    );
  }
}
