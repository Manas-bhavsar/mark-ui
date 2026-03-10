# MARK UI

> Build interfaces that leave a mark.

MARK UI is a React component library built for developers who refuse to blend in. Every component ships with animations, every theme is swappable in one click, and every prop is fully typed. This isn't just a component library — it's a design language.

---

## What makes it different

- **Motion-first** — every component has a defined animation story. What moves, when it moves, and how it feels. Powered by a shared motion token system.
- **Live theme switching** — two collections, fifteen themes. Switch instantly with no reload, no flash. The whole site transitions in one smooth shift.
- **Styled defaults, real customization** — works out of the box but built to be fully overridden. Not just accent colors — entire personalities.
- **TypeScript native** — fully typed props, consistent APIs, great developer experience throughout.
- **Accessible by default** — keyboard navigation, ARIA attributes, focus management, and `prefers-reduced-motion` support on every component.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| Animation | Framer Motion |
| UI Primitives | Shadcn/ui (restyled) |
| Display Font | Oxanium (Google Fonts) |
| Body Font | Clash Display (Fontshare) |
| Code Font | JetBrains Mono |

---

## Theme Collections

Themes are split into two collections. Each theme is fully defined as CSS variables and switches live via a `data-theme` attribute on the root element.

### 💼 Professional

| Theme | Primary | Accent | Status |
|---|---|---|---|
| Monochrome | `#FAFAFA` | `#0A0A0A` | ✅ Live |
| Arctic | `#2563EB` | `#64748B` | 🗓 Planned |
| Obsidian | `#6366F1` | `#A78BFA` | 🗓 Planned |
| Ivory | `#78716C` | `#D97706` | 🗓 Planned |
| Slate | `#334155` | `#0EA5E9` | 🗓 Planned |
| Sage | `#4D7C6F` | `#F59E0B` | 🗓 Planned |
| Carbon | `#E5E7EB` | `#EF4444` | 🗓 Planned |

### 🎮 Fun

| Theme | Inspiration | Primary | Accent | Status |
|---|---|---|---|---|
| Cyberpunk | Cyberpunk 2077 | `#FF2D9B` | `#00F5FF` | ✅ Live |
| Shinigami | Bleach / Death Note | `#C9A84C` | `#1A1A2E` | 🗓 Planned |
| Titan | Attack on Titan | `#8B6914` | `#2D5A3D` | 🗓 Planned |
| Nebula | Guardians / Space | `#9B59B6` | `#E74C3C` | 🗓 Planned |
| Matrixx | The Matrix | `#00FF41` | `#003B00` | 🗓 Planned |
| Gotham | Batman / DC | `#FFD700` | `#1C1C1C` | 🗓 Planned |
| Akira | Akira / Neo Tokyo | `#FF4500` | `#0A0AFF` | 🗓 Planned |
| Hobbit | Lord of the Rings | `#8B7355` | `#4A7C59` | 🗓 Planned |

---

## Component List

Phase 1 ships with 19 components across five categories. Every component is fully animated, fully typed, and fully themeable.

**Inputs**
Button, Input, Checkbox, Toggle, Select

**Display**
Badge, Avatar, Card, Tooltip, Tag

**Feedback**
Alert, Toast, Spinner, Skeleton

**Overlay**
Modal, Drawer

**Layout**
Divider, Container

---

## Folder Structure

```
markui/
├── packages/
│   ├── core/                  ← all components
│   │   ├── components/
│   │   │   ├── inputs/
│   │   │   ├── display/
│   │   │   ├── feedback/
│   │   │   ├── overlay/
│   │   │   └── layout/
│   │   ├── themes/            ← token definitions
│   │   └── index.ts           ← exports
│   └── cli/                   ← future: npx markui add
│
└── apps/
    └── docs/                  ← documentation website
        ├── app/
        │   ├── layout.tsx
        │   ├── page.tsx       ← Home
        │   ├── about/
        │   ├── docs/
        │   ├── themes/
        │   └── components/
        ├── components/
        │   ├── layout/        ← Navbar, Footer, PageTransition
        │   ├── theme/         ← ThemeProvider, ThemePanel
        │   └── ui/            ← ComingSoon, shared UI
        └── styles/
            └── globals.css    ← CSS variables, motion tokens
```

---

## Roadmap

- [x] Core component library — Phase 1 (19 components)
- [x] Theme system — CSS variable engine, ThemeProvider, useTheme
- [x] Launch themes — Monochrome + Cyberpunk
- [ ] Full documentation site with live component playground
- [ ] Fun Collection — all 8 themes
- [ ] Professional Collection — all 7 themes
- [ ] Mark UI CLI — `npx markui add [component]`
- [ ] Figma Kit — all components as Figma components

---

## Status

This project is actively in development. The component library and theme system are being built in parallel with the documentation site. Follow along or star the repo to stay updated.

---

*MARK UI — Build interfaces that leave a mark.*