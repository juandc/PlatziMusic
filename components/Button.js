import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { colors } from "../styles/common";

export default function Button({
  align,
  bgColor,
  color,
  text,
  buttonStyles,
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={[
          styles.container,
          buttonStyles.container,
          styles[align],
          { backgroundColor: colors[bgColor] || bgColor }
        ]}
        {...props}
      >
        <Text
          style={[
            styles.text,
            buttonStyles.text,
            { color: colors[color] || color }
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  align: "left",
  bgColor: "white",
  color: "red",
  text: "Button",
  buttonStyles: { container: {}, text: {} },
  onPress: () => console.log("button pressed")
};

const styles = new StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    minHeight: 22,
    minWidth: 80,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  text: { color: colors.red, lineHeight: 20, textAlign: "center" },
  left: { alignSelf: "flex-start", alignItems: "flex-start" },
  right: { alignSelf: "flex-end", alignItems: "flex-end" }
});
