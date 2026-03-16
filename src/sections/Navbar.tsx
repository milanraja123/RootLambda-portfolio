"use client";
import Link from "next/link";

import { IoMenu } from "react-icons/io5";
import Button from "@/components/Button";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl mx-auto">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 items-center px-4">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-purple-500 to-lime-400 bg-clip-text text-transparent">
                  λ
                </span>
                <span className="text-lg md:text-xl font-semibold group-hover:text-lime-400 transition-colors">
                  RootLambda
                </span>
              </Link>
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <Link href={link.href} key={link.label} className="hover:text-lime-400 transition-colors duration-300">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4 lg:hidden">
                <IoMenu
                  color={"#fff"}
                  className="cursor-pointer hover:text-lime-400 transition-colors"
                  size={24}
                  onClick={() => setIsOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu - Slide from Right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[300px] z-[101] lg:hidden"
              style={{ backgroundColor: "#0a0a0a" }}
            >
              {/* Gradient Border Left */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 via-lime-400 to-purple-500" />

              {/* Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <span className="text-lg font-semibold text-white/70">Menu</span>
                <RxCross1
                  color={"#fff"}
                  className="cursor-pointer hover:text-lime-400 transition-colors"
                  size={24}
                  onClick={() => setIsOpen(false)}
                />
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col p-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 py-4 text-lg font-medium text-white border-b border-white/10 hover:text-lime-400 hover:pl-2 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lime-400/50">→</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-neutral-900/50">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full h-12 text-base">
                    Book Free Call →
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-xl font-bold bg-gradient-to-br from-purple-500 to-lime-400 bg-clip-text text-transparent">
                    λ
                  </span>
                  <span className="text-white/40 text-sm">RootLambda</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="pb-[86px] md:pb-[98px] lg:pb-[106px]"></div>
    </>
  );
}
