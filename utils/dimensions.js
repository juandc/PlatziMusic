import React, { Component } from "react";
import { Dimensions } from "react-native";

export default class DimensionsHelper extends React.Component {
  state = {
    ...deviceDimensions(Dimensions.get("screen"))
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.updateDimensions);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateDimensions);
  }

  updateDimensions = props => {
    this.setState(updateDimensions(props));
  };

  render() {
    console.log(this.state.orientation);

    return this.props.children(this.state);
  }
}

// Helpers
function updateDimensions({ screen }) {
  return function updateState(state, props) {
    return {
      ...deviceDimensions(screen)
    };
  };
}

function deviceDimensions({ height, width }) {
  const orientation = height >= width ? "portrait" : "landscape";

  return { orientation, height, width };
}
