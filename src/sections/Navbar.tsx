"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoMenu } from "react-icons/io5";
import Button from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl mx-auto">
          <div className="border border-border-default rounded-[27px] md:rounded-full bg-white/80 dark:bg-bg-card/80 backdrop-blur-md shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 items-center px-4">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-2xl md:text-3xl font-bold text-gradient-brand">
                  λ
                </span>
                <span className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                  RootLambda
                </span>
              </Link>
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className={twMerge(
                        "relative py-1 transition-colors duration-300",
                        isActive(link.href)
                          ? "text-brand-primary"
                          : "text-text-secondary hover:text-brand-primary"
                      )}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <motion.span
                          layoutId="navbar-underline"
                          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-brand-primary rounded-full"
                        />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end items-center gap-3">
                {/* Theme Toggle - visible on all screens */}
                <ThemeToggle />
                {/* Mobile Menu Button */}
                <IoMenu
                  className="cursor-pointer text-text-primary hover:text-brand-primary transition-colors lg:hidden"
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
              className="fixed inset-0 bg-text-primary/30 dark:bg-black/50 backdrop-blur-md z-[100] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[300px] z-[101] lg:hidden bg-white dark:bg-bg-card"
            >
              {/* Gradient Border Left */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary" />

              {/* Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-border-default">
                <span className="text-lg font-semibold text-text-secondary">Menu</span>
                <RxCross1
                  className="cursor-pointer text-text-primary hover:text-brand-primary transition-colors"
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
                      className={twMerge(
                        "flex items-center gap-3 py-4 text-lg font-medium border-b border-border-default transition-all duration-300",
                        isActive(link.href)
                          ? "text-brand-primary pl-2 border-brand-primary/30"
                          : "text-text-primary hover:text-brand-primary hover:pl-2"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={isActive(link.href) ? "text-brand-primary" : "text-brand-primary/50"}>→</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border-default bg-bg-section">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full h-12 text-base">
                    Book Free Call →
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-xl font-bold text-gradient-brand">
                    λ
                  </span>
                  <span className="text-text-muted text-sm">RootLambda</span>
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
