import React from "react";
import { Text } from "react-native";
import { AlbumCard, AlbumTitle, AlbumImage } from "./album-styles";
import DimensionsHelper from "../../utils/dimensions";

export default ({ name, image }) => (
  <DimensionsHelper>
    {dimentions => (
      <AlbumCard {...dimentions}>
        <AlbumImage image={image} />
        <AlbumTitle name={name} />
      </AlbumCard>
    )}
  </DimensionsHelper>
);
