import React from "react";
import { Text } from "react-native";

const { Provider, Consumer } = React.createContext();

export class NavigationProvider extends React.Component {
  render() {
    const { render, children, navigation } = this.props;

    return <Provider value={navigation}>{render || children}</Provider>;
  }
}

export const NavigationConsumer = ({ render, children, ...props }) => (
  <Consumer {...props}>{render || children}</Consumer>
);

export function withNavigation(WrappedComponent) {
  return function withInheritProps(props) {
    return (
      <NavigationConsumer
        render={navigation => (
          <WrappedComponent {...props} navigation={navigation} />
        )}
      />
    );
  };
}
