export type ThemeCategory = "professional" | "fun";

export interface ThemeDefinition {
  id: string;
  name: string;
  category: ThemeCategory;
  live: boolean;
  primary: string;
  secondary: string;
}

export const themes: ThemeDefinition[] = [
  // ── Professional ──
  {
    id: "monochrome",
    name: "Monochrome",
    category: "professional",
    live: true,
    primary: "#FAFAFA",
    secondary: "#0A0A0A",
  },
  {
    id: "arctic",
    name: "Arctic",
    category: "professional",
    live: false,
    primary: "#88C8F7",
    secondary: "#1B2A4A",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    category: "professional",
    live: false,
    primary: "#6B5CE7",
    secondary: "#1A1625",
  },
  {
    id: "ivory",
    name: "Ivory",
    category: "professional",
    live: false,
    primary: "#F5E6D3",
    secondary: "#2D2420",
  },
  {
    id: "slate",
    name: "Slate",
    category: "professional",
    live: false,
    primary: "#94A3B8",
    secondary: "#1E293B",
  },
  {
    id: "sage",
    name: "Sage",
    category: "professional",
    live: false,
    primary: "#86AE80",
    secondary: "#1A2418",
  },
  {
    id: "carbon",
    name: "Carbon",
    category: "professional",
    live: false,
    primary: "#E5E5E5",
    secondary: "#171717",
  },

  // ── Fun ──
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    category: "fun",
    live: true,
    primary: "#FF2D9B",
    secondary: "#00F5FF",
  },
  {
    id: "shinigami",
    name: "Shinigami",
    category: "fun",
    live: false,
    primary: "#C41E3A",
    secondary: "#1A1A2E",
  },
  {
    id: "titan",
    name: "Titan",
    category: "fun",
    live: false,
    primary: "#E87D0D",
    secondary: "#2D1B00",
  },
  {
    id: "nebula",
    name: "Nebula",
    category: "fun",
    live: false,
    primary: "#A855F7",
    secondary: "#7C3AED",
  },
  {
    id: "matrixx",
    name: "Matrixx",
    category: "fun",
    live: false,
    primary: "#00FF41",
    secondary: "#003B00",
  },
  {
    id: "gotham",
    name: "Gotham",
    category: "fun",
    live: false,
    primary: "#FFD700",
    secondary: "#1A1A2E",
  },
  {
    id: "akira",
    name: "Akira",
    category: "fun",
    live: false,
    primary: "#FF4444",
    secondary: "#FF8800",
  },
  {
    id: "hobbit",
    name: "Hobbit",
    category: "fun",
    live: false,
    primary: "#8FBC8F",
    secondary: "#654321",
  },
];

export const professionalThemes = themes.filter(
  (t) => t.category === "professional"
);
export const funThemes = themes.filter((t) => t.category === "fun");
