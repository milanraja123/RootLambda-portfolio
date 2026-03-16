"use client";

import { motion } from "motion/react";
import Button from "@/components/Button";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Tag from "@/components/Tag";
import Link from "next/link";

/* const pricingPlans = [
  {
    name: "Starter",
    price: "25,000",
    period: "one-time",
    tagline: "Perfect for landing pages & simple tools",
    features: [
      "Marketing / Product Landing Page",
      "Mobile-responsive design",
      "AI chatbot integration",
      "WhatsApp contact form",
      "Deployed on your domain",
      "Delivered in 3 days",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-purple-500/20",
  },
  {
    name: "MVP Launchpad",
    price: "75,000",
    period: "one-time",
    tagline: "Full MVP — ready to show investors",
    features: [
      "Full-stack web app or mobile app",
      "Authentication + user dashboard",
      "Database + backend API",
      "Payment integration (Razorpay)",
      "AI features included",
      "Admin panel",
      "Delivered in 7 days",
      "30-day free bug support",
    ],
    cta: "Book Discovery Call",
    popular: true,
    gradient: "from-lime-500/20",
  },
  {
    name: "AI Content Engine",
    price: "18,000",
    period: "/month",
    tagline: "Your brand speaks — every day, automatically",
    features: [
      "AI trained on your brand voice",
      "12 blog posts / month (SEO-ready)",
      "30 social captions (LinkedIn + Instagram)",
      "4 email newsletters",
      "2 AI brand videos per month",
      "Auto-scheduled & published",
      "Monthly content strategy review",
    ],
    cta: "Talk to Us",
    popular: false,
    gradient: "from-pink-500/20",
  },
  {
    name: "Growth Retainer",
    price: "15,000",
    period: "/month",
    tagline: "Ongoing development partner",
    features: [
      "20 hours/month development",
      "New feature development",
      "Bug fixes & performance",
      "Monthly analytics review",
      "Priority WhatsApp support",
      "Dedicated Slack channel",
    ],
    cta: "Let's Talk",
    popular: false,
    gradient: "from-orange-500/20",
  },
]; */

const benefits = [
  {
    icon: "🚀",
    title: "Full AI-Powered Website",
    desc: "Complete website with AI chatbot, automation, and smart features — built and deployed for you.",
  },
  {
    icon: "💰",
    title: "Pay Only for Hosting",
    desc: "No development fees. No design charges. Just pay for your domain and hosting — that's it.",
  },
  {
    icon: "⚡",
    title: "Delivered in Days",
    desc: "Your website goes live in 3-7 days. No months of waiting. No endless revisions.",
  },
  {
    icon: "🎁",
    title: "Everything Included",
    desc: "Design, development, AI integration, deployment, and 30-day support — all free.",
  },
];

const whyFree = [
  "We believe great websites shouldn't cost lakhs",
  "AI makes development 10x faster — we pass the savings to you",
  "Your success is our portfolio — we grow when you grow",
  "We make money from hosting partnerships, not development fees",
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Tag>Revolutionary Pricing</Tag>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mt-6">
              No Pricing.
              <br />
              <span className="text-lime-400">Seriously.</span>
            </h1>
            <p className="text-xl text-white/50 mt-6 max-w-3xl mx-auto">
              Why pay lakhs for web services? Just pay for hosting and get your
              AI-powered website ready. We build it for free.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-neutral-900 border border-lime-400/30 rounded-3xl p-8 md:p-12 overflow-hidden relative">
              {/* Background Glow */}
              <div className="absolute -right-40 -top-40 w-[400px] h-[400px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -left-40 -bottom-40 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 text-center">
                {/* Price Display */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-white/20 line-through">
                      ₹50,000+
                    </span>
                    <span className="text-5xl md:text-6xl font-bold text-lime-400">
                      ₹0
                    </span>
                  </div>
                  <p className="text-white/50 mt-4 text-lg">
                    Development cost for your AI-powered website
                  </p>
                </div>

                {/* What You Pay */}
                <div className="bg-neutral-950/50 border border-white/10 rounded-2xl p-6 max-w-lg mx-auto mb-8">
                  <p className="text-white/70 mb-2">What you actually pay:</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-white">
                      Hosting Only
                    </span>
                  </div>
                  <p className="text-white/40 text-sm mt-2">
                    ~₹500-2000/month depending on your needs
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button variant="primary" className="px-8 h-14 text-lg">
                      Get Your Free Website →
                    </Button>
                  </Link>
                  {/* <Link href="https://wa.me/919999999999" target="_blank">
                    <Button variant="secondary" className="px-8 h-14 text-lg">
                      💬 Ask Us How
                    </Button>
                  </Link> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
              What you get for <span className="text-lime-400">₹0</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-neutral-900 border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300 group"
                >
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/50 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Free Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">
                Why is it <span className="text-lime-400">free?</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {whyFree.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-lime-400 mt-1">✓</span>
                    <span className="text-white/70">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Ready to get your{" "}
              <span className="text-lime-400">free website?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Book a free 30-minute call. We&apos;ll discuss your needs and show
              you exactly what we&apos;ll build — no strings attached.
            </p>
            <Link href="/contact">
              <Button variant="primary" className="px-10 h-16 text-xl">
                Book Free Call →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
