import React from "react";
import Layout from "../components/Layout";
import AlbumList from "../components/Album/AlbumList";
import { albumsFromArtist } from "../utils/api-client";
import { colors } from "../styles/common";

export default class Albums extends React.Component {
  static navigationOptions = {
    title: "Albums",
    headerStyle: { backgroundColor: colors.black }
  };

  state = { albums: [] };

  componentDidMount() {
    const { navigation } = this.props;
    const { name } = navigation.getParam("artist");

    albumsFromArtist(name).then(albums => {
      this.setState({ albums });
    });
  }

  render() {
    const { navigation } = this.props;
    const { albums } = this.state;

    return (
      <Layout>
        <AlbumList list={albums} openDetail={e => console.warn(e)} />
      </Layout>
    );
  }
}
