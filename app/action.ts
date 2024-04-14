"use server";

import { cookies } from "next/headers";

export async function getPlaybackState() {
  console.info("all cookies", cookies().getAll());

  let token = cookies().get("token")?.value;
  let parsedToken = JSON.parse(token || "{}");
  console.log("parsedToken", parsedToken);

  if (!parsedToken?.access_token) {
    console.info("does not have access token, refreshing token...");

    console.log(
      "process.env.SPOTIFY_REFRESH_TOKEN",
      process.env.SPOTIFY_REFRESH_TOKEN
    );

    console.log(
      'cookies().get("refresh_token")?.value',
      cookies().get("refresh_token")?.value
    );

    let REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN as string;

    // let REFRESH_TOKEN =
    //   cookies().get("refresh_token")?.value ||
    //   (process.env.SPOTIFY_REFRESH_TOKEN as string);

    cookies().set("refresh_token", REFRESH_TOKEN, {
      secure: true,
      path: "/",
    });
    console.log("REFRESH_TOKEN", REFRESH_TOKEN);
    console.log(
      "REFRESH_TOKEN from cookies",
      cookies().get("refresh_token")?.value
    );
    let auth64 = Buffer.from(
      process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
    ).toString("base64");
    console.log("auth64", auth64);
    // @ts-expect-error
    let body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
      client_id: process.env.SPOTIFY_CLIENT_ID,
    });

    console.info("body", body);

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
      console.log("data", data);
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
    } catch (e) {
      console.error("error", e);
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
