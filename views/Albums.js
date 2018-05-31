import React from "react";
import { View, Text } from "react-native";
import Layout from "../components/Layout";
import Album from "../components/Album/Album";
import { albumsFromArtist } from "../utils/api-client";
import { colors } from "../styles/common";

export default class Albums extends React.Component {
  static navigationOptions = {
    title: "Albums",
    headerStyle: {
      backgroundColor: "red"
    }
  };

  state = {
    albums: []
  };

  // componentDidMount() {
  //   const { navigation } = this.props;
  //   albumsFromArtist(navigation.getParam("artist").name).then(albums =>
  //     this.setState({ albums })
  //   );
  // }

  render() {
    const { navigation } = this.props;
    const { albums } = this.state;

    return (
      <Layout>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            paddingVertical: 4,
            paddingHorizontal: 1
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            {/* {albums.map(e => <Album key={e.id} />)} */}
            <Album />
            <Album />
            <Album />
            <Album />
          </View>
        </View>
      </Layout>
    );
  }
}
