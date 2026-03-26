"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/packages/core";
import ThemePreviewCard from "@/components/themes/ThemePreviewCard";
import "@/styles/themes.css"; // Ensure themes styles are loaded

const UPCOMING_THEMES = [
  "Shinigami", "Titan", "Nebula", "Akira", "Hobbit",
  "Carbon", "Ivory", "Slate", "Sage"
];

export default function ThemesShowroomPage() {
  const scrollRefs = useRef<(HTMLElement | null)[]>([]);

  // Simple intersection observer to animate sections fading in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    scrollRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  return (
    <main className="themes-page">
      
      {/* SECTION 1: HERO */}
      <section 
        ref={addToRefs} 
        className="themes-hero opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="themes-hero-tag">6 themes · 2 collections</div>
        <h1 className="themes-hero-title">Every theme.<br/>One library.</h1>
        <p className="themes-hero-body">
          Two collections. Professional for products that mean business. 
          Fun for products that refuse to be boring. Every theme switches live — 
          no reload, no flash, no config.
        </p>
      </section>

      {/* SECTION 2: PROFESSIONAL COLLECTION */}
      <section 
        ref={addToRefs}
        className="themes-collection opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="themes-collection-label">💼 Professional Collection</div>
        <p className="themes-collection-desc">
          Clean, refined, and built for serious products. Dashboards, SaaS tools, 
          internal apps — these themes mean business.
        </p>
        
        <div className="themes-grid">
          <ThemePreviewCard 
            themeId="monochrome"
            name="Monochrome"
            personality="Sharp. Professional. Default."
            topBg="#0A0A0A"
            swatches={["#FAFAFA", "#0A0A0A"]}
          />
          <ThemePreviewCard 
            themeId="arctic"
            name="Arctic"
            personality="Cool, corporate, precise."
            topBg="#080E1A"
            swatches={["#2563EB", "#64748B"]}
          />
          <ThemePreviewCard 
            themeId="obsidian"
            name="Obsidian"
            personality="Premium dark. Quietly powerful."
            topBg="#0B0A14"
            swatches={["#6366F1", "#A78BFA"]}
          />
        </div>
      </section>

      {/* SECTION 3: FUN COLLECTION */}
      <section 
        ref={addToRefs}
        className="themes-collection opacity-0 translate-y-8 transition-all duration-700 ease-out"
        style={{ paddingTop: 0 }}
      >
        <div className="themes-collection-label">🎮 Fun Collection</div>
        <p className="themes-collection-desc">
          Inspired by movies, anime, and games. For products that want to be remembered — 
          not just used.
        </p>
        
        <div className="themes-grid">
          <ThemePreviewCard 
            themeId="cyberpunk"
            name="Cyberpunk"
            personality="Electric. Wild. Unforgettable."
            topBg="#06010F"
            swatches={["#FF2D9B", "#00F5FF"]}
          />
          <ThemePreviewCard 
            themeId="matrixx"
            name="Matrixx"
            personality="Terminal green. Digital reality."
            topBg="#010A01"
            swatches={["#00FF41", "#003B00"]}
          />
          <ThemePreviewCard 
            themeId="gotham"
            name="Gotham"
            personality="Dark knight energy. Zero compromise."
            topBg="#070707"
            swatches={["#FFD700", "#1C1C1C"]}
          />
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section 
        ref={addToRefs}
        className="themes-how-it-works opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <h2 className="themes-how-title">How it works</h2>
        
        <div className="themes-steps">
          {/* STEP 1 */}
          <div>
            <div className="theme-step-num">01</div>
            <h3 className="theme-step-title">Install</h3>
            <p className="theme-step-body">One package. Everything included.</p>
            <div className="theme-step-code">npm install @markui/core</div>
          </div>
          
          {/* STEP 2 */}
          <div>
            <div className="theme-step-num">02</div>
            <h3 className="theme-step-title">Wrap your app</h3>
            <p className="theme-step-body">Set your default theme once.</p>
            <div className="theme-step-code">{`<ThemeProvider defaultTheme="monochrome">
  <App />
</ThemeProvider>`}</div>
          </div>
          
          {/* STEP 3 */}
          <div>
            <div className="theme-step-num">03</div>
            <h3 className="theme-step-title">Switch anytime</h3>
            <p className="theme-step-body">One hook. Instant shift.</p>
            <div className="theme-step-code">{`const { setTheme } = useTheme()
setTheme('cyberpunk')`}</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: UPCOMING THEMES */}
      <section 
        ref={addToRefs}
        className="themes-upcoming opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <h2 className="themes-upcoming-title">More themes coming soon</h2>
        <p className="themes-upcoming-body">
          We're constantly expanding the library to match more personalities.
        </p>
        
        <div className="themes-upcoming-tags">
          {UPCOMING_THEMES.map(theme => (
            <div key={theme} className="themes-upcoming-tag">{theme}</div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section 
        ref={addToRefs}
        className="themes-cta opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <h2 className="themes-cta-title">Pick your personality.</h2>
        <p className="themes-cta-body">
          Start with Monochrome. Switch to Cyberpunk. 
          Build something unforgettable.
        </p>
        
        <div className="themes-cta-actions">
          <Link href="/docs">
            <Button variant="primary" size="lg">Get Started →</Button>
          </Link>
          <Link href="/docs/components">
            <Button variant="ghost" size="lg">View Components</Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
