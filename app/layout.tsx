import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ThemePanel from "@/components/theme/ThemePanel";

export const metadata: Metadata = {
  title: "MARK UI — Component Library",
  description:
    "Build interfaces that leave a mark. A modern React component library with an expressive theming engine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="monochrome" suppressHydrationWarning>
      <head>
        {/* Oxanium — display / UI font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* JetBrains Mono — code font */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Clash Display — body font (Fontshare) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <ThemePanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
