import React, { Component } from "react";
import { Dimensions } from "react-native";

export const window = Dimensions.get("window");
export const {
  addEventListener: addWindowEventListener,
  height,
  scale,
  width
} = window;

export const isPortrait = () => height >= width;
export const isLandscape = () => width >= height;

export const isTablet = () =>
  (scale < 2 && msp(window, 1000)) || (scale >= 2 && msp(window, 1900));
export const isPhone = () => !isTablet();

export class DeviceListener extends Component {
  constructor() {
    super(props);

    this.state = {
      type: isTablet() ? "tablet" : "phone",
      orientation: isPortrait() ? "portrait" : "landscape"
    };

    Dimensions.addEventListener("change", () => {
      this.setState({
        orientation: isPortrait() ? "portrait" : "landscape"
      });
    });
  }

  render() {
    return this.props.children(this.state);
  }
}
