// MARK UI — themeDetails.ts
// Deep-dive data for every theme in the library.
// Collection 1 = Professional, Collection 2 = Fun.
// Palette swatches reflect the ACTUAL design tokens used by components.

import type { ThemeId } from "@/components/theme/themes";

export interface ThemePaletteSwatch {
  name: string;
  hex: string;
  role: string;
  light: boolean; // true → use dark text on this swatch
}

export interface ThemeDetail {
  collection: 1 | 2;
  num: string;
  badge: string;
  tagline: string;
  accent: string;
  bg: string;
  palette: ThemePaletteSwatch[];
  origin: string;
  purpose: string;
  tags: string[];
  quote: string;
  stats: { Components: number; Variants: number; Tokens: number };
}

export const themeDetails: Record<ThemeId, ThemeDetail> = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // COLLECTION 1 — PROFESSIONAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  monochrome: {
    collection: 1,
    num: "01",
    badge: "Core Theme",
    tagline: "The Null State",
    accent: "#FAFAFA",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#FAFAFA", role: "--mark-accent-primary", light: true },
      { name: "Accent Secondary", hex: "#0A0A0A", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Monochrome was the first theme built for MARK UI — a deliberate reset. Before any hue could be trusted, black and white had to work flawlessly. Designed to expose every spacing flaw and animation timing issue without color as a crutch.",
    purpose:
      "Use when the content itself is the loudest thing on screen. Perfect for writing tools, terminal UIs, developer dashboards, and any environment where distraction is the enemy.",
    tags: ["Minimalist", "Dev Tools", "Editorial", "Precision", "Zero Noise"],
    quote:
      "Color is a hypothesis. Strip it away — what remains is either design or accident.",
    stats: { Components: 18, Variants: 3, Tokens: 24 },
  },

  arctic: {
    collection: 1,
    num: "02",
    badge: "Cool Spectrum",
    tagline: "Calm Under Pressure",
    accent: "#2563EB",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#2563EB", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#64748B", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Inspired by refracted light inside glaciers and the eerie clarity of polar night. Arctic answers one question: what does calm confidence look like in UI? The palette pulls from deep ocean blues and ice-refraction cyan.",
    purpose:
      "Designed for data-heavy apps, analytics dashboards, and enterprise tools. Cool tones reduce visual fatigue and naturally guide attention to warm accent elements.",
    tags: ["Analytics", "Enterprise", "Dashboard", "Long Sessions", "Data-First"],
    quote:
      "A glacier moves slowly but nothing can stop it. Arctic was built to carry that exact energy.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  obsidian: {
    collection: 1,
    num: "03",
    badge: "Flagship",
    tagline: "Volcanic Elegance",
    accent: "#6366F1",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#6366F1", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#A78BFA", role: "--mark-accent-secondary", light: true },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Obsidian is MARK UI's flagship theme — the one that proved the library was worth building. Named after volcanic glass: formed under extreme pressure, razor-sharp, naturally beautiful. The #09090b base is one deliberate step from pure black.",
    purpose:
      "The go-to for SaaS products, developer portfolios, and premium tools. The violet accent is restrained enough to feel luxurious rather than loud — versatile across B2B and consumer contexts.",
    tags: ["SaaS", "Premium", "Portfolio", "Flagship", "Versatile"],
    quote:
      "Obsidian forms in silence, beneath the surface, under immense pressure. So does good design.",
    stats: { Components: 18, Variants: 5, Tokens: 32 },
  },

  ivory: {
    collection: 1,
    num: "04",
    badge: "Warm Tone",
    tagline: "Paper and Gold",
    accent: "#D97706",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#D97706", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#78716C", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Ivory was born from a question: can warmth exist without sacrificing authority? Named after aged paper and old gold leaf, this theme draws from the quiet confidence of a well-worn library — the kind of space where ideas have weight.",
    purpose:
      "Ideal for editorial platforms, note-taking apps, and any product where long reading sessions matter. The amber accent creates focus points without screaming for attention.",
    tags: ["Editorial", "Warm", "Long-Form", "Readable", "Sophisticated"],
    quote:
      "The best designs age like paper — they yellow at the edges but the words remain sharp.",
    stats: { Components: 18, Variants: 3, Tokens: 25 },
  },

  slate: {
    collection: 1,
    num: "05",
    badge: "Industrial",
    tagline: "Blueprint Clarity",
    accent: "#0EA5E9",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#0EA5E9", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#334155", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Slate started as an internal tool theme — something developers would stare at for eight hours straight without flinching. It borrows from architectural blueprints and industrial control panels where clarity is a safety requirement, not a preference.",
    purpose:
      "Built for infrastructure dashboards, monitoring tools, and developer environments. The sky-blue accent cuts through dark surfaces like a signal light: impossible to miss, impossible to misread.",
    tags: ["Infrastructure", "Monitoring", "Dev Env", "Industrial", "Reliable"],
    quote:
      "A blueprint doesn't need to be beautiful. It needs to be right. Slate does both.",
    stats: { Components: 18, Variants: 4, Tokens: 27 },
  },

  sage: {
    collection: 1,
    num: "06",
    badge: "Natural",
    tagline: "Quiet Growth",
    accent: "#4D7C6F",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#4D7C6F", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#F59E0B", role: "--mark-accent-secondary", light: true },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Sage was requested more than any other theme before it was built. The community wanted something organic — a palette that felt alive without being loud. Named after the herb: subtle aroma, powerful presence, deeply grounding.",
    purpose:
      "Designed for productivity tools, health and wellness apps, and sustainable brands. The muted green creates a calming workspace that encourages long, focused sessions without visual strain.",
    tags: ["Productivity", "Wellness", "Focus", "Organic", "Calm"],
    quote:
      "Growth is rarely loud. The strongest roots are the ones you never see.",
    stats: { Components: 18, Variants: 3, Tokens: 25 },
  },

  carbon: {
    collection: 1,
    num: "07",
    badge: "High Contrast",
    tagline: "Forged in Heat",
    accent: "#EF4444",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#EF4444", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#E5E7EB", role: "--mark-accent-secondary", light: true },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Carbon exists because sometimes you need a theme that hits hard. The red-on-black combination is one of the most aggressive in design — but controlled aggression. Every pixel of red earned its place through contrast-ratio testing and deliberate restraint.",
    purpose:
      "Built for system dashboards, error states, and interfaces where urgency matters. Carbon works best when the user needs to act, not admire. Red is attention by nature — Carbon makes it intentional.",
    tags: ["System", "Alert-Heavy", "High Contrast", "Urgent", "Bold"],
    quote:
      "Pressure creates diamonds. More pressure creates carbon fiber. We chose the stronger one.",
    stats: { Components: 18, Variants: 4, Tokens: 26 },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // COLLECTION 2 — FUN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  cyberpunk: {
    collection: 2,
    num: "08",
    badge: "Bold · Loud",
    tagline: "Neon District",
    accent: "#FF2D9B",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#FF2D9B", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#00F5FF", role: "--mark-accent-secondary", light: true },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Not planned — demanded. After the first three themes shipped, the community wanted something that broke the mold. Yellow on deep violet is one of the highest-contrast combinations possible. This theme weaponizes that.",
    purpose:
      "Built for gaming UIs, creative portfolios, and scroll-stopping landing pages. Use it when you want the UI to feel like a statement, not a tool.",
    tags: ["Gaming", "Creative", "High Impact", "Entertainment", "Scroll-Stopper"],
    quote:
      "In a city that never sleeps, the boldest light wins. Don't whisper. Illuminate.",
    stats: { Components: 18, Variants: 4, Tokens: 30 },
  },

  shinigami: {
    collection: 2,
    num: "09",
    badge: "Dark · Mythic",
    tagline: "Divine Judgement",
    accent: "#C9A84C",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#C9A84C", role: "--mark-accent-primary", light: true },
      { name: "Accent Secondary", hex: "#1A1A2E", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Shinigami was the first anime-inspired theme and the riskiest. Gold on near-black is either elegant or gaudy — there's no middle ground. Named after the gods of death in Japanese mythology: precise, inevitable, beautiful in their darkness.",
    purpose:
      "Designed for premium portfolios, luxury e-commerce, and any product that wants to feel exclusive. The gold accent reads as both ancient and futuristic — a rare duality.",
    tags: ["Luxury", "Anime", "Premium", "Exclusive", "Mythic"],
    quote:
      "Those who write names in the notebook become gods. Those who design in gold become legends.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  titan: {
    collection: 2,
    num: "10",
    badge: "Military",
    tagline: "Walls of War",
    accent: "#8B6914",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#8B6914", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#2D5A3D", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Titan draws from military cartography and wartime communication interfaces — functional, dense, and designed to survive chaos. The muted gold and deep olive create a palette that feels weathered and battle-tested, not polished.",
    purpose:
      "Ideal for strategy games, project management tools, and apps that manage complexity. Titan feels structured and serious — like a war room where every element has a purpose.",
    tags: ["Strategy", "Military", "Complex UI", "Project Mgmt", "Structured"],
    quote:
      "Behind every wall is a story of survival. Titan was built to carry weight that would crush lesser themes.",
    stats: { Components: 18, Variants: 3, Tokens: 26 },
  },

  nebula: {
    collection: 2,
    num: "11",
    badge: "Cosmic",
    tagline: "Stardust Drift",
    accent: "#9B59B6",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#9B59B6", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#E74C3C", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Nebula was inspired by Hubble telescope photographs — specifically the moment when false-color processing reveals structures invisible to the naked eye. Purple and red don't naturally coexist in UI, but in space, they create the most beautiful objects known.",
    purpose:
      "Built for creative tools, music apps, and immersive experiences. Nebula works best when the UI is part of the experience — not separate from it. It rewards exploration.",
    tags: ["Creative", "Music", "Immersive", "Exploration", "Cosmic"],
    quote:
      "A nebula is a graveyard and a nursery at the same time. Everything ends. Everything begins.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  matrixx: {
    collection: 2,
    num: "12",
    badge: "Terminal",
    tagline: "System Override",
    accent: "#00FF41",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#00FF41", role: "--mark-accent-primary", light: true },
      { name: "Accent Secondary", hex: "#003B00", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "A love letter to terminal culture and hacker cinema. The #020c02 base carries a faint green chromatic cast — imperceptible next to pure black, but subconsciously grounding. Green-on-black is the oldest color relationship in computing.",
    purpose:
      "Ideal for CLI tools, security dashboards, and developer utilities. Matrixx makes you feel like you're inside the system, not looking at it from outside.",
    tags: ["Terminal", "Security", "Dev", "CLI", "Hacker Aesthetic"],
    quote:
      "Every system has a back door. Matrixx makes the interface feel like you already found it.",
    stats: { Components: 18, Variants: 3, Tokens: 26 },
  },

  gotham: {
    collection: 2,
    num: "13",
    badge: "Warm · Cinematic",
    tagline: "City That Burns",
    accent: "#FFD700",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#FFD700", role: "--mark-accent-primary", light: true },
      { name: "Accent Secondary", hex: "#1C1C1C", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Gotham almost didn't happen — orange is the hardest accent to control. Inspired by amber urban nights, streetlights through smog, and the cinematic grammar of noir. A deep brown-black paired with precise burnt orange: dangerous and warm at once.",
    purpose:
      "Designed for fintech, lifestyle brands, and premium consumer apps that want warmth without softness. Gotham reads serious but approachable.",
    tags: ["Fintech", "Lifestyle", "Consumer", "Cinematic", "Serious Warmth"],
    quote:
      "Every great city has a shadow side. Gotham is the light that makes the dark beautiful.",
    stats: { Components: 18, Variants: 4, Tokens: 29 },
  },

  akira: {
    collection: 2,
    num: "14",
    badge: "Neo Tokyo",
    tagline: "Red Shift",
    accent: "#FF4500",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#FF4500", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#0A0AFF", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Akira is raw speed made visual. Named after the 1988 anime that redefined cyberpunk, this theme uses the exact red of Kaneda's motorcycle — aggressive, unapologetic, and impossible to ignore. The blue complement creates tension, not harmony.",
    purpose:
      "Built for high-energy landing pages, gaming interfaces, and creative portfolios that refuse to play safe. Akira is not for everyone — and that's the point.",
    tags: ["Anime", "High Energy", "Landing Pages", "Creative", "Unapologetic"],
    quote:
      "The future is not something we enter. The future is something we create — at full speed.",
    stats: { Components: 18, Variants: 4, Tokens: 28 },
  },

  hobbit: {
    collection: 2,
    num: "15",
    badge: "Fantasy · Earth",
    tagline: "Shire at Dusk",
    accent: "#8B7355",
    bg: "#0A0A0A",
    palette: [
      { name: "Accent Primary", hex: "#8B7355", role: "--mark-accent-primary", light: false },
      { name: "Accent Secondary", hex: "#4A7C59", role: "--mark-accent-secondary", light: false },
      { name: "Foreground", hex: "#FAFAFA", role: "--mark-fg", light: true },
      { name: "Foreground Muted", hex: "#A0A0A0", role: "--mark-fg-muted", light: true },
      { name: "Background", hex: "#0A0A0A", role: "--mark-bg", light: false },
      { name: "Elevated Surface", hex: "#1A1A1A", role: "--mark-bg-elevated", light: false },
    ],
    origin:
      "Hobbit began as an experiment in warmth — can an earth-toned palette feel modern without losing its handmade quality? Named after Tolkien's gentle adventurers, this theme proves that comfort and craft are not opposites. Every token feels touched by firelight.",
    purpose:
      "Ideal for storytelling platforms, indie games, and community-driven apps. Hobbit creates a space that feels inviting and lived-in — like a well-loved tavern where every visitor belongs.",
    tags: ["Storytelling", "Indie", "Community", "Fantasy", "Handcrafted"],
    quote:
      "Not all those who wander are lost. Some are just looking for the right color palette.",
    stats: { Components: 18, Variants: 3, Tokens: 25 },
  },
};
