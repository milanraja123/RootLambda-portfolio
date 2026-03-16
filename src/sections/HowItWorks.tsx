"use client";

import { motion } from "motion/react";
import Tag from "@/components/Tag";

const steps = [
  {
    num: "01",
    title: "DISCOVERY CALL",
    description:
      "Free 30-minute strategy call. We understand your vision, target users, and core features. You'll leave with a clear scope and fixed price — no surprises.",
    time: "Day 0 · Free",
    icon: "💬",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    num: "02",
    title: "RAPID BUILD",
    description:
      "We build in sprints using AI-accelerated development. Daily updates via WhatsApp. You see your product growing in real-time. Feedback loop is tight.",
    time: "Days 1–7",
    icon: "⚡",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    num: "03",
    title: "LAUNCH & GROW",
    description:
      "Your product goes live with full documentation. We handle deployment, domain setup, and handoff. Post-launch support included. You're never alone.",
    time: "Day 7+ · Live",
    icon: "🚀",
    gradient: "from-orange-500 to-lime-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24" id="process">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Tag>Our Process</Tag>
          <h2 className="text-5xl md:text-6xl font-medium mt-6">
            From idea to{" "}
            <span className="text-lime-400">live in 3 steps</span>
          </h2>
          <p className="text-xl text-white/50 mt-6 max-w-2xl mx-auto">
            No bloated agencies. No months of wireframes. We move at startup
            speed — because you can&apos;t afford to wait.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-lime-500 origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Step Number - Large Background */}
                  <div className="absolute -right-4 -top-4 text-[120px] font-bold text-white/[0.03] leading-none select-none">
                    {step.num}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon + Number Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-16 bg-neutral-800 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div
                        className={`text-5xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      >
                        {step.num}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Time Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                      <span className="size-2 rounded-full bg-lime-400 animate-pulse" />
                      <span className="text-sm text-white/70 font-medium">
                        {step.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connection Node - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 -bottom-4 -translate-x-1/2 translate-y-full z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                    className={`size-4 rounded-full bg-gradient-to-r ${step.gradient} ring-4 ring-neutral-950`}
                  />
                </div>

                {/* Arrow Connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-lime-400 text-2xl"
                    >
                      ↓
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 px-8 py-6 bg-neutral-900/50 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">⏱️</span>
              <div className="text-center sm:text-left">
                <p className="text-white font-medium">Average delivery</p>
                <p className="text-lime-400 text-lg font-bold">7 days</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="w-full sm:w-auto h-px sm:h-auto bg-white/10 sm:hidden" />
            <div className="flex items-center gap-3">
              <span className="text-3xl">💰</span>
              <div className="text-center sm:text-left">
                <p className="text-white font-medium">Starting from</p>
                <p className="text-lime-400 text-lg font-bold">₹25,000</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="w-full sm:w-auto h-px sm:h-auto bg-white/10 sm:hidden" />
            <div className="flex items-center gap-3">
              <span className="text-3xl">🤝</span>
              <div className="text-center sm:text-left">
                <p className="text-white font-medium">First call</p>
                <p className="text-lime-400 text-lg font-bold">Free</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
