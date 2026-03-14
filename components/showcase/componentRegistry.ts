/**
 * Component Registry
 * 
 * Single source of truth for component metadata in the showcase page.
 * Defines all 18 MARK UI components with their categories and properties.
 */

// Type Definitions

export type ComponentCategory = 'Inputs' | 'Display' | 'Feedback' | 'Overlay' | 'Layout';

export interface ComponentMeta {
  id: string;
  name: string;
  category: ComponentCategory;
  hasOverlay: boolean;
}

export type FilterState = ComponentCategory | 'All';

export type OverlayState = 'Modal' | 'Drawer' | null;

// Component Categories

export const COMPONENT_CATEGORIES = {
  Inputs: ['Button', 'Input', 'Checkbox', 'Toggle', 'Select'],
  Display: ['Badge', 'Avatar', 'Card', 'Tooltip', 'Tag'],
  Feedback: ['Alert', 'Toast', 'Spinner', 'Skeleton'],
  Overlay: ['Modal', 'Drawer'],
  Layout: ['Divider', 'Container'],
} as const;

// Component Registry

export const COMPONENT_REGISTRY: ComponentMeta[] = [
  // Inputs (5)
  { id: 'Button', name: 'Button', category: 'Inputs', hasOverlay: false },
  { id: 'Input', name: 'Input', category: 'Inputs', hasOverlay: false },
  { id: 'Checkbox', name: 'Checkbox', category: 'Inputs', hasOverlay: false },
  { id: 'Toggle', name: 'Toggle', category: 'Inputs', hasOverlay: false },
  { id: 'Select', name: 'Select', category: 'Inputs', hasOverlay: false },
  
  // Display (5)
  { id: 'Badge', name: 'Badge', category: 'Display', hasOverlay: false },
  { id: 'Avatar', name: 'Avatar', category: 'Display', hasOverlay: false },
  { id: 'Card', name: 'Card', category: 'Display', hasOverlay: false },
  { id: 'Tooltip', name: 'Tooltip', category: 'Display', hasOverlay: false },
  { id: 'Tag', name: 'Tag', category: 'Display', hasOverlay: false },
  
  // Feedback (4)
  { id: 'Alert', name: 'Alert', category: 'Feedback', hasOverlay: false },
  { id: 'Toast', name: 'Toast', category: 'Feedback', hasOverlay: false },
  { id: 'Spinner', name: 'Spinner', category: 'Feedback', hasOverlay: false },
  { id: 'Skeleton', name: 'Skeleton', category: 'Feedback', hasOverlay: false },
  
  // Overlay (2)
  { id: 'Modal', name: 'Modal', category: 'Overlay', hasOverlay: true },
  { id: 'Drawer', name: 'Drawer', category: 'Overlay', hasOverlay: true },
  
  // Layout (2)
  { id: 'Divider', name: 'Divider', category: 'Layout', hasOverlay: false },
  { id: 'Container', name: 'Container', category: 'Layout', hasOverlay: false },
];

// Component Counts

export const COMPONENT_COUNTS: Record<ComponentCategory, number> = {
  Inputs: 5,
  Display: 5,
  Feedback: 4,
  Overlay: 2,
  Layout: 2,
};
