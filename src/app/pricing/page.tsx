"use client";

import { motion } from "motion/react";
import Button from "@/components/Button";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Tag from "@/components/Tag";
import Link from "next/link";

const pricingPlans = [
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
            <Tag>Transparent Pricing</Tag>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mt-6">
              Fair pricing.
              <br />
              <span className="text-lime-400">Zero surprises.</span>
            </h1>
            <p className="text-xl text-white/50 mt-6 max-w-2xl mx-auto">
              Built for Indian startups and global founders. No agency markup.
              No hidden costs. Fixed-price delivery.
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 bg-lime-400 text-neutral-950 text-xs font-bold rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full bg-neutral-900 border rounded-3xl p-6 overflow-hidden transition-all duration-500 ${
                    plan.popular
                      ? "border-lime-400/50 hover:border-lime-400"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Plan Name */}
                    <h3 className="text-lg font-semibold text-white/70 mb-4">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-white/50 text-xl">₹</span>
                        <span className="text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                        <span className="text-white/50 text-sm">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-white/40 text-sm mb-6 min-h-[40px]">
                      {plan.tagline}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="text-lime-400 mt-0.5">✓</span>
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/contact">
                      <Button
                        variant={plan.popular ? "primary" : "secondary"}
                        className="w-full"
                      >
                        {plan.cta} →
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            {/* Custom Projects */}
            <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4">
                    Need something{" "}
                    <span className="text-lime-400">custom?</span>
                  </h3>
                  <p className="text-white/50 text-lg">
                    Complex SaaS platforms, mobile apps, AI products, or
                    enterprise solutions. We scope it, price it, and build it —
                    all within your budget and timeline.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                  <Link href="/contact">
                    <Button variant="primary">Book Free Call →</Button>
                  </Link>
                  <Link href="https://wa.me/919999999999" target="_blank">
                    <Button variant="secondary">WhatsApp Us</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🔒", text: "Fixed Price", sub: "No hidden costs" },
                { icon: "⚡", text: "Fast Delivery", sub: "7 days average" },
                { icon: "💯", text: "Full Ownership", sub: "Your code, your IP" },
                { icon: "🤝", text: "Free Support", sub: "30 days included" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-neutral-900/50 border border-white/5 rounded-2xl"
                >
                  <span className="text-3xl mb-3 block">{badge.icon}</span>
                  <p className="font-medium text-white">{badge.text}</p>
                  <p className="text-sm text-white/40">{badge.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
