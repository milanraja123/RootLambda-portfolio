"use client";
import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `From idea to live product — faster than your competitors finish their wireframes. We build your product, write your content, and create your brand videos — all powered by AI. Built for startups ready to move fast.`;

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const words = text.split(" ");

  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log(latest, "latest")
  );
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing RootLambda</Tag>
          </div>
          <div className="text-3xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span className="text-text-primary">Your creative process deserve better.</span>{" "}
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-text-primary/15",
                    wordIndex < currentWord && "text-text-primary"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-brand-primary block">
              That&apos;s why we built RootLambda.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
