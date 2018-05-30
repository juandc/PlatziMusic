const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=e5f95ee46580f32ab850e3cbfddec906&format=json`;

export const topArtists = () =>
  fetch(URL)
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
