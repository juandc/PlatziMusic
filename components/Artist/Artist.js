import React from "react";
import { Text } from "react-native";
import {
  ArtistContainer,
  ArtistDescription,
  ArtistActions,
  ArtistPointer,
  ArtistTitle,
  ArtistImage,
  ArtistAction,
  ArtistActionCount
} from "./artist-styles";

export default ({ name, image, likes, comments }) => (
  <ArtistContainer>
    <ArtistImage source={{ uri: image }} />
    <ArtistDescription>
      <ArtistTitle>{name}</ArtistTitle>
      <ArtistActions>
        <ArtistAction>
          <Text style={{ fontSize: 22 }}>♥</Text>
          <ArtistActionCount count={likes} />
        </ArtistAction>
        <ArtistAction>
          <Text style={{ fontSize: 22 }}>💬</Text>
          <ArtistActionCount count={comments} />
        </ArtistAction>
      </ArtistActions>
      <ArtistPointer>
        <Text style={{ fontSize: 16 }}>👉</Text>
      </ArtistPointer>
    </ArtistDescription>
  </ArtistContainer>
);
