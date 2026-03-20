// MARK UI — themes.ts
// Complete theme token definitions for all 15 themes.
// Two collections: Professional + Fun
// Each theme only defines accent tokens —
// base tokens (bg, fg, border) never change.

export type ThemeId =
  // Professional
  | 'monochrome'
  | 'arctic'
  | 'obsidian'
  | 'ivory'
  | 'slate'
  | 'sage'
  | 'carbon'
  // Fun
  | 'cyberpunk'
  | 'shinigami'
  | 'titan'
  | 'nebula'
  | 'matrixx'
  | 'gotham'
  | 'akira'
  | 'hobbit'

export type ThemeCollection = 'professional' | 'fun'

export type ThemeStatus = 'live' | 'planned'

export interface ThemeTokens {
  accentPrimary: string
  accentSecondary: string
  accentGlow: string
  accentSubtle: string
}

export interface Theme {
  id: ThemeId
  name: string
  collection: ThemeCollection
  status: ThemeStatus
  personality: string
  tokens: ThemeTokens
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PROFESSIONAL COLLECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const professionalThemes: Theme[] = [
  {
    id: 'monochrome',
    name: 'Monochrome',
    collection: 'professional',
    status: 'live',
    personality: 'Sharp. Professional. Default.',
    tokens: {
      accentPrimary:   '#FAFAFA',
      accentSecondary: '#0A0A0A',
      accentGlow:      'rgba(250, 250, 250, 0.15)',
      accentSubtle:    'rgba(250, 250, 250, 0.06)',
    },
  },
  {
    id: 'arctic',
    name: 'Arctic',
    collection: 'professional',
    status: 'planned',
    personality: 'Cool, corporate, precise.',
    tokens: {
      accentPrimary:   '#2563EB',
      accentSecondary: '#64748B',
      accentGlow:      'rgba(37, 99, 235, 0.25)',
      accentSubtle:    'rgba(37, 99, 235, 0.08)',
    },
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    collection: 'professional',
    status: 'planned',
    personality: 'Premium dark. Quietly powerful.',
    tokens: {
      accentPrimary:   '#6366F1',
      accentSecondary: '#A78BFA',
      accentGlow:      'rgba(99, 102, 241, 0.25)',
      accentSubtle:    'rgba(99, 102, 241, 0.08)',
    },
  },
  {
    id: 'ivory',
    name: 'Ivory',
    collection: 'professional',
    status: 'planned',
    personality: 'Warm, minimal, refined.',
    tokens: {
      accentPrimary:   '#D97706',
      accentSecondary: '#78716C',
      accentGlow:      'rgba(217, 119, 6, 0.25)',
      accentSubtle:    'rgba(217, 119, 6, 0.08)',
    },
  },
  {
    id: 'slate',
    name: 'Slate',
    collection: 'professional',
    status: 'planned',
    personality: 'Serious, structured, reliable.',
    tokens: {
      accentPrimary:   '#0EA5E9',
      accentSecondary: '#334155',
      accentGlow:      'rgba(14, 165, 233, 0.25)',
      accentSubtle:    'rgba(14, 165, 233, 0.08)',
    },
  },
  {
    id: 'sage',
    name: 'Sage',
    collection: 'professional',
    status: 'planned',
    personality: 'Calm productivity. Clear focus.',
    tokens: {
      accentPrimary:   '#4D7C6F',
      accentSecondary: '#F59E0B',
      accentGlow:      'rgba(77, 124, 111, 0.25)',
      accentSubtle:    'rgba(77, 124, 111, 0.08)',
    },
  },
  {
    id: 'carbon',
    name: 'Carbon',
    collection: 'professional',
    status: 'planned',
    personality: 'Industrial bold. High contrast.',
    tokens: {
      accentPrimary:   '#EF4444',
      accentSecondary: '#E5E7EB',
      accentGlow:      'rgba(239, 68, 68, 0.25)',
      accentSubtle:    'rgba(239, 68, 68, 0.08)',
    },
  },
]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FUN COLLECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const funThemes: Theme[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    collection: 'fun',
    status: 'live',
    personality: 'Electric. Wild. Unforgettable.',
    tokens: {
      accentPrimary:   '#FF2D9B',
      accentSecondary: '#00F5FF',
      accentGlow:      'rgba(255, 45, 155, 0.25)',
      accentSubtle:    'rgba(255, 45, 155, 0.08)',
    },
  },
  {
    id: 'shinigami',
    name: 'Shinigami',
    collection: 'fun',
    status: 'planned',
    personality: 'Dark gold. Deadly elegant.',
    tokens: {
      accentPrimary:   '#C9A84C',
      accentSecondary: '#1A1A2E',
      accentGlow:      'rgba(201, 168, 76, 0.25)',
      accentSubtle:    'rgba(201, 168, 76, 0.08)',
    },
  },
  {
    id: 'titan',
    name: 'Titan',
    collection: 'fun',
    status: 'planned',
    personality: 'Military grit. Earned strength.',
    tokens: {
      accentPrimary:   '#8B6914',
      accentSecondary: '#2D5A3D',
      accentGlow:      'rgba(139, 105, 20, 0.25)',
      accentSubtle:    'rgba(139, 105, 20, 0.08)',
    },
  },
  {
    id: 'nebula',
    name: 'Nebula',
    collection: 'fun',
    status: 'planned',
    personality: 'Cosmic scale. Infinite depth.',
    tokens: {
      accentPrimary:   '#9B59B6',
      accentSecondary: '#E74C3C',
      accentGlow:      'rgba(155, 89, 182, 0.25)',
      accentSubtle:    'rgba(155, 89, 182, 0.08)',
    },
  },
  {
    id: 'matrixx',
    name: 'Matrixx',
    collection: 'fun',
    status: 'planned',
    personality: 'Terminal green. Digital reality.',
    tokens: {
      accentPrimary:   '#00FF41',
      accentSecondary: '#003B00',
      accentGlow:      'rgba(0, 255, 65, 0.25)',
      accentSubtle:    'rgba(0, 255, 65, 0.08)',
    },
  },
  {
    id: 'gotham',
    name: 'Gotham',
    collection: 'fun',
    status: 'planned',
    personality: 'Dark knight energy. Zero compromise.',
    tokens: {
      accentPrimary:   '#FFD700',
      accentSecondary: '#1C1C1C',
      accentGlow:      'rgba(255, 215, 0, 0.25)',
      accentSubtle:    'rgba(255, 215, 0, 0.08)',
    },
  },
  {
    id: 'akira',
    name: 'Akira',
    collection: 'fun',
    status: 'planned',
    personality: 'Neo Tokyo. Speed and chaos.',
    tokens: {
      accentPrimary:   '#FF4500',
      accentSecondary: '#0A0AFF',
      accentGlow:      'rgba(255, 69, 0, 0.25)',
      accentSubtle:    'rgba(255, 69, 0, 0.08)',
    },
  },
  {
    id: 'hobbit',
    name: 'Hobbit',
    collection: 'fun',
    status: 'planned',
    personality: 'Earthy warmth. An unexpected journey.',
    tokens: {
      accentPrimary:   '#8B7355',
      accentSecondary: '#4A7C59',
      accentGlow:      'rgba(139, 115, 85, 0.25)',
      accentSubtle:    'rgba(139, 115, 85, 0.08)',
    },
  },
]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EXPORTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const themes: Theme[] = [
  ...professionalThemes,
  ...funThemes,
]

export const liveThemes = themes.filter(t => t.status === 'live')

export const themesByCollection = {
  professional: professionalThemes,
  fun: funThemes,
}

export const getTheme = (id: ThemeId): Theme => {
  const theme = themes.find(t => t.id === id)
  if (!theme) throw new Error(`Theme "${id}" not found`)
  return theme
}

// Applies a theme to the document root
// Call this whenever setTheme() is triggered
export const applyTheme = (id: ThemeId): void => {
  const theme = getTheme(id)
  const root = document.documentElement

  root.setAttribute('data-theme', id)
  root.style.setProperty('--mark-accent-primary',   theme.tokens.accentPrimary)
  root.style.setProperty('--mark-accent-secondary', theme.tokens.accentSecondary)
  root.style.setProperty('--mark-accent-glow',      theme.tokens.accentGlow)
  root.style.setProperty('--mark-accent-subtle',    theme.tokens.accentSubtle)
}

export const defaultTheme: ThemeId = 'monochrome'
