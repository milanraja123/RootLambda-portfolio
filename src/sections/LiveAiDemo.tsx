"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const tabs = [
  {
    id: "content",
    label: "✍️ Content",
    prompt: '"Write a LinkedIn post for our new fintech app launch"',
    output: `We spent 18 months talking to 200+ small business owners.

One thing was clear: banking wasn't built for them.

Today, we're changing that.

Introducing [App] — the business account that actually understands your hustle.

→ Instant payments
→ Smart invoicing
→ Real-time cash flow insights
→ Zero hidden fees

Built by founders. For founders.

Link in comments 👇

#Fintech #StartupLaunch #SmallBusiness`,
  },
  {
    id: "video",
    label: "🎬 Video Script",
    prompt: '"30-sec Reels script for our D2C skincare brand"',
    output: `🎬 [HOOK — 0:00–0:03]
"Your skincare routine is lying to you."

🎯 [PROBLEM — 0:03–0:10]
"Most products = 80% water, 20% marketing."

✨ [SOLUTION — 0:10–0:22]
"We built [Brand] with zero fillers. Just actives your skin actually needs."

📲 [CTA — 0:22–0:30]
"Link in bio. First order ships free."`,
  },
  {
    id: "code",
    label: "🚀 MVP Scope",
    prompt: '"Build an MVP for a food delivery startup"',
    output: `📋 MVP SCOPE — FOOD DELIVERY APP

✅ User auth (phone OTP login)
✅ Restaurant listing + menu
✅ Cart + Razorpay checkout
✅ Order tracking (real-time)
✅ Delivery partner app
✅ Restaurant dashboard
✅ Admin panel

⚡ Stack: Next.js + React Native + Supabase
📅 Timeline: 10 days
💰 Budget: ₹95,000`,
  },
];

export default function LiveAiDemo() {
  const [activeTab, setActiveTab] = useState("content");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const currentTab = tabs.find((t) => t.id === activeTab);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);

    const text = currentTab?.output || "";
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
  }, [activeTab, currentTab?.output]);

  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal Window */}
          <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-800/50 border-b border-white/5">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-green-500/80" />
              </div>

              {/* Title */}
              <div className="text-xs text-white/40 font-mono tracking-wider">
                SYNTHARA AI · LIVE
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="size-2 rounded-full bg-lime-400"
                />
                <span className="text-xs text-lime-400 font-mono">
                  {isTyping ? "GENERATING" : "COMPLETE"}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-neutral-800/50 text-white border-b-2 border-lime-400"
                      : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Prompt */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-[10px] font-bold rounded tracking-wider">
                      PROMPT
                    </span>
                    <p className="text-white/60 text-sm font-mono">
                      {currentTab?.prompt}
                    </p>
                  </div>

                  {/* Output */}
                  <div className="bg-neutral-950 rounded-xl p-4 border border-white/5 min-h-[280px]">
                    <pre className="text-white/80 text-sm font-mono whitespace-pre-wrap leading-relaxed">
                      {displayedText}
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-lime-400 ml-1 align-middle"
                        />
                      )}
                    </pre>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-lime-400">✓</span>
                      <span className="text-xs text-white/40">
                        Powered by GPT-4 + Claude
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/30">
                      <span>Brand voice trained</span>
                      <span>·</span>
                      <span>SEO optimized</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white/30 text-sm mt-6"
          >
            ↑ This is a live demo of what we build for you
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
