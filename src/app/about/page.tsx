"use client";

import { motion } from "motion/react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Link from "next/link";

const whyUsCards = [
  {
    type: "stat",
    stat: "7",
    title: "Days to MVP",
    description:
      "Traditional agencies take 3–6 months. We deliver a working product in 7 days. That's not a typo. AI tools + developer experience = unfair speed advantage.",
    gradient: "from-lime-500",
  },
  {
    type: "icon",
    icon: "🤝",
    title: "We're Founder-First",
    description:
      "We understand startup pressure — runway, investor deadlines, user validation cycles. We build what you need, not what bloats the invoice. Skin in the game.",
    gradient: "from-purple-500",
  },
  {
    type: "icon",
    icon: "🔒",
    title: "You Own Everything",
    description:
      "Full source code handoff. No vendor lock-in. No proprietary platforms that trap you. Your product is yours on day one — GitHub, your domain, your servers.",
    gradient: "from-blue-500",
  },
  {
    type: "stat",
    stat: "₹0",
    title: "Hidden Charges",
    description:
      "Fixed price, fixed scope, fixed deadline. We scope clearly before we start and don't send surprise invoices. What we quote is what you pay. Period.",
    gradient: "from-pink-500",
  },
];

const values = [
  {
    icon: "⚡",
    title: "Speed Over Perfection",
    description: "Ship fast, iterate faster. Done is better than perfect.",
  },
  {
    icon: "🎯",
    title: "Outcome-Focused",
    description: "We care about your success, not billable hours.",
  },
  {
    icon: "🤖",
    title: "AI-Native",
    description: "We use AI to build faster than humanly possible.",
  },
  {
    icon: "💬",
    title: "Radical Transparency",
    description: "Daily updates. No black boxes. You see everything.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <Tag>Why Synthara</Tag>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mt-6 leading-tight">
              Not an agency.
              <br />
              <span className="text-lime-400">Your tech co-founder.</span>
            </h1>
            <p className="text-xl text-white/50 mt-8 max-w-3xl mx-auto leading-relaxed">
              We&apos;re not a bloated agency. We&apos;re an AI-native studio that moves
              at startup speed — building products, writing content, and
              creating videos faster than anyone else.
            </p>
          </motion.div>

          {/* Why Us Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {whyUsCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Stat or Icon */}
                    {card.type === "stat" ? (
                      <div
                        className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${card.gradient} to-white bg-clip-text text-transparent mb-4`}
                      >
                        {card.stat}
                      </div>
                    ) : (
                      <div className="text-5xl mb-4">{card.icon}</div>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-neutral-900/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Tag>Our Values</Tag>
            <h2 className="text-4xl md:text-5xl font-medium mt-6">
              How we <span className="text-lime-400">operate</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="size-16 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl">
                🚀
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Our Story</h3>
                <p className="text-white/50">How it all started</p>
              </div>
            </div>

            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                We started Synthara after watching too many founders get burned
                by traditional agencies — 6-month timelines, scope creep,
                surprise invoices, and products that never shipped.
              </p>
              <p>
                We knew there had to be a better way. With AI-accelerated
                development, a lean team of senior developers, and a
                founder-first mindset, we built a studio that delivers in days,
                not months.
              </p>
              <p>
                Today, we&apos;ve helped startups across India and globally launch
                their MVPs, automate their content, and build their brands —
                all at a fraction of the cost and time of traditional agencies.
              </p>
              <p className="text-lime-400 font-medium">
                The AI era is here. Let&apos;s build something real together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Ready to <span className="text-lime-400">work together?</span>
            </h2>
            <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">
              Book a free 30-minute discovery call. No pitch decks, no pressure
              — just a conversation about your idea.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" className="px-8 h-14 text-lg">
                  Book Free Call →
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" className="px-8 h-14 text-lg">
                  View Pricing
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
