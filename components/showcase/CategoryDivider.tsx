import type { ComponentCategory } from './componentRegistry';

interface CategoryDividerProps {
  category: ComponentCategory;
}

/**
 * CategoryDivider Component
 * 
 * Server Component that renders a subtle divider label between category sections.
 * Only displayed when the "All" filter is active.
 * 
 * Requirements: 8.1, 8.2
 */
export default function CategoryDivider({ category }: CategoryDividerProps) {
  return (
    <div className="category-divider">
      <span className="category-divider-label">{category}</span>
    </div>
  );
}
