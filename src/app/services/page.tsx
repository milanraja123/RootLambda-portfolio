"use client";

import { motion } from "motion/react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Link from "next/link";

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
    tags: ["React Native", "Expo", "Firebase", "Cross-Platform"],
  },
  {
    num: "03 — AUTOMATION",
    icon: "⚙️",
    name: "CUSTOM AI INTEGRATION",
    desc: "End-to-end AI integration and workflow automation. We connect AI models to your existing systems, automate repetitive tasks, and build intelligent pipelines.",
    tags: ["OpenAI", "Claude API", "n8n", "Custom Workflows"],
  },
  {
    num: "04 — VIDEO",
    icon: "🎬",
    name: "AI VIDEO CREATION",
    desc: "Turn ideas into scroll-stopping videos without a production team. AI writes scripts, generates visuals, adds voiceover, and edits — all automated.",
    tags: ["Runway", "HeyGen", "Brand Reels", "YouTube Shorts"],
  },
  {
    num: "05 — MARKETING",
    icon: "📈",
    name: "AI DIGITAL MARKETING",
    desc: "Data-driven marketing powered by AI. Automated ad campaigns, SEO optimization, social media management, and performance analytics that actually convert.",
    tags: ["SEO", "Paid Ads", "Social Media", "Analytics"],
  },
  {
    num: "06 — MCP",
    icon: "🔌",
    name: "MCP INTEGRATION",
    desc: "Model Context Protocol integration for seamless AI tool connectivity. Connect Claude and other LLMs to your databases, APIs, and business tools.",
    tags: ["Claude MCP", "Tool Use", "API Connectors", "Context"],
  },
  {
    num: "07 — RAG",
    icon: "🧠",
    name: "RAG IMPLEMENTATION",
    desc: "Retrieval-Augmented Generation systems that make AI smarter with your data. Build knowledge bases, document search, and context-aware AI responses.",
    tags: ["Vector DB", "Embeddings", "Pinecone", "Knowledge Base"],
  },
  {
    num: "08 — CHATBOTS",
    icon: "💬",
    name: "AI POWERED CHATBOTS",
    desc: "Intelligent conversational agents for customer support, sales, and internal tools. 24/7 automation that actually understands context and solves problems.",
    tags: ["GPT-4", "Claude", "WhatsApp", "Web Chat"],
  },
  {
    num: "09 — LLM",
    icon: "🤖",
    name: "LLM INTEGRATION",
    desc: "Integrate large language models into your products. From GPT-4 to Claude to open-source models — we build production-ready AI features that scale.",
    tags: ["OpenAI", "Anthropic", "LangChain", "Fine-tuning"],
  },
  {
    num: "10 — CONTENT",
    icon: "✍️",
    name: "AI CONTENT GENERATION",
    desc: "Automated content at scale. Blog posts, social media, email campaigns, product descriptions — all trained on your brand voice and published automatically.",
    tags: ["Brand Voice", "SEO Blogs", "Social Copy", "Auto-Publish"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -right-40 top-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Tag>What We Build</Tag>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mt-6 leading-tight text-text-primary">
              OUR <span className="text-brand-primary">SERVICES</span>
            </h1>
            <p className="text-xl text-text-secondary mt-6 max-w-3xl mx-auto">
              Everything a funded or bootstrapped startup needs to launch, grow,
              and dominate — product, content, and video. All powered by AI.
              Without the 6-month wait.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Border */}
      <div className="border-t border-border-default" />

      {/* Services Grid */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.5) }}
                className="group bg-white dark:bg-bg-card border border-border-default rounded-3xl p-6 hover:border-brand-primary/50 transition-all duration-500 relative overflow-hidden shadow-card"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Number Label */}
                  <p className="text-xs text-text-muted font-medium tracking-wider mb-4">
                    {service.num}
                  </p>

                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-brand-primary transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-bg-soft border border-border-default rounded-full text-text-secondary group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all duration-300"
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

      {/* Border */}
      <div className="border-t border-border-default" />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white dark:bg-bg-card border border-border-default rounded-3xl p-12 md:p-16 overflow-hidden text-center shadow-elevated"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-transparent to-brand-primary/5" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium mb-4 text-text-primary">
                Ready to <span className="text-brand-primary">build?</span>
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto mb-8">
                Book a free 30-minute discovery call. No pitch deck needed —
                just tell us what you want to build.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" className="px-8 h-14 text-lg">
                    Book Free Call →
                  </Button>
                </Link>
                {/* <Link
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" className="px-8 h-14 text-lg">
                    💬 WhatsApp Us
                  </Button>
                </Link> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
