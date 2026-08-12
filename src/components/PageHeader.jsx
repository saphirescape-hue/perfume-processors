"use client";

import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header pt-32 pb-20 px-6">
      {/* Ankara wax-print texture overlay */}
      <div className="ankara-overlay ankara-diamonds" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
