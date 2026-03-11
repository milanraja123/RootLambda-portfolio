"use client";

import { motion } from "motion/react";
import Button from "@/components/Button";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="py-32">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative bg-neutral-900 border border-white/10 rounded-[40px] p-12 md:p-16 lg:p-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            {/* Decorative Stars */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 text-lime-400/20 text-6xl md:text-8xl">
              ✶
            </div>
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-purple-400/20 text-4xl md:text-6xl">
              ✶
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1]"
              >
                LET&apos;S BUILD
                <br />
                <span className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                  SOMETHING REAL.
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/50 mt-8 md:mt-10 leading-relaxed"
              >
                You have the idea. We have the speed. Book a free 30-min call
                and let&apos;s turn it into a live product, content machine, and
                video brand — in 7 days.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 md:mt-12"
              >
                <Link
                  href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20build%20with%20Synthara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#25D366]/20"
                  >
                    <span className="text-2xl">💬</span>
                    WhatsApp Us Now
                  </motion.button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    className="w-full sm:w-auto px-8 text-lg h-14"
                  >
                    📧 Email Us →
                  </Button>
                </Link>
              </motion.div>

              {/* Response Time Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 md:mt-16"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                  <span className="size-2 bg-lime-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white/40 tracking-wide">
                    Response within 2 hours · Mon–Sat · India timezone
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
