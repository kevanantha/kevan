"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/shared/section";
import TitleSection from "@/components/shared/title-section";
import { UIShell } from "@/components/shared/ui-shell";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";

export default function Page() {
  let [activeGame, setActiveGame] = useState<(typeof GAMES)[0] | null>(null);
  let ref = useClickAway(() => setActiveGame(null));

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setActiveGame(null);
      }

      return () => {
        window.removeEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            setActiveGame(null);
          }
        });
      };
    });
  }, []);

  return (
    <Section>
      <TitleSection>Games</TitleSection>
      <p className="text-muted-foreground">
        Reimplement what I learned from{" "}
        <Link
          href="https://animations.dev"
          className="underline decoration-solid underline-offset-4"
        >
          animations.dev
        </Link>
      </p>

      <UIShell className="h-[500px] grid place-items-center relative">
        <>
          <AnimatePresence initial={false}>
            {activeGame && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-second-accent-foreground/20 rounded-xl z-10 pointer-events-none"
                ></motion.div>

                <div className="absolute inset-0 z-10 grid place-items-center">
                  <motion.div
                    // @ts-ignore
                    ref={ref}
                    layoutId={`card-${activeGame.title}`}
                    className="bg-second-accent rounded-xl p-4 flex flex-col gap-4 w-[90%] cursor-pointer"
                  >
                    <div className="flex gap-3">
                      <motion.img
                        layoutId={`image-${activeGame.title}`}
                        src={activeGame.image}
                        alt={activeGame.title}
                        className="w-14 h-14 rounded-xl"
                      />
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <motion.h2
                            layoutId={`title-${activeGame.title}`}
                            className="font-medium"
                          >
                            {activeGame.title}
                          </motion.h2>
                          <motion.p
                            layoutId={`description-${activeGame.description}`}
                            className="text-muted-foreground"
                          >
                            {activeGame.description}
                          </motion.p>
                        </div>

                        <motion.button
                          layoutId={`button-${activeGame.title}`}
                          className="py-1 flex items-center px-3 text-[#007aff] font-semibold rounded-full bg-muted"
                        >
                          <span className="text-xs">Get</span>
                        </motion.button>
                      </div>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-muted-foreground"
                    >
                      {activeGame.longDescription}
                    </motion.p>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>

          <div className="flex flex-col">
            <AnimatePresence initial={false}>
              {GAMES.map((game, index) => (
                <motion.div
                  key={game.title}
                  layoutId={`card-${game.title}`}
                  className="flex flex-row items-center gap-4 cursor-pointer"
                  onClick={() => setActiveGame(game)}
                >
                  <motion.img
                    layoutId={`image-${game.title}`}
                    src={game.image}
                    alt={game.title}
                    className="w-14 h-14 rounded-xl"
                  />
                  <div
                    className={cn(
                      "w-fit sm:w-[350px] flex items-center justify-between py-4 flex-1",
                      index !== GAMES.length - 1
                        ? "border-b border-b-border"
                        : ""
                    )}
                  >
                    <div>
                      <motion.h2
                        layoutId={`title-${game.title}`}
                        className="font-medium"
                      >
                        {game.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`description-${game.description}`}
                        className="text-muted-foreground"
                      >
                        {game.description}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={`button-${game.title}`}
                      className="py-1 px-3 text-[#007aff] flex items-center font-semibold rounded-full bg-muted"
                    >
                      <span className="text-xs">Get</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </>
      </UIShell>
    </Section>
  );
}

let GAMES = [
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },
];
