import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/common";

export const styles = StyleSheet.create({
  // containers
  topArtistsContainer: {
    marginTop: 12,
    marginBottom: 32,
    padding: 0,
    height: 223
  },
  coolContainer: {
    marginRight: 8,
    height: 174,
    width: 128
  },
  coolTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 8,
    bottom: -49,
    height: 40,
    width: 108
  },

  // elements
  coolImage: {
    borderRadius: 8,
    flex: 1,
    height: undefined,
    width: undefined
  },
  coolText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "100",
    lineHeight: 16,
    textAlign: "center",
    textAlignVertical: "center"
  },

  // utils
  text: { color: colors.white }
});
