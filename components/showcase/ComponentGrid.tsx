'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { ComponentMeta, FilterState } from './componentRegistry';
import { COMPONENT_CATEGORIES } from './componentRegistry';
import ComponentCard from './ComponentCard';
import CategoryDivider from './CategoryDivider';

interface ComponentGridProps {
  components: ComponentMeta[];
  activeFilter: FilterState;
  onCardClick: (componentId: string) => void;
}

/**
 * ComponentGrid Component
 * 
 * Client Component that renders a responsive grid of component cards with Framer Motion animations.
 * Implements filtering, staggered entrance animations, and category dividers.
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 8.1, 8.2, 13.1-13.7
 */
export default function ComponentGrid({ components, activeFilter, onCardClick }: ComponentGridProps) {
  // Filter components based on activeFilter
  const filteredComponents = activeFilter === 'All'
    ? components
    : components.filter(component => component.category === activeFilter);

  // Group components by category for rendering with dividers
  const shouldShowDividers = activeFilter === 'All';
  
  return (
    <div className="component-grid">
      <AnimatePresence mode="wait">
        {shouldShowDividers ? (
          // Render with category dividers when showing all components
          <motion.div
            key="all-categories"
            className="component-grid-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Object.entries(COMPONENT_CATEGORIES).map(([category, componentIds], categoryIndex) => {
              const categoryComponents = components.filter(c => c.category === category);
              
              return (
                <div key={category} className="category-section">
                  <CategoryDivider category={category as any} />
                  <div className="component-grid-items">
                    {categoryComponents.map((component, index) => (
                      <motion.div
                        key={component.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0, 0, 1],
                          delay: (categoryIndex * 5 + index) * 0.05, // Staggered entrance
                        }}
                      >
                        <ComponentCard
                          component={component}
                          onClick={() => onCardClick(component.id)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        ) : (
          // Render without dividers when filtering by specific category
          <motion.div
            key={activeFilter}
            className="component-grid-items"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredComponents.map((component, index) => (
              <motion.div
                key={component.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0, 0, 1],
                  delay: index * 0.05, // Staggered entrance
                }}
              >
                <ComponentCard
                  component={component}
                  onClick={() => onCardClick(component.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
