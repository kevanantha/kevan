import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export let spotifySDK = SpotifyApi.withUserAuthorization(
  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
  process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI as string,
  [
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
  ]
);
