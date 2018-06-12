const url = stuff =>
  `https://ws.audioscrobbler.com/2.0/?api_key=e5f95ee46580f32ab850e3cbfddec906&format=json${stuff}`;

export async function getTopArtists(params) {
  const { limit = 50 } = params || {};

  const uri = `&method=chart.gettopartists&limit=${limit}`;
  const res = await fetch(url(uri));
  const data = await res.json();

  return data.artists.artist.map(artist => ({
    key: artist.mbid,
    name: artist.name,
    image: { uri: artist.image[3]["#text"] }
  }));
}

export async function getTopTracks(params) {
  const { limit = 50 } = params || {};

  const uri = `&method=chart.gettoptracks&limit=${limit}`;
  const res = await fetch(url(uri));
  const data = await res.json();

  return data.tracks.track.map(track => ({
    key: track.name, // `mbid` is always an empty array ("") 🤔
    name: track.name,
    artist: track.artist.name
  }));
}

// TODO: Use helpers
export const albumsFromArtist = artist =>
  fetch(url("&method=artist.gettopalbums&artist=" + artist))
    .then(res => res.json())
    .then(data => data.topalbums.album) // yes, in singular...
    .then(artists => {
      const filteredList = [];

      artists.map(artist => {
        // TODO: This sh*t should be a helper D:
        const isEmpty =
          !artist ||
          !artist.mbid ||
          artist.name == "(null)" ||
          artist.name.length <= 3 ||
          artist.image == "(null)" ||
          artist.image.length <= 3;

        if (!isEmpty) {
          filteredList.push({
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]["#text"]
          });
        }
      });

      return filteredList;
    });
