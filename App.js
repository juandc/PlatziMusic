import React from "react";
import Layout from "./components/Layout";
import CardList from "./components/Card/CardList";
import { topArtists } from "./utils/api-client";

export default class App extends React.Component {
  state = {
    artists: []
  };

  componentDidMount() {
    topArtists().then(artists => this.setState({ artists }));
  }

  render() {
    return (
      <Layout>
        <CardList list={this.state.artists} />
      </Layout>
    );
  }
}
