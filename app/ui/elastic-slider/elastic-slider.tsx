"use client";

import { ElementRef, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { Volume1, Volume2 } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

let MAX_DECAY = 80;

function decay(value: number, max: number) {
  let entry = value / max;
  let sigmoid = 2 / (1 + Math.exp(-entry)) - 1;

  return sigmoid * max;
}

export default function ElasticSlider() {
  let [volume, setVolume] = useState(21);
  let [region, setRegion] = useState<"left" | "middle" | "right">("middle");

  let bindDrag = useDrag(({ active }) => {
    if (active) {
      animate(scale, 1.2);
    } else {
      animate(scale, 1);
    }
  });

  let clientX = useMotionValue(0);
  let ref = useRef<ElementRef<typeof Slider.Root>>(null);

  let scale = useMotionValue(1);
  let overflow = useMotionValue(0);

  useMotionValueEvent(clientX, "change", (latest) => {
    if (ref.current) {
      let { left, right } = ref.current.getBoundingClientRect();
      let newOverflow: number;

      if (latest < left) {
        setRegion("left");
        newOverflow = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newOverflow = latest - right;
      } else {
        setRegion("middle");
        newOverflow = 0;
      }

      overflow.jump(decay(newOverflow, MAX_DECAY));
    }
  });

  return (
    <div className="w-full md:px-32 px-20">
      <div className="w-full">
        <div className="flex justify-center">
          <motion.div
            style={{ scale }}
            onHoverStart={() => animate(scale, 1.2)}
            onHoverEnd={() => animate(scale, 1)}
            className="max-w-lg flex w-full items-center justify-center gap-3"
          >
            <motion.div
              style={{
                x: useTransform(() =>
                  region === "left" ? -overflow.get() / scale.get() : 0
                ),
              }}
              animate={{
                scale: region === "left" ? [1, 1.4, 1] : 1,
                transition: { duration: 0.25 },
              }}
            >
              <Volume1 size={24} />
            </motion.div>

            <Slider.Root
              {...bindDrag()}
              ref={ref}
              className="relative flex w-full grow cursor-grab touch-none select-none items-center py-4 active:cursor-grabbing"
              defaultValue={[volume]}
              onValueChange={([v]) => setVolume(v)}
              max={100}
              onPointerMove={(e) => {
                if (e.buttons > 0) {
                  clientX.set(e.clientX);
                }
              }}
              onLostPointerCapture={() => {
                animate(overflow, 0, { type: "spring", bounce: 0.5 });
              }}
            >
              <motion.div
                style={{
                  scaleX: useTransform(() => {
                    if (ref.current) {
                      let { width } = ref.current.getBoundingClientRect();

                      return (width + overflow.get()) / width;
                    }
                  }),
                  transformOrigin: region === "left" ? "right" : "left",
                  scaleY: useTransform(overflow, [0, MAX_DECAY], [1, 0.5]),
                  height: useTransform(scale, [1, 1.2], [6, 16]),
                  marginTop: useTransform(scale, [1, 1.2], [0, -5]),
                  marginBottom: useTransform(scale, [1, 1.2], [0, -5]),
                }}
                className="flex grow"
              >
                <Slider.Track className="relative isolate h-full grow overflow-hidden rounded-full bg-accent">
                  <Slider.Range className="absolute h-full bg-foreground" />
                </Slider.Track>
              </motion.div>
              <Slider.Thumb />
            </Slider.Root>

            <motion.div
              style={{
                x: useTransform(() =>
                  region === "right" ? overflow.get() / scale.get() : 0
                ),
              }}
              animate={{
                scale: region === "right" ? [1, 1.4, 1] : 1,
                transition: { duration: 0.25 },
              }}
            >
              <Volume2 size={24} />
            </motion.div>
          </motion.div>
        </div>

        <h2 className="text-center font-medium text-sm tabular-nums">
          Volume: {volume}
        </h2>
      </div>
    </div>
  );
}
