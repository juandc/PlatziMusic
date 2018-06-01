import React from "react";
import { Text } from "react-native";
import {
  AlbumCard,
  AlbumTitle,
  // AlbumCount,
  AlbumImage
} from "./album-styles";

export default ({ name, image }) => (
  <AlbumCard>
    <AlbumImage image={image} />
    <AlbumTitle name={name} />
  </AlbumCard>
);

const defaults = {
  name: "Album Name",
  image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEXh4eHh4eHh4eEAAADh4eHn5+fh4eH////v7+/39/fr6+v8/Pz6+vr09PTx8fHk5ORza0f7AAAABXRSTlPxrSYAKAFLLCwAAAGOSURBVEjH5ZaxSsNAHMaj6O4bKPgGPoGP4HLSHqZO+grX0KRbMQq6lRjpeqC1e8XWUUKSuaQguBW7ODi4+z8v9sgl/8uo4EcpR/nd1++7P+Ri7W2dGrS2a+18EoOO161tYtSHtWkGDqwTM3D4v4C4Dgj6NUDTMQHK4jwEzXVAWdidCWg80wBlkSVD0MgrA9LCdrlY0WhWBZDsJkvkCizKQCMM3FWTKA7Dnga8dabjxx/AhqTdIkDd4fDOITQnIGrKC0CjnRfxL3LmrKcBssgLY08cBUgwcOeXUSJDacB3piZbwHLCUeCIiSO6T9C/yN4dsfZQYCqHmiIAbJVDzXhFhrb8AguxGQkJAFgYAOrJ48x6FRm6MqSwwEPKrcErXnMkBm6zZxSgE/i1xfoEqQkWYlixg86CUDFuKIK1AN36HIqUgVabKMnjXJQclGynlIGky6Xvrz7j66spKQIjpinRAOoXFDzUPIKaHgaoIpUAVxaOAnALHFAWOEAGf+5Z/atA7cVafzXvmy/3jdrXgy87KfrGEeDcrQAAAABJRU5ErkJggg=="
};
