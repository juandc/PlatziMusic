const url = params =>
  `https://ws.audioscrobbler.com/2.0/?api_key=e5f95ee46580f32ab850e3cbfddec906&format=json${params}`;

export const topArtists = ({ country = "colombia" } = {}) =>
  fetch(url("&method=geo.gettopartists&country=" + country))
    .then(res => res.json())
    .then(data => data.topartists.artist) // yes, in singular...
    .then(artists =>
      artists.map(artist => ({
        id: artist.mbid,
        name: artist.name,
        image: artist.image[2]["#text"],
        likes: 200,
        comments: 6
      }))
    );

export const albumsFromArtist = artist =>
  fetch(url("&method=artist.gettopalbums&artist=" + artist))
    .then(res => res.json())
    .then(data => data.topalbums.album) // yes, in singular...
    .then(artists => {
      const filteredList = [];

      artists.map(artist => {
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
