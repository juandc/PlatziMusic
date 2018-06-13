import React from "react";
import Layout from "../components/Layout";
import TopArtists from "../containers/TopArtists";
import TopTracks from "../containers/TopTracks";

export default class Browse extends React.Component {
  static navigationOptions = { title: "Browse" };

  render() {
    const { navigation } = this.props;

    return (
      <Layout navigation={navigation}>
        <TopArtists />
        <TopTracks />
      </Layout>
    );
  }
}
