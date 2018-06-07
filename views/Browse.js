import React from "react";
import Layout from "../components/Layout";
import TopArtists from "../containers/TopArtists";

export default class Browse extends React.Component {
  static navigationOptions = { title: "Browse" };

  render() {
    return (
      <Layout>
        <TopArtists />
        <TopArtists />
        {/* Top Tracks */}
      </Layout>
    );
  }
}
