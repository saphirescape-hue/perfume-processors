"use client";

import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help with your textile manufacturing inquiries."
      />

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <ScrollReveal className="lg:col-span-1">
              <div className="space-y-6">
                {/* Location */}
                <div className="glass-card p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-primary-light"
                    style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">Location</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Ghetawala Plot, Nr Railway bridge,<br />
                    Jetpur, Gujarat 360370
                  </p>
                </div>

                {/* Phone */}
                <div className="glass-card p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-primary-light"
                    style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">Phone</h3>
                  <a href="tel:+919033906077" className="text-sm text-text-secondary hover:text-primary transition-colors">
                    +91 90339 06077
                  </a>
                </div>

                {/* Email */}
                <div className="glass-card p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-primary-light"
                    style={{ background: "rgba(233,30,99,0.06)", border: "1px solid rgba(233,30,99,0.1)" }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">Email</h3>
                  <a href="mailto:JTPPERFUMEPRO@GMAIL.COM" className="text-sm text-text-secondary hover:text-primary transition-colors break-all">
                    JtpPerfumePro@gmail.com
                  </a>
                </div>

                {/* Google Maps Embed */}
                <a
                  href="https://maps.app.goo.gl/2ibkFM9KLsLBTxyZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden border border-primary/5 hover:border-primary-light/20 transition-all duration-300 hover:shadow-lg"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.6!2d70.62!3d21.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzAwLjAiTiA3MMKwMzcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Perfume Processors Location"
                    className="pointer-events-none"
                  />
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2.5 flex items-center gap-2 text-sm text-primary font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in Google Maps
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-2" delay={0.15}>
              <div className="glass-card p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-text-primary mb-2">Get in Touch</h2>
                <p className="text-text-secondary mb-8">We&apos;re here to help with your textile manufacturing inquiries.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Full Name</label>
                      <input
                        type="text" id="name" name="name" required
                        value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">Phone</label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">Subject</label>
                      <input
                        type="text" id="subject" name="subject" required
                        value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-primary/5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-light/30 focus:ring-2 focus:ring-primary-light/10 transition-all text-sm resize-none"
                      placeholder="Tell us about your textile needs..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glow-button text-sm w-full sm:w-auto"
                  >
                    Send Message
                    <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
