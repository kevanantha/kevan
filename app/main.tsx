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
import Image from "next/image"
import Link from "next/link";
import type { PlaybackState } from "./types";
import useMeasure from "react-use-measure";
import { Section } from "@/components/shared/section";
import TitleSection from "@/components/shared/title-section";
import { EXPERIENCES, PROJECTS, UIS, mockSpotifyData } from "@/lib/constants";

export default function Main() {
	const [playbackRef, bounds] = useMeasure();
	const [active, setActive] = useState<string | null>(null);

	const [playbackState, setPlaybackState] = useState<PlaybackState | null>(
		process.env.NODE_ENV === "development" ? mockSpotifyData : null,
	);

	useEffect(() => {
		(async () => {
			if (process.env.NODE_ENV === "production") {
				const playbackState = await getPlaybackState();
				setPlaybackState(playbackState);
			}
		})();
	}, []);

	return (
		<>
			<Section>
				<TitleSection>Now</TitleSection>
				<p className="text-muted-foreground">
					<Balancer>
						I am a frontend engineer at Mekari Sign. Currently, I delve and
						explore into user interface design while carefully considering the
						visual appeal, functionality, and user experience.
					</Balancer>
				</p>
			</Section>

			{playbackState?.item?.id && (
				<Section>
					<TitleSection>Currently Listening</TitleSection>
					<Card ref={playbackRef}>
						<CardHeader className="p-3 flex flex-row items-center gap-3">
							<div className="flex flex-row flex-1 gap-3 items-center">
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
				<TitleSection>Experiences</TitleSection>

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
				<TitleSection>Projects</TitleSection>

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
				<TitleSection className="z-10">User Interfaces</TitleSection>

				<div className="flex flex-col gap-4">
					{UIS.map((e) => (
						<a
							href={e.href}
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
				<TitleSection>More</TitleSection>

				<div className="flex gap-4 text-muted-foreground">
					<a
						href="mailto:kevin.anantha@gmail.com"
						target="_blank"
						className="flex place-items-center gap-1" rel="noreferrer"
					>
						<span>Email</span> <ArrowTopRightOnSquareIcon className="w-4 h-4" />
					</a>
					<a
						href="https://cv.1kev.in"
						target="_blank"
						className="flex place-items-center gap-1" rel="noreferrer"
					>
						<span>CV</span>
						<ArrowTopRightOnSquareIcon className="w-4 h-4" />
					</a>
					<a
						href="https://twitter.com/kevanantha"
						target="_blank"
						className="flex place-items-center gap-1" rel="noreferrer"
					>
						<span>Twitter</span>
						<ArrowTopRightOnSquareIcon className="w-4 h-4" />
					</a>
					<a
						href="https://github.com/kevanantha"
						target="_blank"
						className="flex place-items-center gap-1" rel="noreferrer"
					>
						<span>GitHub</span>
						<ArrowTopRightOnSquareIcon className="w-4 h-4" />
					</a>
				</div>
			</Section>
		</>
	);
}

function SoundWave({ position = "end" }: { position?: "center" | "end" }) {
	return (
		<div
			className={`flex ${position === "center" ? "items-center" : "items-end sm:self-end"
				} gap-1.5 h-[41px] !mt-0`}
		>
			<motion.div
				initial={{ height: "10px" }}
				animate={{ height: "30px" }}
				transition={{
					duration: 0.4,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
			<motion.div
				initial={{ height: "5px" }}
				animate={{ height: "25px" }}
				transition={{
					duration: 0.4,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
			<motion.div
				initial={{ height: "20px" }}
				animate={{ height: "40px" }}
				transition={{
					duration: 0.5,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
			<motion.div
				initial={{ height: "2px" }}
				animate={{ height: "41px" }}
				transition={{
					duration: 0.7,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
			<motion.div
				initial={{ height: "10px" }}
				animate={{ height: "30px" }}
				transition={{
					duration: 0.4,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
			<motion.div
				initial={{ height: "20px" }}
				animate={{ height: "40px" }}
				transition={{
					duration: 0.7,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
			<motion.div
				initial={{ height: "10px" }}
				animate={{ height: "41px" }}
				transition={{
					duration: 0.7,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
			<motion.div
				initial={{ height: "10px" }}
				animate={{ height: "25px" }}
				transition={{
					duration: 0.5,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="w-1.5 bg-accent-foreground/10 rounded-full"
			/>
		</div>
	);
}
