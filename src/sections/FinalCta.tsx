"use client";

import { motion } from "motion/react";
import Button from "@/components/Button";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-lime-400/10 text-[200px] font-bold leading-none select-none">
        ✶
      </div>
      <div className="absolute bottom-10 right-10 text-purple-400/10 text-[150px] font-bold leading-none select-none">
        ✶
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
          >
            LET&apos;S BUILD
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
              SOMETHING REAL.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/50 mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            You have the idea. We have the speed. Book a free 30-min call and
            let&apos;s turn it into a live product, content machine, and video
            brand — in 7 days.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link
              href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20build%20with%20Synthara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-colors duration-300"
              >
                <span className="text-xl">💬</span>
                WhatsApp Us Now
              </motion.button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-4 h-auto">
                📧 Email Us →
              </Button>
            </Link>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <p className="text-[11px] text-white/15 tracking-[3px] font-mono uppercase">
              Response within 2 hours · Mon–Sat · India timezone
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
