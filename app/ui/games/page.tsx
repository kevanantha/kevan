"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Section } from "@/components/shared/section";
import TitleSection from "@/components/shared/title-section";
import { UIShell } from "@/components/shared/ui-shell";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";
import Image from "next/image";

import viking from "@/public/viking.webp";
import vikingLogo from "@/public/viking-logo.webp";

export default function GamePage() {
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
    <>
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

      <Section>
        <TitleSection>Game of the day</TitleSection>
        <UIShell className="relative h-[760px] grid place-items-center">
          <Game />
        </UIShell>
      </Section>
    </>
  );
}

function Card({
  card,
  setActiveCard,
}: {
  card: (typeof CARDS)[0];
  setActiveCard: (value: (typeof CARDS)[0] | null) => void;
}) {
  let ref = useClickAway(() => setActiveCard(null));

  return (
    <motion.div
      // @ts-ignore
      ref={ref}
      layoutId={`card-${card.title}`}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        bounce: 0.175,
        duration: 0.6,
      }}
      className="h-[370px] w-[320px] overflow-hidden relative cursor-pointer select-none outline-none my-auto mx-0"
      style={{ borderRadius: "20px" }}
      onClick={() => setActiveCard(card)}
    >
      <motion.img
        layoutId={`image-${card.title}`}
        className="absolute inset-0 w-full h-full"
        style={{ borderRadius: "20px" }}
        src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp"
        alt="Clash of Clans game"
      />
      <motion.button
        layoutId={`close-button-${card.title}`}
        style={{
          backdropFilter: "blur(4px)",
          opacity: 0,
        }}
        className="bg-black/20 text-white rounded-full p-2 absolute top-4 right-4 z-10 h-8 w-8 flex items-center justify-center"
        aria-label="Close button"
        aria-hidden
        tabIndex={-1}
        onClick={() => setActiveCard(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          height="20"
          width="20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </motion.button>

      <motion.div
        layoutId={`card-content-${card.title}`}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="px-4 py-3">
          <motion.h2
            layoutId={`title-${card.title}`}
            className="uppercase max-w-[170px] font-extrabold text-4xl text-white mb-4"
            style={{ color: "white" }}
          >
            Game of the day
          </motion.h2>
        </div>

        <motion.div
          layoutId={`extra-info-${card.title}`}
          style={{ backdropFilter: "blur(2px)" }}
          className="relative gap-2 items-center flex py-3 px-4 w-full rounded-b-[20px] bg-black/20"
        >
          <motion.img
            src={card.logo}
            alt="Viking Logo"
            width={40}
            height={40}
            className="rounded-lg"
            layoutId={`logo-${card.title}`}
          />
          <div className="flex flex-col items-start">
            <motion.p
              layoutId={`extra-title-${card.title}`}
              className="text-white text-xs font-medium"
            >
              Vikings
            </motion.p>
            <motion.p
              layoutId={`extra-desc-${card.title}`}
              className="text-[#c4c5cd] text-xs font-medium"
            >
              Game about Vikings!
            </motion.p>
          </div>
          <motion.button
            layoutId={`button-${card.title}`}
            className="py-1 px-4 text-white rounded-full ml-auto bg-white/20 font-semibold text-sm"
          >
            Get
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        layoutId="card-long-description"
        className="p-4 absolute top-full opacity-0 flex-1"
      >
        <p className="text-muted-foreground leading-relaxed">
          <b className="text-primary">Are you ready?</b> A game about vikings,
          where you can play as a viking and fight other vikings. You can also
          build your own viking village and explore the world.
        </p>
        <br />
        <p className="text-muted-foreground leading-relaxed">
          <b className="text-primary">The never ending adventure </b>
          In this game set in a fairy tale world, players embark on a quest
          through mystical lands filled with enchanting forests and towering
          mountains. Players can explore the world, build their own viking
        </p>
      </motion.div>
    </motion.div>
  );
}

function ActiveCard({
  activeCard,
  setActiveCard,
}: {
  activeCard: (typeof CARDS)[0];
  setActiveCard: (value: (typeof CARDS)[0] | null) => void;
}) {
  let ref = useClickAway(() => setActiveCard(null));

  return (
    <>
      <motion.div
        // @ts-ignore
        ref={ref}
        layoutId={`card-${activeCard.title}`}
        className="absolute overflow-hidden top-0 w-[360px] h-full flex bg-white flex-col"
        style={{ borderRadius: 0 }}
      >
        <motion.div layout className="relative w-[360px] h-full">
          <motion.img
            layoutId={`image-${activeCard.title}`}
            className="w-full h-full object-cover pointer-events-none"
            style={{ borderRadius: 0 }}
            src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp"
            alt="Clash of Clans game"
          />
          <motion.button
            layoutId={`close-button-${activeCard.title}`}
            style={{
              backdropFilter: "blur(4px)",
              opacity: 1,
            }}
            className="bg-black/20 text-white rounded-full p-2 absolute top-2 right-2 z-10"
            aria-label="Close button"
            aria-hidden
            tabIndex={0}
            onClick={() => setActiveCard(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              height="20"
              width="20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
          <motion.div
            layoutId={`card-content-${activeCard.title}`}
            className="absolute bottom-0 left-0 right-0"
          >
            <div className="px-4 py-3">
              <motion.h2
                layoutId={`title-${activeCard.title}`}
                className="uppercase max-w-[170px] font-extrabold text-4xl text-white mb-4"
                style={{ color: "white" }}
              >
                Game of the day
              </motion.h2>
            </div>
            <motion.div
              layoutId={`extra-info-${activeCard.title}`}
              style={{ backdropFilter: "blur(2px)" }}
              className="relative gap-2 items-center flex py-3 px-4 w-full rounded-b-[20px] bg-black/20"
            >
              <motion.img
                layoutId={`logo-${activeCard.title}`}
                src={activeCard.logo}
                alt="Viking Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <motion.p
                  layoutId={`extra-title-${activeCard.title}`}
                  className="text-white text-xs font-medium"
                >
                  Vikings
                </motion.p>
                <motion.p
                  layoutId={`extra-desc-${activeCard.title}`}
                  className="text-[#c4c5cd] text-xs font-medium"
                >
                  Game about Vikings!
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${activeCard.title}`}
                className="py-1 px-4 text-white rounded-full ml-auto bg-white/20 font-semibold text-sm"
              >
                Get
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          layoutId={`card-long-description-${activeCard.title}`}
          layout
          className="bg-white py-4 px-4 flex-1"
          initial={{ filter: "blur(4px)", y: 0 }}
          animate={{ filter: "blur(0px)", y: 0 }}
          exit={{ filter: "blur(4px)", y: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">
            <b className="text-primary">Are you ready?</b> A game about vikings,
            where you can play as a viking and fight other vikings. You can also
            build your own viking village and explore the world.
          </p>
          <br />
          <p className="text-muted-foreground">
            <b className="text-primary">The never ending adventure </b>
            In this game set in a fairy tale world, players embark on a quest
            through mystical lands filled with enchanting forests and towering
            mountains. Players can explore the world, build their own viking
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

function Game() {
  let [activeCard, setActiveCard] = useState<(typeof CARDS)[0] | null>(null);

  return (
    <>
      {CARDS.map((card) => (
        <Card key={card.title} card={card} setActiveCard={setActiveCard} />
      ))}
      <MotionConfig
      // transition={{
      //   duration: 0.6,
      //   bounce: 0,
      //   type: "spring",
      // }}
      >
        <AnimatePresence>
          {activeCard ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-second-accent-foreground/20 rounded-xl pointer-events-none"
            ></motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {activeCard ? (
            <ActiveCard activeCard={activeCard} setActiveCard={setActiveCard} />
          ) : null}
        </AnimatePresence>
      </MotionConfig>
    </>
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

let CARDS = [
  {
    title: "Vikings",
    subtitle: "Clash of the Norse Warriors",
    description: "A game about vikings",
    longDescription:
      "A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp",
    logo: "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp",
  },
];
