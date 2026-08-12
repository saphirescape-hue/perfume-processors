"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MaintenancePage() {
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-12">
      {/* Mesh background blobs */}
      <div className="mesh-gradient-bg">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="noise-overlay" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-lg text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-16 h-16">
            <Image
              src="/logo.png"
              alt="Perfume Processors"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Glass card */}
        <div className="glass-card-static p-10 sm:p-12">
          {/* Animated gear icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{
              background: "rgba(233,30,99,0.06)",
              border: "1px solid rgba(233,30,99,0.1)",
            }}
          >
            <svg
              className="w-8 h-8 text-primary-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            We&apos;ll Be Right Back
          </h1>

          <div className="section-divider my-5" />

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
            Our website is currently undergoing scheduled maintenance to bring
            you a better experience. We appreciate your patience.
          </p>

          {/* Contact toggle button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowContact(!showContact)}
            className="glow-button text-sm"
          >
            {showContact ? (
              <>
                <svg
                  className="inline-block mr-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Close
              </>
            ) : (
              <>
                <svg
                  className="inline-block mr-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </>
            )}
          </motion.button>
        </div>

        {/* Contact section — slides down */}
        <AnimatePresence>
          {showContact && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="glass-card-static p-8 sm:p-10 text-left">
                <h2 className="text-lg font-bold text-text-primary mb-1">
                  Get in Touch
                </h2>
                <p className="text-sm text-text-secondary mb-6">
                  Need to reach us during maintenance? Send us a message.
                </p>

                {/* Quick contact info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="mailto:JTPPERFUMEPRO@GMAIL.COM"
                    className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 rounded-lg"
                    style={{
                      background: "rgba(233,30,99,0.04)",
                      border: "1px solid rgba(233,30,99,0.08)",
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    JtpPerfumePro@gmail.com
                  </a>
                  <a
                    href="tel:+919033906077"
                    className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-primary transition-colors px-3 py-2 rounded-lg"
                    style={{
                      background: "rgba(233,30,99,0.04)",
                      border: "1px solid rgba(233,30,99,0.08)",
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 90339 06077
                  </a>
                </div>

                <div className="section-divider mb-6" />

                {/* Success toast */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-5 px-4 py-3 rounded-xl text-sm font-medium text-primary"
                      style={{
                        background: "rgba(233,30,99,0.06)",
                        border: "1px solid rgba(233,30,99,0.12)",
                      }}
                    >
                      ✓ Message sent! We&apos;ll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contact form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="maint-name"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="maint-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="maint-email"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="maint-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="maint-message"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="maint-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glow-button text-sm w-full"
                  >
                    Send Message
                    <svg
                      className="inline-block ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-xs text-text-muted"
        >
          © {new Date().getFullYear()} Perfume Processors. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}
