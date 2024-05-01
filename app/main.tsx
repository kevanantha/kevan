"use client";

import { getPlaybackState } from "./action";
import Balancer from "react-wrap-balancer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PlaybackState } from "./types";
import useMeasure from "react-use-measure";

let EXPERIENCES = [
  {
    company: "eFishery",
    url: "https://efishery.com",
    position: "Frontend Engineer",
    time: "2023 - now",
  },
  {
    company: "Mekari - Talenta",
    url: "https://www.talenta.co",
    position: "Frontend Engineer",
    time: "2021 - 2023",
  },
  {
    company: "Mekari - Platform",
    url: "http://mekari.com",
    position: "Fullstack Engineer",
    time: "2019 - 2021",
  },
  {
    company: "UrRemote",
    url: null,
    position: "Fullstack Engineer",
    time: "2018 - 2019",
  },
  {
    company: "BlueLake Indonesia",
    url: null,
    position: "Fullstack Engineer",
    time: "2018 (3 months part-time)",
  },
];

let PROJECTS = [
  {
    name: "evestory",
    url: "https://evestory.day",
    description:
      "Wedding invitation web app that allows users to create and share their wedding invitation with their guests.",
  },
  {
    name: "Govesta",
    url: "https://app.govesta.id",
    description:
      "Led and orchestrated the development team to create a seamless hotel check-in system, ensuring smooth and efficient operations for guests and staff alike.",
  },
  {
    name: "Melange Radix Icons",
    url: "https://github.com/kevanantha/melange-radix-icons",
    description: "Melange bindings for Radix Icons.",
  },
  {
    name: "Snake Reason Game",
    url: "https://snake-reason-game.fly.dev/",
    description: "A simple snake game built with ReasonML and ReasonReact.",
  },
  {
    name: "eFishery Assignment",
    url: "https://fish.1kev.in/",
    description: "Assignment for eFishery recruitment process.",
  },
  {
    name: "Trillo Kanban",
    url: "https://kanban-d99f9.firebaseapp.com/",
    description: "Real-time Kanban app built with Vue and Firebase.",
  },
  {
    name: "Drumkit",
    url: "https://drumkit.1kev.in",
    description: "Drumkit app built with Javascript and HTML.",
  },
  {
    name: "Tick Tack Toe",
    url: "https://ticktacktoe.1kev.in",
    description: "Tick Tack Toe game built with React.",
  },
  {
    name: "Wedding Web Template",
    url: "https://wedding-template.1kev.in/",
    description: "A simple wedding template.",
  },
];

let UIS = [
  {
    name: "Buttons",
    url: "https://buttons.1kev.in",
    description:
      "List of buttons with defferent states and animations.",
  },
  {
    name: "Side Nav",
    url: "https://side-nav.1kev.in",
    description:
      "Side navigation component built with Next.js, Tailwindcss and Framer Motion.",
  },
  {
    name: "Stagger Button with Star Animation",
    url: "https://aka.1kev.in/ui/star-button",
    description: "Button with stagger letter and star animation.",
  },
  {
    name: "Horizontal-Vertical Nav",
    url: "https://framer-nav.1kev.in",
    description:
      "Horizontal-vertical navigation component built with Next.js, Tailwindcss and Framer Motion.",
  },
  {
    name: "Animated Tabs",
    url: "https://animated-tabs.1kev.in",
    description:
      "Animated tabs component built with Remix, Tailwindcss and Framer Motion.",
  },
  {
    name: "Elastic Slider",
    url: "https://elastic-slider.1kev.in",
    description:
      "Elastic Slider component built with Next.js Radix UI and Framer Motion.",
  },
];

export default function Main() {
  let [playbackRef, bounds] = useMeasure();
  let [active, setActive] = useState<string | null>(null);

  let [playbackState, setPlaybackState] = useState<PlaybackState | null>(
    process.env.NODE_ENV === "development"
      ? {
          device: {
            id: "18466906e2fc6261b8d8582e5e732e280dc87c81",
            is_active: true,
            is_private_session: false,
            is_restricted: false,
            name: "kevan’s MacBook Pro",
            supports_volume: true,
            type: "Computer",
            volume_percent: 100,
          },
          shuffle_state: false,
          smart_shuffle: false,
          repeat_state: "off",
          timestamp: 1713032010487,
          context: {
            external_urls: {
              spotify: "https://open.spotify.com/collection/tracks",
            },
            href: "https://api.spotify.com/v1/me/tracks",
            type: "collection",
            uri: "spotify:user:kevin.anantha21:collection",
          },
          progress_ms: 7788,
          item: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb",
                  },
                  href: "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
                  id: "5INjqkS1o8h1imAzPqGZBb",
                  name: "Tame Impala",
                  type: "artist",
                  uri: "spotify:artist:5INjqkS1o8h1imAzPqGZBb",
                },
              ],
              available_markets: [
                "AR",
                "AU",
                "AT",
                "BE",
                "BO",
                "BR",
                "BG",
                "CA",
                "CL",
                "CO",
                "CR",
                "CY",
                "CZ",
                "DK",
                "DO",
                "DE",
                "EC",
                "EE",
                "SV",
                "FI",
                "FR",
                "GR",
                "GT",
                "HN",
                "HK",
                "HU",
                "IS",
                "IE",
                "IT",
                "LV",
                "LT",
                "LU",
                "MY",
                "MT",
                "MX",
                "NL",
                "NZ",
                "NI",
                "NO",
                "PA",
                "PY",
                "PE",
                "PH",
                "PL",
                "PT",
                "SG",
                "SK",
                "ES",
                "SE",
                "CH",
                "TW",
                "TR",
                "UY",
                "US",
                "GB",
                "AD",
                "LI",
                "MC",
                "ID",
                "JP",
                "TH",
                "VN",
                "RO",
                "IL",
                "ZA",
                "SA",
                "AE",
                "BH",
                "QA",
                "OM",
                "KW",
                "EG",
                "MA",
                "DZ",
                "TN",
                "LB",
                "JO",
                "PS",
                "IN",
                "BY",
                "KZ",
                "MD",
                "UA",
                "AL",
                "BA",
                "HR",
                "ME",
                "MK",
                "RS",
                "SI",
                "KR",
                "BD",
                "PK",
                "LK",
                "GH",
                "KE",
                "NG",
                "TZ",
                "UG",
                "AG",
                "AM",
                "BS",
                "BB",
                "BZ",
                "BT",
                "BW",
                "BF",
                "CV",
                "CW",
                "DM",
                "FJ",
                "GM",
                "GE",
                "GD",
                "GW",
                "GY",
                "HT",
                "JM",
                "KI",
                "LS",
                "LR",
                "MW",
                "MV",
                "ML",
                "MH",
                "FM",
                "NA",
                "NR",
                "NE",
                "PW",
                "PG",
                "WS",
                "SM",
                "ST",
                "SN",
                "SC",
                "SL",
                "SB",
                "KN",
                "LC",
                "VC",
                "SR",
                "TL",
                "TO",
                "TT",
                "TV",
                "VU",
                "AZ",
                "BN",
                "BI",
                "KH",
                "CM",
                "TD",
                "KM",
                "GQ",
                "SZ",
                "GA",
                "GN",
                "KG",
                "LA",
                "MO",
                "MR",
                "MN",
                "NP",
                "RW",
                "TG",
                "UZ",
                "ZW",
                "BJ",
                "MG",
                "MU",
                "MZ",
                "AO",
                "CI",
                "DJ",
                "ZM",
                "CD",
                "CG",
                "IQ",
                "LY",
                "TJ",
                "VE",
                "ET",
                "XK",
              ],
              external_urls: {
                spotify:
                  "https://open.spotify.com/album/1DNSmmRLfv97Yjq7MTFWng",
              },
              href: "https://api.spotify.com/v1/albums/1DNSmmRLfv97Yjq7MTFWng",
              id: "1DNSmmRLfv97Yjq7MTFWng",
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b273176e82d09ac75d62810f0056",
                  width: 640,
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e02176e82d09ac75d62810f0056",
                  width: 300,
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d00004851176e82d09ac75d62810f0056",
                  width: 64,
                },
              ],
              name: "InnerSpeaker",
              release_date: "2010-05-21",
              release_date_precision: "day",
              total_tracks: 11,
              type: "album",
              uri: "spotify:album:1DNSmmRLfv97Yjq7MTFWng",
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb",
                },
                href: "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
                id: "5INjqkS1o8h1imAzPqGZBb",
                name: "Tame Impala",
                type: "artist",
                uri: "spotify:artist:5INjqkS1o8h1imAzPqGZBb",
              },
            ],
            available_markets: [
              "AR",
              "AU",
              "AT",
              "BE",
              "BO",
              "BR",
              "BG",
              "CA",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DK",
              "DO",
              "DE",
              "EC",
              "EE",
              "SV",
              "FI",
              "FR",
              "GR",
              "GT",
              "HN",
              "HK",
              "HU",
              "IS",
              "IE",
              "IT",
              "LV",
              "LT",
              "LU",
              "MY",
              "MT",
              "MX",
              "NL",
              "NZ",
              "NI",
              "NO",
              "PA",
              "PY",
              "PE",
              "PH",
              "PL",
              "PT",
              "SG",
              "SK",
              "ES",
              "SE",
              "CH",
              "TW",
              "TR",
              "UY",
              "US",
              "GB",
              "AD",
              "LI",
              "MC",
              "ID",
              "JP",
              "TH",
              "VN",
              "RO",
              "IL",
              "ZA",
              "SA",
              "AE",
              "BH",
              "QA",
              "OM",
              "KW",
              "EG",
              "MA",
              "DZ",
              "TN",
              "LB",
              "JO",
              "PS",
              "IN",
              "BY",
              "KZ",
              "MD",
              "UA",
              "AL",
              "BA",
              "HR",
              "ME",
              "MK",
              "RS",
              "SI",
              "KR",
              "BD",
              "PK",
              "LK",
              "GH",
              "KE",
              "NG",
              "TZ",
              "UG",
              "AG",
              "AM",
              "BS",
              "BB",
              "BZ",
              "BT",
              "BW",
              "BF",
              "CV",
              "CW",
              "DM",
              "FJ",
              "GM",
              "GE",
              "GD",
              "GW",
              "GY",
              "HT",
              "JM",
              "KI",
              "LS",
              "LR",
              "MW",
              "MV",
              "ML",
              "MH",
              "FM",
              "NA",
              "NR",
              "NE",
              "PW",
              "PG",
              "WS",
              "SM",
              "ST",
              "SN",
              "SC",
              "SL",
              "SB",
              "KN",
              "LC",
              "VC",
              "SR",
              "TL",
              "TO",
              "TT",
              "TV",
              "VU",
              "AZ",
              "BN",
              "BI",
              "KH",
              "CM",
              "TD",
              "KM",
              "GQ",
              "SZ",
              "GA",
              "GN",
              "KG",
              "LA",
              "MO",
              "MR",
              "MN",
              "NP",
              "RW",
              "TG",
              "UZ",
              "ZW",
              "BJ",
              "MG",
              "MU",
              "MZ",
              "AO",
              "CI",
              "DJ",
              "ZM",
              "CD",
              "CG",
              "IQ",
              "LY",
              "TJ",
              "VE",
              "ET",
              "XK",
            ],
            disc_number: 1,
            duration_ms: 235866,
            explicit: false,
            external_ids: {
              isrc: "AUUM71000136",
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/2a2MbiJN2skOxohykOVcss",
            },
            href: "https://api.spotify.com/v1/tracks/2a2MbiJN2skOxohykOVcss",
            id: "2a2MbiJN2skOxohykOVcss",
            is_local: false,
            name: "Solitude Is Bliss (Mickey Moonlight Reprise)",
            popularity: 58,
            preview_url:
              "https://p.scdn.co/mp3-preview/5cc2833a7c5a876fef613961f49f1bbf96e35025?cid=5111c360a24a40ae81f4ff056b915292",
            track_number: 6,
            type: "track",
            uri: "spotify:track:2a2MbiJN2skOxohykOVcss",
          },
          currently_playing_type: "track",
          actions: {
            disallows: {
              resuming: true,
              skipping_prev: true,
            },
          },
          is_playing: true,
        }
      : null
  );

  useEffect(() => {
    (async () => {
      if (process.env.NODE_ENV === "production") {
        let playbackState = await getPlaybackState();
        setPlaybackState(playbackState);
      }
    })();
  }, []);

  return (
    <main className="flex min-h-screen max-w-2xl mx-auto flex-col items-center mt-12 px-6">
      <div className="flex flex-col gap-16 sm:gap-32 mb-20">
        <div>
          <h1 className="font-medium">Kevin Anantha</h1>
          <p className="text-muted-foreground font-medium leading-none">
            Frontend Engineer
          </p>
        </div>

        <Section>
          <h2 className="font-medium">Now</h2>
          <p className="text-muted-foreground">
            <Balancer>
              I am a frontend engineer at eFishery to help sales team to improve
              their productivity. Currently, I delve and explore into user
              interface design while carefully considering the visual appeal,
              functionality, and user experience.
            </Balancer>
          </p>
        </Section>

        {/* {playbackState?.item?.id && (
          <Section>
            <h2 className="font-medium">Currently Listening</h2>
            <Card>
              <CardHeader className="p-3 flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
                <div className="flex flex-col flex-1 sm:flex-row gap-3 items-center">
                  <Link href={playbackState.item.external_urls.spotify}>
                    <Image
                      src={playbackState.item.album.images[0].url}
                      width={64}
                      height={64}
                      className="rounded-md flex-1"
                      alt="Album cover"
                    />
                  </Link>
                  <div className="overflow-hidden max-sm:items-center max-sm:max-w-xs sm:w-full flex flex-col">
                    <CardTitle className="text-base font-normal truncate">
                      {playbackState.item.name}
                    </CardTitle>
                    <CardDescription className="text-base truncate">
                      {playbackState.item.artists[0].name}
                    </CardDescription>
                  </div>
                </div>

                <SoundWave position="center" />
              </CardHeader>
            </Card>
          </Section>
        )} */}

        {/* experiment */}
        {playbackState?.item?.id && (
          <Section>
            <h2 className="font-medium">Currently Listening</h2>
            <Card ref={playbackRef}>
              <CardHeader className="p-3 flex flex-row items-center gap-3">
                <div className="flex flex-row flex-1 gap-3 items-center">
                  {/* <Link href={playbackState.item.external_urls.spotify}> */}
                  <Link href={playbackState.item.album.uri}>
                    <Image
                      src={playbackState.item.album.images[0].url}
                      width={64}
                      height={64}
                      className="rounded-md flex-1"
                      alt="Album cover"
                    />
                  </Link>
                  <div
                    className="overflow-clip block"
                    style={{ width: `${bounds.width - 190}px` }}
                  >
                    <Link href={playbackState.item.uri}>
                      <CardTitle className="text-base font-normal truncate">
                        {playbackState.item.name}
                      </CardTitle>
                    </Link>
                    <Link href={playbackState.item.artists[0].uri}>
                      <CardDescription className="text-base truncate">
                        {playbackState.item.artists[0].name}
                      </CardDescription>
                    </Link>
                  </div>
                </div>

                <SoundWave position="center" />
              </CardHeader>
            </Card>
          </Section>
        )}

        <Section>
          <h2 className="font-medium">Experiences</h2>
          <ul className="flex flex-col gap-4">
            {EXPERIENCES.map((e) => (
              <li
                key={e.company}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <p>
                  {e.url ? (
                    <>
                      <a href={e.url}>{e.company}</a>,
                    </>
                  ) : (
                    `${e.company},`
                  )}
                  <span className="text-muted-foreground"> {e.position}</span>
                </p>
                <span className="text-muted-foreground">{e.time}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="font-medium">Projects</h2>
          <div className="flex flex-col gap-4">
            {PROJECTS.map((e) => (
              <a
                href={e.url}
                key={e.name}
                className="flex flex-col items-start p-3 -mx-3 outline-none rounded-lg relative"
                onMouseEnter={() => setActive(e.name)}
                onMouseLeave={() => setActive(e.name)}
                onFocus={() => setActive(e.name)}
                tabIndex={0}
              >
                {active === e.name && (
                  <motion.div
                    layoutId="active"
                    transition={{
                      type: "spring",
                      bounce: 0,
                      duration: 0.4,
                    }}
                    className="w-full bg-accent absolute inset-0 rounded-lg"
                  />
                )}
                <div className="z-10 flex flex-col">
                  <span>{e.name}</span>
                  <span className="text-muted-foreground">{e.description}</span>
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="font-medium z-10">User Interfaces</h2>
          <div className="flex flex-col gap-4">
            {UIS.map((e) => (
              <a
                href={e.url}
                key={e.name}
                className="flex flex-col items-start p-3 -mx-3 outline-none rounded-lg relative"
                onMouseEnter={() => setActive(e.name)}
                onMouseLeave={() => setActive(e.name)}
                onFocus={() => setActive(e.name)}
                tabIndex={0}
              >
                {active === e.name && (
                  <motion.div
                    layoutId="active"
                    transition={{
                      type: "spring",
                      bounce: 0,
                      duration: 0.4,
                    }}
                    className="w-full bg-accent absolute inset-0 rounded-lg"
                  />
                )}
                <div className="z-10 flex flex-col">
                  <span>{e.name}</span>
                  <span className="text-muted-foreground">{e.description}</span>
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="font-medium">More</h2>
          <div className="flex gap-4 text-muted-foreground">
            <a
              href="mailto:kevin.anantha@gmail.com"
              target="_blank"
              className="flex place-items-center gap-1"
            >
              <span>Email</span>{" "}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
            <a
              href="https://cv.1kev.in"
              target="_blank"
              className="flex place-items-center gap-1"
            >
              <span>CV</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/kevanantha"
              target="_blank"
              className="flex place-items-center gap-1"
            >
              <span>Twitter</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/kevanantha"
              target="_blank"
              className="flex place-items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
        </Section>
      </div>

      {/* <div className="block w-full py-2 text-muted-foreground relative bottom-1 border-t">
        <span>
          Design inspired by <a href="https://emilkowal.ski">Emil</a>
        </span>
      </div> */}
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-5">{children}</div>;
}

function SoundWave({ position = "end" }: { position?: "center" | "end" }) {
  return (
    <div
      className={`flex ${
        position === "center" ? "items-center" : "items-end sm:self-end"
      } gap-1.5 h-[41px] !mt-0`}
    >
      <motion.div
        initial={{ height: "10px" }}
        animate={{ height: "25px" }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "5px" }}
        animate={{ height: "25px" }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "20px" }}
        animate={{ height: "40px" }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "2px" }}
        animate={{ height: "41px" }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "10px" }}
        animate={{ height: "30px" }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "20px" }}
        animate={{ height: "40px" }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "10px" }}
        animate={{ height: "41px" }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ height: "10px" }}
        animate={{ height: "25px" }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-1.5 bg-accent-foreground/10 rounded-full"
      ></motion.div>
    </div>
  );
}
