"use client";

import Balancer from "react-wrap-balancer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";

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

export default function Home() {
  let [active, setActive] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen max-w-2xl mx-auto flex-col items-center mt-12 px-6">
      <div className="flex flex-col gap-16 sm:gap-32 mb-20">
        <div>
          <h1 className="font-medium">Kevin Anantha</h1>
          <p className="text-muted-foreground font-medium leading-none">
            Frontend Engineer
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-medium">Now</h2>
          <p className="text-muted-foreground">
            <Balancer>
              I am a frontend engineer at eFishery to help sales team to improve
              their productivity. Currently, I delve and explore into user
              interface design while carefully considering the visual appeal,
              functionality, and user experience.
            </Balancer>
          </p>
        </div>

        <div className="flex flex-col gap-5">
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
        </div>

        <div className="flex flex-col gap-5">
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
        </div>

        <div className="flex flex-col gap-5">
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
        </div>

        <div className="flex flex-col gap-5">
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
        </div>
      </div>
      <div className="block w-full py-2 text-muted-foreground relative bottom-1 border-t">
        <span>
          Design inspired by <a href="https://emilkowal.ski">Emil</a>
        </span>
      </div>
    </main>
  );
}
