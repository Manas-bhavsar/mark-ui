'use client';

/**
 * CategoryFilter Component
 * 
 * Individual filter pill for category selection in the showcase page.
 * Displays category label with optional count badge and handles active/inactive states.
 * 
 * Requirements: 4.5, 4.6, 4.7, 12.1, 12.2, 12.4
 */

import React from 'react';

interface CategoryFilterProps {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryFilter({ label, count, isActive, onClick }: CategoryFilterProps) {
  return (
    <button
      onClick={onClick}
      className={`category-filter ${isActive ? 'active' : 'inactive'}`}
      aria-pressed={isActive}
    >
      <span className="category-filter-label">{label}</span>
      {count !== undefined && (
        <span className="category-filter-count">{count}</span>
      )}
    </button>
  );
}
