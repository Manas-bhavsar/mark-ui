'use client';

/**
 * ComponentsShowcaseLayout Component
 * 
 * Client Component that manages filter and overlay state for the showcase page.
 * Renders a two-column layout with FilterSidebar and ComponentGrid on desktop,
 * switches to single-column layout on mobile with horizontal filter pills.
 * 
 * Requirements: 1.1, 1.2, 3.4, 4.3, 4.4, 13.1, 13.2
 */

import { useState } from 'react';
import FilterSidebar from './FilterSidebar';
import ComponentGrid from './ComponentGrid';
import PreviewOverlay from './PreviewOverlay';
import { 
  COMPONENT_REGISTRY, 
  COMPONENT_COUNTS,
  type FilterState,
  type OverlayState 
} from './componentRegistry';

export default function ComponentsShowcaseLayout() {
  const [activeFilter, setActiveFilter] = useState<FilterState>('All');
  const [overlayComponent, setOverlayComponent] = useState<OverlayState>(null);

  const handleFilterChange = (filter: FilterState) => {
    setActiveFilter(filter);
  };

  const handleCardClick = (componentId: string) => {
    // Only open overlay for Modal and Drawer components
    if (componentId === 'Modal' || componentId === 'Drawer') {
      setOverlayComponent(componentId);
    }
  };

  const handleCloseOverlay = () => {
    setOverlayComponent(null);
  };

  return (
    <>
      <div className="components-showcase-layout">
        <FilterSidebar
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          componentCounts={COMPONENT_COUNTS}
        />
        <ComponentGrid
          components={COMPONENT_REGISTRY}
          activeFilter={activeFilter}
          onCardClick={handleCardClick}
        />
      </div>
      <PreviewOverlay
        componentId={overlayComponent}
        onClose={handleCloseOverlay}
      />
    </>
  );
}
