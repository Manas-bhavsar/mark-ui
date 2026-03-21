"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GetStartedCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install @markui/core");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="home-section">
      <div className="home-section-inner" style={{ textAlign: "center" }}>
        <motion.h2
          className="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to leave a mark?
        </motion.h2>

        <motion.p
          className="cta-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get up and running in under 5 minutes.
        </motion.p>

        <motion.div
          className="install-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <code className="install-code">npm install @markui/core</code>
          <button
            className="copy-btn"
            onClick={handleCopy}
            type="button"
            aria-label="Copy install command"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </motion.div>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/docs" className="btn-primary">
            Read the Docs →
          </Link>
          <a
            href="https://github.com/Manas-bhavsar/mark-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
