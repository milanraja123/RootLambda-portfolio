"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Tag from "@/components/Tag";

const tabs = [
  {
    id: "content",
    icon: "✍️",
    label: "Content",
    prompt: '"Write a LinkedIn post for our AI startup launch"',
    output: `We didn't build another AI tool.

We built a studio where AI isn't a feature — it's the foundation.

Today, RootLambda goes live.

Here's what we do differently:
→ MVPs shipped in 7 days, not 7 months
→ AI content that sounds like YOU, not a robot
→ Videos created without a single camera
→ Automation that saves 20+ hours/week

No bloated teams. No endless revisions. No "we'll get back to you."

Just fast, focused, AI-powered execution.

If you're a founder who moves fast — let's talk.

#AI #Startup #LaunchDay #RootLambda`,
  },
  {
    id: "video",
    icon: "🎬",
    label: "Video Script",
    prompt: '"30-sec Reel script for a D2C skincare brand"',
    output: `[HOOK    0–3s]   "Your skincare routine is lying to you."
[VISUAL       ]   Slow-mo serum drops. Bold text overlay.
[PROBLEM 3–12s]   "80% of products = water + marketing."
[SOLUTION 12–22s] "Ours? Just the actives your skin needs."
[CTA    22–30s]   "Link in bio. First order ships free."`,
  },
  {
    id: "mvp",
    icon: "🚀",
    label: "MVP Scope",
    prompt: '"MVP scope for a food delivery startup"',
    output: `✅  Phone OTP authentication
✅  Restaurant listing + search + menu
✅  Cart + Razorpay checkout
✅  Live order tracking (Google Maps)
✅  Push notifications + Admin dashboard

⚡  Stack: Next.js · Supabase · React Native
📅  Delivery: 7 days · Fixed price, no surprises`,
  },
  {
    id: "ad",
    icon: "📣",
    label: "Ad Copy",
    prompt: '"Google Ads copy for a SaaS accounting tool"',
    output: `Headline 1: Accounting That Runs Itself
Headline 2: GST, Invoices, Reports — Done
Headline 3: Trusted by 500+ Indian SMBs

Description 1:
Ditch the spreadsheets. Our AI auto-categorizes
expenses, files GST, and sends payment reminders.

Description 2:
Start free. No credit card. See why founders
call it "the last accounting tool you'll need."

CTA: Start Free Trial →`,
  },
];

export default function AiInAction() {
  const [activeTab, setActiveTab] = useState("content");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);

    const text = activeContent?.output || "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activeTab, activeContent?.output]);

  return (
    <section className="py-24" id="demo">
      <div className="w-full px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Tag>AI In Action</Tag>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6">
            Don&apos;t take our word.
            <br />
            <span className="text-lime-400">Watch it work.</span>
          </h2>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Terminal Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-white/10">
            {/* Dots */}
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* Title */}
            <div className="text-xs text-white/40 font-mono tracking-wider hidden sm:block">
              ROOTLAMBDA AI ENGINE · LIVE DEMO
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
              </span>
              <span className="text-xs text-lime-400 font-medium">LIVE</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-2 bg-neutral-950/50 border-b border-white/5 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-lime-400/20 text-lime-400 border border-lime-400/30"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-6 min-h-[350px] font-mono text-sm">
            {/* Prompt */}
            <div className="flex gap-2 mb-6">
              <span className="text-purple-400">λ &gt;</span>
              <span className="text-white/70">{activeContent?.prompt}</span>
            </div>

            {/* Output */}
            <div className="text-lime-400/90 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-lime-400 ml-1 animate-pulse" />
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="px-6 py-3 bg-neutral-950/50 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/30">Powered by Claude + GPT-4</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
              <span>Response time: ~1.2s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
