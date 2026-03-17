"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Button from "@/components/Button";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

const contactInfo = [
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+91 99999 99999",
    href: "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20build%20with%20Synthara",
  },
  {
    icon: "📧",
    title: "Email",
    value: "hello@synthara.com",
    href: "mailto:hello@synthara.com",
  },
  {
    icon: "📍",
    title: "Base",
    value: "India · Working globally",
    href: "#",
  },
  {
    icon: "⏱️",
    title: "Response time",
    value: "Within 2 hours · Mon–Sat",
    href: "#",
  },
];

const serviceOptions = [
  "MVP Development (Web App)",
  "Mobile App Development",
  "AI Integration",
  "AI Content Writing",
  "AI Video Marketing",
  "Growth Retainer",
  "Not sure — let's talk",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Monthly Retainer",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", service: "", budget: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section className="py-24">
        <div className="container max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex py-1 px-3 bg-gradient-brand rounded-full text-white font-semibold mb-6">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mt-4 leading-tight text-text-primary">
              LET&apos;S BUILD
              <br />
              <span className="text-brand-primary">SOMETHING REAL.</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                You have the idea. We have the speed. Fill the form or reach us
                directly — we respond within 2 hours, Mon–Sat.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white dark:bg-bg-card border border-border-default rounded-2xl p-4 hover:border-brand-primary/30 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="size-12 bg-bg-soft rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">{info.title}</p>
                      <p className="text-text-primary font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3"
            >
              <div className="bg-white dark:bg-bg-card border border-border-default rounded-3xl p-8 shadow-card">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-6">🚀</div>
                    <h3 className="text-2xl font-medium mb-2 text-text-primary">MESSAGE SENT!</h3>
                    <p className="text-text-secondary max-w-sm mx-auto">
                      We&apos;ll WhatsApp you within 2 hours to schedule your free
                      discovery call. Get ready to build something real.
                    </p>
                    <Button
                      variant="secondary"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold text-brand-primary mb-6">
                        BOOK A FREE CALL
                      </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                      >
                        <label className="block text-text-secondary text-sm mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Rahul Sharma"
                          className="w-full bg-bg-main border border-border-default rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors duration-300"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.55 }}
                      >
                        <label className="block text-text-secondary text-sm mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="rahul@startup.com"
                          className="w-full bg-bg-main border border-border-default rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors duration-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <label className="block text-text-secondary text-sm mb-2">
                        What do you need?
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-bg-main border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-brand-primary transition-colors duration-300 appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.5rem",
                        }}
                      >
                        <option value="" className="bg-white dark:bg-bg-card">
                          Select a service...
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option} className="bg-white dark:bg-bg-card">
                            {option}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.65 }}
                    >
                      <label className="block text-text-secondary text-sm mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full bg-bg-main border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-brand-primary transition-colors duration-300 appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.5rem",
                        }}
                      >
                        <option value="" className="bg-white dark:bg-bg-card">
                          Select budget...
                        </option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option} className="bg-white dark:bg-bg-card">
                            {option}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <label className="block text-text-secondary text-sm mb-2">
                        Tell us about your idea
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Briefly describe what you want to build..."
                        className="w-full bg-bg-main border border-border-default rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-primary transition-colors duration-300 resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.75 }}
                      className="space-y-4"
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="inline-block size-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span>⚡ Send Message & Book Call →</span>
                        )}
                      </Button>
                      <p className="text-center text-text-muted text-xs uppercase tracking-wider">
                        Free 30-min discovery call · No commitment · Response in &lt;2hrs
                      </p>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
