import axios from 'axios';

export async function loadArtistInfo(artist: any) {
  const infoUrl = '/?method=artist.getinfo';

  const artistRes: any = await axios({
    url: ``,
    method: 'GET',
    params: {
      artist,
      format: 'json',
    },
  });

  return artistRes.data.artist;
}
