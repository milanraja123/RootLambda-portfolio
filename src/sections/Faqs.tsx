"use client";
import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { FiPlus } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "Do you really deliver in 7 days?",
    answer:
      "Yes — for scoped MVPs and websites. We use AI-accelerated development tools that let 2 focused developers move faster than a 10-person agency. Larger projects (full mobile apps, complex SaaS) take 2–4 weeks. We'll tell you exactly in the discovery call.",
  },
  {
    question: "We're a small startup with a tight budget. Can you help?",
    answer:
      "Yes. Our Starter plan at ₹25,000 is designed exactly for this. We also offer milestone-based payment for larger projects so you don't pay everything upfront. Talk to us — we'll find a way to make it work.",
  },
  {
    question: "What happens after delivery — do you disappear?",
    answer:
      "Never. Every project includes a 30-day bug-fix guarantee. After that, we offer monthly retainer plans so we keep building as you grow. We've seen too many founders get abandoned by agencies — we built Synthara to be the opposite.",
  },
  {
    question: "Do I own my code and data?",
    answer:
      "100%. You get full source code on delivery, everything on your own GitHub repo, deployed to your own servers/domain. We have zero access after handoff unless you invite us back. No lock-in. Ever.",
  },
  {
    question: "Can you work with international clients (US/UK/UAE)?",
    answer:
      "Absolutely. We work async and overlap hours when needed. Payments via Wise, Payoneer, or crypto. We've delivered projects for clients in 10+ countries — timezone is never a blocker.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>FAQ</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions we{" "}
          <span className="text-lime-400">always get asked</span>
        </h2>
        <p className="text-center text-white/50 mt-4">
          Real answers. No agency fluff.
        </p>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq?.question}
              className="bg-neutral-900 roundeed-2xl border border-white/10 p-6"
              onClick={() => setSelectedIndex(faqIndex)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{faq.question}</h3>
                <FiPlus
                  className={twMerge(
                    "text-lime-400 transition duration-500",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                  size={25}
                />
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
