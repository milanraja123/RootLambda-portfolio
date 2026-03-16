"use client";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";
import cursorYou from "../assets/images/cursor-you.svg";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 200 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [200, 220, 200] },
        { duration: 0.5 },
      ],
    ]);
  }, []);

  return (
    <section className="py-24" style={{ cursor: `url(${cursorYou.src}),auto` }}>
      <div className="container relative">
        {/* <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 1, x: -100, y: 100 }}
          drag
          className="absolute -left-100 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="Design example 1 image"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute left-0 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -right-100 top-40 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="Design example 1 image"
            draggable={false}
          />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 500 }}
          className="absolute right-40 -top-4 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div> */}
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-lime-400 rounded-full text-neutral-950 font-semibold">
            🚀 AI-Native Digital Studio
          </div>
        </div>
        <div className="flex flex-col items-center mt-6">
          {/* Mobile Version - Static Text */}
          <h1 className="md:hidden text-4xl sm:text-5xl font-medium text-center leading-tight">
            <span className="text-white">BUILD SMARTER.</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent">
              GROW FASTER.
            </span>
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
            >
              THINK AI.
            </span>
          </h1>

          {/* Desktop Version - Typewriter Effect */}
          <div className="hidden md:block">
            <TypewriterEffectSmooth
              words={[
                { text: "BUILD", className: "text-white" },
                { text: "SMARTER.", className: "text-white" },
                { text: "GROW", className: "bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent" },
                { text: "FASTER.", className: "bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent" },
              ]}
              className="text-6xl lg:text-7xl font-medium"
              cursorClassName="bg-lime-400"
            />
            <h1 className="text-6xl lg:text-7xl font-medium text-center leading-tight">
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
              >
                THINK AI.
              </span>
            </h1>
          </div>
        </div>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          RootLambda wires AI into everything — your website, your app, your
          content, your videos, your marketing. We don&apos;t just build. We
          build systems that grow while you sleep.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent w-full px-4 md:flex-1"
          />
          <Button
            variant="primary"
            type="submit"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
