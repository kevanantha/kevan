"use server";

import { cookies } from "next/headers";

export async function getPlaybackState() {
  let token = cookies().get("token")?.value;
  let parsedToken = JSON.parse(token || "{}");

  if (!parsedToken?.access_token) {
    let REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN as string;

    cookies().set("refresh_token", REFRESH_TOKEN, {
      secure: true,
      path: "/",
    });
    let auth64 = Buffer.from(
      process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
    ).toString("base64");
    // @ts-expect-error
    let body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
      client_id: process.env.SPOTIFY_CLIENT_ID,
    });

    try {
      let res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + auth64,
        },
        body,
      });
      let data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      cookies().set("token", JSON.stringify(data), {
        maxAge: data.expires_in,
        expires: new Date(data.expires_in),
        secure: true,
        path: "/",
      });
      parsedToken = data;

      cookies().set("refresh_token", data.refresh_token, {
        secure: true,
        path: "/",
      });
    } catch (err) {
      console.error("error", err);
    }
  }

  let response = await fetch("https://api.spotify.com/v1/me/player", {
    headers: {
      Authorization: "Bearer " + parsedToken.access_token,
    },
  });
  let currentPlaying = await response.json();

  return currentPlaying;
}
