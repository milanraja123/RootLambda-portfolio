"use client";

import Link from "next/link";
import { motion } from "motion/react";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const connectLinks = [
  { href: "https://wa.me/919999999999", label: "WhatsApp", icon: "💬" },
  { href: "mailto:hello@rootlambda.in", label: "Email", icon: "✉️" },
  { href: "#", label: "LinkedIn", icon: "💼" },
  { href: "#", label: "Instagram", icon: "📸" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden w-full">
      {/* Background Glow Effects */}
      <div className="absolute -left-40 top-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] bg-lime-400/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Gradient Border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />

      <div className="w-full px-8 md:px-16 lg:px-24 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-lime-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                λ
              </span>
              <span className="text-2xl font-semibold group-hover:text-lime-400 transition-colors">
                RootLambda
              </span>
            </Link>
            <div className="mt-6 inline-block">
              <p className="text-sm font-medium tracking-widest bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent">
                AI IS THE ROOT. GROWTH IS THE FUNCTION.
              </p>
            </div>
            <p className="text-white/50 mt-4 leading-relaxed max-w-md">
              India&apos;s AI-native digital studio. We build, write, market,
              and create — all powered by intelligence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {connectLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-lime-400/20 hover:border-lime-400/50 hover:scale-110 transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              Pages
            </h4>
            <ul className="space-y-4">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-lime-400 hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@rootlambda.in"
                  className="text-white/50 hover:text-lime-400 transition-colors"
                >
                  hello@rootlambda.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-lime-400 transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="text-white/50">Delhi NCR, India</li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-lime-400/30 transition-colors duration-300">
              <h4 className="text-white font-semibold mb-2">
                Ready to build?
              </h4>
              <p className="text-white/50 text-sm mb-4">
                Let&apos;s turn your idea into reality in 7 days.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-lime-400 rounded-full text-neutral-950 font-semibold text-sm hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] transition-shadow duration-300"
              >
                Start Now
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} RootLambda Technologies. Built with 🤖 + ☕
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-white/30 hover:text-lime-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/30 hover:text-lime-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
