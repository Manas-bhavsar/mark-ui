'use client';

/**
 * FilterSidebar Component
 * 
 * Sticky sidebar containing category filter options for the showcase page.
 * Renders vertically on desktop with sticky positioning, horizontally on mobile.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4
 */

import React from 'react';
import CategoryFilter from './CategoryFilter';

type ComponentCategory = 'Inputs' | 'Display' | 'Feedback' | 'Overlay' | 'Layout';

interface FilterSidebarProps {
  activeFilter: ComponentCategory | 'All';
  onFilterChange: (filter: ComponentCategory | 'All') => void;
  componentCounts: Record<ComponentCategory, number>;
}

export default function FilterSidebar({ 
  activeFilter, 
  onFilterChange, 
  componentCounts 
}: FilterSidebarProps) {
  const filters: Array<{ label: ComponentCategory | 'All'; count?: number }> = [
    { label: 'All' },
    { label: 'Inputs', count: componentCounts.Inputs },
    { label: 'Display', count: componentCounts.Display },
    { label: 'Feedback', count: componentCounts.Feedback },
    { label: 'Overlay', count: componentCounts.Overlay },
    { label: 'Layout', count: componentCounts.Layout },
  ];

  return (
    <aside className="filter-sidebar">
      <h2 className="filter-sidebar-heading">Filter</h2>
      <div className="filter-sidebar-options">
        {filters.map((filter) => (
          <CategoryFilter
            key={filter.label}
            label={filter.label}
            count={filter.count}
            isActive={activeFilter === filter.label}
            onClick={() => onFilterChange(filter.label)}
          />
        ))}
      </div>
    </aside>
  );
}
