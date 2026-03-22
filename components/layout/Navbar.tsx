"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/components", label: "Components" },
  { href: "/themes", label: "Themes" },
  { href: "/about", label: "About" },
];

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-5 relative flex flex-col items-center justify-center gap-[5px]">
      <motion.span
        animate={
          isOpen
            ? { rotate: 45, y: 7, width: 20 }
            : { rotate: 0, y: 0, width: 20 }
        }
        className="block h-[2px] rounded-full origin-center"
        style={{ backgroundColor: "var(--mark-fg)" }}
        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        className="block h-[2px] w-5 rounded-full"
        style={{ backgroundColor: "var(--mark-fg)" }}
        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        animate={
          isOpen
            ? { rotate: -45, y: -7, width: 20 }
            : { rotate: 0, y: 0, width: 20 }
        }
        className="block h-[2px] rounded-full origin-center"
        style={{ backgroundColor: "var(--mark-fg)" }}
        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6"
        style={{
          height: "64px",
          backgroundColor: scrolled ? "var(--docs-navbar-bg, rgba(10,10,10,0.85))" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--mark-border)"
            : "1px solid transparent",
          transition: `
            background-color var(--mark-duration-slow) var(--mark-ease-smooth),
            border-color var(--mark-duration-slow) var(--mark-ease-smooth),
            backdrop-filter var(--mark-duration-normal) var(--mark-ease-smooth)
          `,
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.span
            className="text-lg font-extrabold tracking-tight"
            style={{ color: "var(--mark-accent-primary)", fontFamily: "var(--mark-font-display)" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            MARK UI
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium"
                style={{
                  fontFamily: "var(--mark-font-display)",
                  color: isActive
                    ? "var(--mark-accent-primary)"
                    : "var(--mark-fg)",
                  opacity: isActive ? 1 : 0.6,
                  transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.opacity = "0.6";
                }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: "var(--mark-accent-primary)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Manas-bhavsar/mark-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg"
            style={{
              color: "var(--mark-fg)",
              opacity: 0.6,
              transition: `opacity var(--mark-duration-fast) var(--mark-ease-smooth)`,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.6")
            }
          >
            <GitHubIcon />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer"
            style={{
              background: "transparent",
              border: "none",
            }}
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.5)" }}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed top-0 left-0 bottom-0 z-40 w-72 md:hidden flex flex-col"
              style={{
                background: "var(--mark-bg-elevated)",
                borderRight: "1px solid var(--mark-border)",
                paddingTop: "80px",
              }}
            >
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-base font-medium rounded-lg"
                        style={{
                          fontFamily: "var(--mark-font-display)",
                          color: isActive
                            ? "var(--mark-accent-primary)"
                            : "var(--mark-fg)",
                          opacity: isActive ? 1 : 0.7,
                          background: isActive
                            ? "var(--mark-accent-glow)"
                            : "transparent",
                          borderRadius: "var(--mark-radius-md)",
                          transition: `all var(--mark-duration-fast) var(--mark-ease-smooth)`,
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div
                className="mt-auto px-6 py-6"
                style={{ borderTop: "1px solid var(--mark-border)" }}
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--mark-fg)", opacity: 0.6 }}
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
