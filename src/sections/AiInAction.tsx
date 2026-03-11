"use client";

import { motion } from "motion/react";
import Tag from "@/components/Tag";

const aiCards = [
  {
    icon: "✍️",
    title: "AI Content Writing",
    subtitle: "Your brand voice. Generated instantly.",
    input: "Write a LinkedIn post for our SaaS product launch",
    output: `We've been building in silence for 6 months.

Today, we launch.

The problem we saw: teams waste 4+ hours/week on manual reporting. We built an AI that does it in 30 seconds.

No more copy-pasting. No more missed insights.

Just clarity — automatically.

#SaaS #ProductLaunch #AI`,
    meta: "Generated in 2.3s",
    tags: ["Brand voice", "SEO optimised"],
    gradient: "from-purple-500/20 via-transparent to-transparent",
    accentColor: "purple-400",
  },
  {
    icon: "🎬",
    title: "AI Video Script",
    subtitle: "Reels, Shorts & ads — on autopilot.",
    input: "30-sec Reel for a D2C protein brand",
    output: `[HOOK 0–3s]
"You're training hard. Your protein isn't."

[PROBLEM 3–12s]
"Most proteins are 60% sugar and filler."

[SOLUTION 12–22s]
"Ours is 27g protein. Zero junk."

[CTA 22–30s]
"Link in bio. Code LAUNCH for 20% off."`,
    meta: "Script ready",
    tags: ["ElevenLabs", "Runway"],
    gradient: "from-pink-500/20 via-transparent to-transparent",
    accentColor: "pink-400",
  },
  {
    icon: "🚀",
    title: "AI-Powered Dev",
    subtitle: "From prompt to deployed product.",
    input: "Build a marketplace MVP for freelancers",
    output: `✅ Auth — phone/email login
✅ Freelancer listing + search
✅ Project posting + bidding
✅ In-app messaging
✅ Razorpay payments
✅ Review + rating system
✅ Admin dashboard

⚡ Next.js + Supabase + Vercel`,
    meta: "Scope defined",
    tags: ["7 days", "₹75,000"],
    gradient: "from-lime-500/20 via-transparent to-transparent",
    accentColor: "lime-400",
  },
];

export default function AiInAction() {
  return (
    <section className="py-24" id="ai-action">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Tag>AI In Action</Tag>
          <h2 className="text-5xl md:text-6xl font-medium mt-6">
            Watch AI build{" "}
            <span className="text-lime-400">your brand</span>
          </h2>
          <p className="text-xl text-white/50 mt-6 max-w-3xl mx-auto">
            This is what actually happens when you work with us — AI does the
            heavy lifting so you ship faster and grow without burning out.
          </p>
        </motion.div>

        {/* AI Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {aiCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative ${index === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Card */}
              <div className="relative bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden h-full hover:border-white/20 transition-all duration-500">
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="size-14 bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-neutral-700 transition-all duration-300">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">{card.title}</h3>
                        <p className="text-white/40 text-sm">{card.subtitle}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(163, 230, 53, 0)",
                          "0 0 0 4px rgba(163, 230, 53, 0.3)",
                          "0 0 0 0 rgba(163, 230, 53, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-3 py-1.5 bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold rounded-full tracking-wider"
                    >
                      LIVE
                    </motion.div>
                  </div>
                </div>

                {/* Terminal - Horizontal for first card, vertical for others */}
                <div className={`relative px-6 pb-6 ${index === 0 ? "md:grid md:grid-cols-2 md:gap-6" : ""}`}>
                  {/* Input */}
                  <div className={index === 0 ? "" : "mb-4"}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="size-2 rounded-full bg-lime-400" />
                      <span className="text-[10px] text-lime-400 font-bold tracking-widest">
                        INPUT
                      </span>
                    </div>
                    <div className="bg-neutral-950 rounded-xl p-4 border border-white/5 h-full">
                      <p className="text-white/70 text-sm font-mono">
                        &quot;{card.input}&quot;
                      </p>
                    </div>
                  </div>

                  {/* Output */}
                  <div className={index === 0 ? "" : "mt-4"}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="size-2 rounded-full bg-purple-400" />
                      <span className="text-[10px] text-purple-400 font-bold tracking-widest">
                        OUTPUT
                      </span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className={`bg-neutral-950 rounded-xl p-4 border border-white/5 ${index === 0 ? "min-h-[200px]" : "min-h-[180px]"}`}
                    >
                      <p className="text-white/80 text-sm font-mono whitespace-pre-line leading-relaxed">
                        {card.output}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Meta Footer */}
                <div className="relative px-6 pb-6">
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400 text-base">✓</span>
                      <span className="text-lime-400 text-sm font-medium">
                        {card.meta}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-transparent to-purple-400/5" />

            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 text-lime-400/20 text-6xl">
              &#10038;
            </div>
            <div className="absolute bottom-6 left-6 text-purple-400/20 text-4xl">
              &#10038;
            </div>

            <div className="relative text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
                The AI era isn&apos;t <em className="text-lime-400 not-italic">coming.</em>
                <br />
                <span className="text-white/60">It&apos;s already here.</span>
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Every brand that doesn&apos;t use AI to build, write, and market
                is falling behind. We wire your entire brand with AI so it
                grows while you sleep.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
