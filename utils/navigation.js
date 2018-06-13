import React from "react";

const { Provider, Consumer } = React.createContext();

export class NavigationProvider extends React.Component {
  render() {
    const { render, children, navigation } = this.props;

    return <Provider value={navigation}>{render || children}</Provider>;
  }
}

export const NavigationConsumer = Consumer;
