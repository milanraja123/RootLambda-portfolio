"use client";

import { motion } from "motion/react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Link from "next/link";

const stats = [
  { value: "7", label: "Days to MVP delivery" },
  { value: "3x", label: "Faster than traditional agencies" },
  { value: "₹0", label: "Hidden costs. Ever." },
];

const beliefs = [
  {
    icon: "🌱",
    title: "AI as Foundation",
    description:
      "Not sprinkled on top. Built in from day one. Every product we make thinks, learns, and automates from the moment it ships.",
  },
  {
    icon: "⚡",
    title: "Speed is Respect",
    description:
      "Your time is your most valuable asset. We deliver in days — not weeks, not months. Fast because we respect what you're building.",
  },
  {
    icon: "🎯",
    title: "Results Over Vanity",
    description:
      "Beautiful products that don't move a number are just expensive art. Everything we build is designed to grow leads, sales, or time saved.",
  },
  {
    icon: "🔓",
    title: "Full Transparency",
    description:
      "Fixed prices. Clear timelines. No hidden costs. No vague proposals. You know exactly what you're getting before you pay a single rupee.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-end py-24 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute -left-32 -top-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tag>Our Story</Tag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium mt-6 leading-[0.95]"
          >
            Built different.
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)" }}>
              On purpose.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-white/50 mt-6 max-w-xl leading-relaxed"
          >
            We are RootLambda — an AI-native studio from Delhi NCR. Not a
            traditional agency. Something built for what business actually needs
            right now.
          </motion.p>
        </div>
      </section>

      {/* Border */}
      <div className="border-t border-white/5" />

      {/* Who We Are Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Tag>Who We Are</Tag>
              <h2 className="text-4xl md:text-5xl font-medium mt-6 leading-tight">
                An AI studio that builds things that{" "}
                <span className="text-lime-400">actually work.</span>
              </h2>
              <p className="text-white/50 mt-6 leading-relaxed">
                RootLambda Technologies is a digital studio where AI is not an
                add-on — it is the engine. We build websites, apps, content
                systems, and automation tools for startups and businesses who
                want to move fast and grow smart.
              </p>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-[1px] bg-white/5"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-neutral-950 p-7 hover:bg-neutral-900/50 transition-colors duration-300 group"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Border */}
      <div className="border-t border-white/5" />

      {/* Story Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tag>Our Story</Tag>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-6 leading-tight max-w-4xl">
              We watched businesses around us{" "}
              <span className="text-white/40">pay lakhs for slow agencies</span>{" "}
              and get <span className="text-lime-400">mediocre results.</span>{" "}
              We knew there was a better way.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <p className="text-white/50 leading-relaxed">
                RootLambda was born from a simple frustration. Businesses —
                restaurants, clinics, startups, retailers — struggling with bad
                websites, no automation, and content that never got made.
                Agencies charging lakhs to solve problems that{" "}
                <strong className="text-white">
                  AI could handle in hours.
                </strong>
              </p>
              <p className="text-white/50 leading-relaxed">
                We came from software development backgrounds and understood AI
                from the inside. So we built a studio where{" "}
                <strong className="text-white">
                  intelligence is the foundation
                </strong>{" "}
                — not a feature. Today we work with clients across India and
                globally, delivering in days, not months.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Border */}
      <div className="border-t border-white/5" />

      {/* Beliefs Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tag>What We Stand For</Tag>
            <h2 className="text-4xl md:text-5xl font-medium mt-6">
              We believe in
              <br />
              <span className="text-lime-400">four things.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-[1px] bg-white/5 mt-12">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-neutral-950 p-8 overflow-hidden group hover:bg-neutral-900/30 transition-colors duration-300"
              >
                {/* Top Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-lime-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <span className="text-3xl">{belief.icon}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2 group-hover:text-lime-400 transition-colors duration-300">
                  {belief.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Border */}
      <div className="border-t border-white/5" />

      {/* Lambda Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[200px_1fr] gap-16 items-center"
          >
            {/* Lambda Symbol */}
            <div className="text-center lg:text-left">
              <span className="text-[140px] md:text-[180px] font-bold leading-none bg-gradient-to-br from-purple-500 to-lime-400 bg-clip-text text-transparent opacity-80">
                λ
              </span>
            </div>

            {/* Content */}
            <div>
              <Tag>Why RootLambda</Tag>
              <h3 className="text-3xl md:text-4xl font-medium mt-4 mb-4">
                The name means <span className="text-lime-400">something.</span>
              </h3>
              <p className="text-white/50 leading-relaxed max-w-xl">
                In mathematics,{" "}
                <strong className="text-white">lambda (λ)</strong> is a function
                — the transformation of input into output.{" "}
                <strong className="text-white">Root</strong> is the foundation.
                The origin. The source.
                <br />
                <br />
                RootLambda means this: start with a strong foundation, apply
                intelligence, and transform your business into something that
                actually grows. That is exactly what we do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Border */}
      <div className="border-t border-white/5" />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
              Ready to build
              <br />
              something <span className="text-lime-400">real?</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
              Free 30-min discovery call. No pitch deck. Just an honest
              conversation about what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <Link
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="px-8 h-14 text-lg">
                  💬 WhatsApp Us
                </Button>
              </Link> */}
              <Link href="/contact">
                <Button variant="primary" className="px-8 h-14 text-lg">
                  ⚡ Book Free Call →
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
