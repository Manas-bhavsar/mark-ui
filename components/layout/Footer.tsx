"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/components", label: "Components" },
  { href: "/themes", label: "Themes" },
  { href: "/about", label: "About" },
];

const connectLinks = [
  { href: "https://github.com", label: "GitHub", external: true },
  { href: "https://linkedin.com", label: "LinkedIn", external: true },
  { href: "mailto:hello@markui.dev", label: "Email", external: true },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--mark-bg-surface)",
        borderTop: "1px solid var(--mark-border)",
      }}
    >
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left — Brand */}
          <div>
            <span
              className="text-lg font-extrabold tracking-tight"
              style={{ color: "var(--mark-accent-primary)", fontFamily: "var(--mark-font-display)" }}
            >
              MARK UI
            </span>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--mark-fg)", opacity: 0.6 }}
            >
              Build interfaces that leave a mark.
            </p>
            <p
              className="mt-1 text-xs"
              style={{ color: "var(--mark-fg)", opacity: 0.35 }}
            >
              Open source. MIT licensed.
            </p>
          </div>

          {/* Center — Navigate */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: "var(--mark-fg)", opacity: 0.4 }}
            >
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm"
                    style={{
                      color: "var(--mark-fg)",
                      opacity: 0.6,
                      transition: `color var(--mark-duration-fast) var(--mark-ease-smooth), opacity var(--mark-duration-fast) var(--mark-ease-smooth)`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--mark-accent-primary)";
                      el.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--mark-fg)";
                      el.style.opacity = "0.6";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Connect */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: "var(--mark-fg)", opacity: 0.4 }}
            >
              Connect
            </h4>
            <ul className="space-y-2.5">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm"
                    style={{
                      color: "var(--mark-fg)",
                      opacity: 0.6,
                      transition: `color var(--mark-duration-fast) var(--mark-ease-smooth), opacity var(--mark-duration-fast) var(--mark-ease-smooth)`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--mark-accent-primary)";
                      el.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--mark-fg)";
                      el.style.opacity = "0.6";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t px-6 py-4"
        style={{ borderColor: "var(--mark-border)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: "var(--mark-fg)", opacity: 0.35 }}
          >
            © {new Date().getFullYear()} Mark UI. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--mark-fg)", opacity: 0.35 }}>
            Built with{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--mark-accent-primary)", opacity: 1 }}
            >
              Mark UI
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
