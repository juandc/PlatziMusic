import React from "react";
import { View, Text, Image } from "react-native";
import Layout from "./components/Layout";
import Card from "./components/Card";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Card />
        <Card />
        <Card />
        <Card />
      </Layout>
    );
  }
}
