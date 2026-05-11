"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/5 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image src="/logo.png" alt="Perfume Processors" fill className="object-contain" />
              </div>
              <span className="text-lg font-bold text-primary">Perfume Processors</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Three decades of innovation in textile manufacturing, committed to quality and sustainability.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { href: "/our-history", label: "Our History" },
                { href: "/infrastructure", label: "Infrastructure & Capabilities" },
                { href: "/chairmans-desk", label: "Chairman's Desk" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map(link => (
                <Link key={link.href} href={link.href}
                  className="block text-sm text-text-secondary hover:text-primary transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>Ghetawala Plot, Nr Railway bridge,<br />Jetpur, Gujarat 360370</p>
              <p><a href="mailto:JTPPERFUMEPRO@GMAIL.COM" className="hover:text-primary transition-colors">JTPPERFUMEPRO@GMAIL.COM</a></p>
              <p><a href="tel:+919033906077" className="hover:text-primary transition-colors">+91 90339 06077</a></p>
            </div>
          </div>
        </div>
        <div className="section-divider mt-12 mb-8" />
        <p className="text-center text-xs text-text-muted">© 2025. All rights reserved. Perfume Processors.</p>
      </div>
    </footer>
  );
}
