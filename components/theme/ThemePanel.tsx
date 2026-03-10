"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { professionalThemes, funThemes, type ThemeDefinition } from "./themes";

function ThemeCard({
  theme,
  isActive,
  onSelect,
}: {
  theme: ThemeDefinition;
  isActive: boolean;
  onSelect: () => void;
}) {
  if (!theme.live) {
    return (
      <div
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg opacity-40 cursor-not-allowed"
        style={{
          background: "var(--mark-bg-surface)",
          borderRadius: "var(--mark-radius-md)",
        }}
      >
        <div className="flex gap-1.5">
          <span
            className="w-3.5 h-3.5 rounded-full border"
            style={{
              backgroundColor: theme.primary,
              borderColor: "var(--mark-border)",
            }}
          />
          <span
            className="w-3.5 h-3.5 rounded-full border"
            style={{
              backgroundColor: theme.secondary,
              borderColor: "var(--mark-border)",
            }}
          />
        </div>
        <span className="text-xs flex-1" style={{ color: "var(--mark-fg)" }}>
          {theme.name}
        </span>
        <span
          className="text-[10px] px-1.5 py-0.5 rounded-full"
          style={{
            background: "var(--mark-border)",
            color: "var(--mark-fg)",
            borderRadius: "var(--mark-radius-pill)",
          }}
        >
          Soon
        </span>
      </div>
    );
  }

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left cursor-pointer"
      style={{
        background: isActive ? "var(--mark-accent-glow)" : "var(--mark-bg-surface)",
        borderRadius: "var(--mark-radius-md)",
        border: isActive
          ? "1px solid var(--mark-accent-primary)"
          : "1px solid transparent",
        transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
      }}
    >
      <div className="flex gap-1.5">
        <span
          className="w-3.5 h-3.5 rounded-full"
          style={{
            backgroundColor: theme.primary,
            boxShadow: isActive
              ? `0 0 8px ${theme.primary}40`
              : "none",
          }}
        />
        <span
          className="w-3.5 h-3.5 rounded-full"
          style={{ backgroundColor: theme.secondary }}
        />
      </div>
      <span
        className="text-sm font-medium flex-1"
        style={{ color: "var(--mark-fg)" }}
      >
        {theme.name}
      </span>
      {isActive && (
        <motion.span
          layoutId="active-theme-dot"
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--mark-accent-primary)" }}
        />
      )}
    </motion.button>
  );
}

export default function ThemePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme: activeTheme, setTheme } = useTheme();

  return (
    <>
      {/* ── Closed Tab ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => setIsOpen(true)}
            className="fixed z-50 cursor-pointer"
            style={{
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: "32px",
              height: "96px",
              background: "var(--mark-bg-elevated)",
              borderLeft: "1px solid var(--mark-border)",
              borderTop: "1px solid var(--mark-border)",
              borderBottom: "1px solid var(--mark-border)",
              borderTopLeftRadius: "var(--mark-radius-md)",
              borderBottomLeftRadius: "var(--mark-radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: `box-shadow var(--mark-duration-fast) var(--mark-ease-smooth)`,
            }}
            whileHover={{
              boxShadow: `inset 0 0 20px var(--mark-accent-glow)`,
            }}
          >
            <span
              className="text-xs font-semibold tracking-wider"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                color: "var(--mark-fg)",
                opacity: 0.7,
                fontFamily: "var(--mark-font-display)",
              }}
            >
              Themes
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Open Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.3)" }}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 bottom-0 z-50 overflow-y-auto"
              style={{
                width: "280px",
                background: "var(--mark-bg-elevated)",
                borderLeft: "1px solid var(--mark-border)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{
                  borderBottom: "1px solid var(--mark-border)",
                }}
              >
                <h2
                  className="text-sm font-bold tracking-wide uppercase"
                  style={{ color: "var(--mark-fg)", fontFamily: "var(--mark-font-display)" }}
                >
                  Themes
                </h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 flex items-center justify-center rounded-md cursor-pointer"
                  style={{
                    color: "var(--mark-fg)",
                    background: "transparent",
                    border: "none",
                    fontSize: "16px",
                    transition: `color var(--mark-duration-fast) var(--mark-ease-smooth)`,
                  }}
                >
                  ✕
                </motion.button>
              </div>

              <div className="px-5 py-4 space-y-5">
                {/* Professional */}
                <div>
                  <p
                    className="text-xs font-semibold mb-3 uppercase tracking-wider"
                    style={{ color: "var(--mark-fg)", opacity: 0.5 }}
                  >
                    💼 Professional
                  </p>
                  <div className="space-y-1.5">
                    {professionalThemes.map((t) => (
                      <ThemeCard
                        key={t.id}
                        theme={t}
                        isActive={activeTheme === t.id}
                        onSelect={() => setTheme(t.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "var(--mark-border)",
                  }}
                />

                {/* Fun */}
                <div>
                  <p
                    className="text-xs font-semibold mb-3 uppercase tracking-wider"
                    style={{ color: "var(--mark-fg)", opacity: 0.5 }}
                  >
                    🎮 Fun
                  </p>
                  <div className="space-y-1.5">
                    {funThemes.map((t) => (
                      <ThemeCard
                        key={t.id}
                        theme={t}
                        isActive={activeTheme === t.id}
                        onSelect={() => setTheme(t.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
