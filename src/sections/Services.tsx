"use client";

import { motion } from "motion/react";
import Tag from "@/components/Tag";

const services = [
  {
    num: "01 — CORE",
    icon: "🚀",
    name: "MVP DEVELOPMENT",
    desc: "Your idea, live in 7 days. We build web apps, SaaS dashboards, marketplaces, and tools — fully functional, deployed, and demo-ready for investors.",
    tags: ["Next.js", "Supabase", "Vercel", "Full-Stack"],
  },
  {
    num: "02 — MOBILE",
    icon: "📱",
    name: "MOBILE APPS",
    desc: "iOS + Android from a single codebase. React Native apps with beautiful UX, backend API integration, and App Store ready in weeks, not months.",
    tags: ["React Native", "Expo", "Firebase", "Push Notifications"],
  },
  {
    num: "03 — AI",
    icon: "🤖",
    name: "AI INTEGRATION",
    desc: "AI chatbots, smart search, recommendation engines, content generators, and automation — baked directly into your product from day one.",
    tags: ["OpenAI API", "Claude API", "LangChain", "n8n Automation"],
  },
  {
    num: "04 — GROWTH",
    icon: "📈",
    name: "RETAINER & GROWTH",
    desc: "Post-launch we don't disappear. Monthly retainers for feature development, performance, bug fixes, and scaling as your users grow. Your tech co-founder, on demand.",
    tags: ["Monthly Plans", "Feature Dev", "Analytics", "Performance"],
  },
  {
    num: "05 — CONTENT",
    icon: "✍️",
    name: "AI CONTENT WRITING",
    desc: "Your brand voice, on autopilot. We build an AI content engine trained on your brand — blogs, LinkedIn posts, email campaigns, product descriptions, social captions.",
    tags: ["Brand Voice AI", "SEO Blogs", "Social Copy", "Email Campaigns"],
  },
  {
    num: "06 — VIDEO",
    icon: "🎬",
    name: "AI VIDEO MARKETING",
    desc: "Turn your ideas into scroll-stopping brand videos — without a production team. AI writes the script, generates visuals, adds voiceover, and edits.",
    tags: ["AI Script Writing", "Runway / HeyGen", "Brand Reels", "YouTube Shorts"],
  },
];

export default function Services() {
  return (
    <section className="py-24" id="services">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Tag>What We Build</Tag>
          <h2 className="text-5xl md:text-6xl font-medium mt-6">
            OUR <span className="text-lime-400">SERVICES</span>
          </h2>
          <p className="text-xl text-white/50 mt-6 max-w-3xl mx-auto">
            Everything a funded or bootstrapped startup needs to launch, grow,
            and dominate — product, content, and video. All powered by AI.
            Without the 6-month wait.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-neutral-900 border border-white/10 rounded-3xl p-6 hover:border-lime-400/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Number Label */}
                <p className="text-xs text-white/30 font-medium tracking-wider mb-4">
                  {service.num}
                </p>

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/70 group-hover:border-lime-400/30 group-hover:text-lime-400/70 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
