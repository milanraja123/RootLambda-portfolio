"use client";

import { motion } from "motion/react";
import { Fragment } from "react";

const tickerItems = [
  { icon: "⚡", text: "React & Next.js" },
  { icon: "🤖", text: "AI Integration" },
  { icon: "✍️", text: "AI Content Writing" },
  { icon: "🎬", text: "AI Video Marketing" },
  { icon: "📱", text: "React Native Apps" },
  { icon: "🛒", text: "E-commerce" },
  { icon: "🚀", text: "Deployed in 24hrs" },
  { icon: "💬", text: "WhatsApp Bots" },
];

export default function LogoTicker() {
  return (
    <section className="py-24">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {tickerItems.map((item) => (
                  <span
                    key={item.text}
                    className="flex items-center gap-3 text-white/70 text-xl font-medium whitespace-nowrap"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                    <span className="text-lime-400 ml-12">{"///"}</span>
                  </span>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
