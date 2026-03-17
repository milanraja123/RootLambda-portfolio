"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lottie from "lottie-react";
import Button from "@/components/Button";
import Link from "next/link";

// Lottie animations for each service
import mvpAnimation from "@/assets/lottie-files/Working_on_Computer_Desk.json";
import aiAnimation from "@/assets/lottie-files/Technology.json";
import mobileAnimation from "@/assets/lottie-files/technology_landing_page.json";
import contentAnimation from "@/assets/lottie-files/Web_Development.json";

interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Map service IDs to their Lottie animations
const SERVICE_ANIMATIONS: Record<string, unknown> = {
  "mvp-development": mvpAnimation,
  "ai-integration": aiAnimation,
  "mobile-apps": mobileAnimation,
  "ai-content": contentAnimation,
};

const SERVICES: Service[] = [
  {
    id: "mvp-development",
    title: "MVP Development",
    headline: "Ship in 7 Days",
    description:
      "Your idea, live in a week. We build web apps, SaaS dashboards, and tools — fully functional, deployed, and demo-ready.",
    colors: {
      primary: "#E2725B",
      secondary: "#FA6404",
      accent: "#FFDD44",
    },
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    headline: "AI That Works",
    description:
      "End-to-end AI integration and workflow automation. We connect AI models to your systems and build intelligent pipelines.",
    colors: {
      primary: "#00A3FF",
      secondary: "#0057FF",
      accent: "#00FFF0",
    },
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    headline: "iOS & Android",
    description:
      "React Native apps with beautiful UX, backend integration, and App Store ready in weeks, not months.",
    colors: {
      primary: "#00FF66",
      secondary: "#001AFF",
      accent: "#FF00E5",
    },
  },
  {
    id: "ai-content",
    title: "AI Content",
    headline: "Content at Scale",
    description:
      "Automated content creation. Blog posts, social media, videos — all trained on your brand voice and published automatically.",
    colors: {
      primary: "#FF5C00",
      secondary: "#3300FF",
      accent: "#FFD700",
    },
  },
];

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function HeroAnimated() {
  const [activeTab, setActiveTab] = useState(SERVICES[0]);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });

      // Add splash ripple (throttle to avoid too many)
      if (Math.random() > 0.7) {
        const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
        setRipples((prev) => [...prev.slice(-10), newRipple]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  // Remove old ripples
  useEffect(() => {
    const timer = setInterval(() => {
      setRipples((prev) => prev.filter((r) => Date.now() - r.id < 1000));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Auto-switch tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = SERVICES.findIndex((s) => s.id === current.id);
        const nextIndex = (currentIndex + 1) % SERVICES.length;
        return SERVICES[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full -mt-[86px] md:-mt-[98px] lg:-mt-[106px]">
      <div className="w-full h-[100vh] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          {/* Watery Base Gradients */}
          {isMounted && (
            <motion.div
              animate={{
                background: [
                  `radial-gradient(circle at ${10 + mousePos.x * 0.1}% ${20 + mousePos.y * 0.1}%, ${activeTab.colors.primary} 0%, transparent 70%)`,
                  `radial-gradient(circle at ${90 - mousePos.x * 0.1}% ${80 - mousePos.y * 0.1}%, ${activeTab.colors.secondary} 0%, transparent 70%)`,
                  `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${activeTab.colors.accent} 0%, transparent 60%)`,
                ].join(", "),
              }}
              transition={{ duration: 0.4, ease: "linear" }}
              className="absolute inset-0 opacity-90 mix-blend-screen blur-[120px] contrast-[1.2] brightness-[1.1]"
            />
          )}

          {/* Floating Blobs */}
          <motion.div
            animate={{
              x: [0, 150, -150, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.3, 0.7, 1],
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-50 blur-[100px]"
            style={{ backgroundColor: activeTab.colors.primary }}
          />
          <motion.div
            animate={{
              x: [0, -180, 180, 0],
              y: [0, 120, -120, 0],
              scale: [1, 0.8, 1.2, 1],
              borderRadius: [
                "60% 40% 30% 70% / 50% 60% 40% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 60%",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-50 blur-[100px]"
            style={{ backgroundColor: activeTab.colors.secondary }}
          />

          {/* Splash Ripples */}
          <AnimatePresence>
            {ripples.map((ripple) => (
              <motion.div
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 6, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute pointer-events-none w-16 h-16 rounded-full border-4 border-white/40 mix-blend-overlay"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  transform: "translate(-50%, -50%)",
                  boxShadow: `inset 0 0 20px ${activeTab.colors.accent}, 0 0 40px ${activeTab.colors.accent}`,
                }}
              />
            ))}
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/5 to-slate-950/80" />

          {/* Grain Effect */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 lg:p-20 pt-24 md:pt-28 lg:pt-32">
          {/* Main Content - Two Column Layout */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 mb-24 md:mb-32">
            {/* Left - Lottie Animation */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[550px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, scale: 0.9, x: -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Lottie
                      animationData={SERVICE_ANIMATIONS[activeTab.id]}
                      loop={true}
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right gap-6 md:gap-8">
              {/* Tagline */}
              <motion.p
                key={`sub-${activeTab.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-md"
              >
                AI is the root. Growth is the function. We build systems that grow
                while you sleep.
              </motion.p>

              {/* Headline */}
              <div className="max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`title-${activeTab.id}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-[0.9]"
                  >
                    {activeTab.headline.split(" ").map((word, i, arr) => (
                      <React.Fragment key={i}>
                        <span
                          className={i === arr.length - 1 ? "text-white/30" : ""}
                        >
                          {word}
                        </span>
                        {i < arr.length - 1 && " "}
                        {i === 0 && <br className="hidden md:block" />}
                      </React.Fragment>
                    ))}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Description */}
              <div className="max-w-sm">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${activeTab.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white/70 text-sm md:text-base leading-relaxed"
                  >
                    {activeTab.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link href="/contact">
                <Button variant="primary" className="px-8 h-12 md:h-14 text-base md:text-lg">
                  Book Free Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Service Tabs */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between bg-black/40 backdrop-blur-2xl border-t border-white/10">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service)}
                  className={`flex-1 py-4 md:py-6 lg:py-8 px-2 md:px-4 text-[10px] sm:text-xs md:text-sm font-bold transition-all duration-300 relative group
                    ${activeTab.id === service.id ? "text-slate-950" : "text-white/50 hover:text-white"}`}
                >
                  {activeTab.id === service.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white"
                      transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 uppercase tracking-wider md:tracking-widest">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
