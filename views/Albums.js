import React from "react";
import Layout from "../components/Layout";

export default class Browse extends React.Component {
  static navigationOptions = { title: "Albums" };

  render() {
    console.log(this.props.navigation.state);
    return <Layout />;
  }
}
