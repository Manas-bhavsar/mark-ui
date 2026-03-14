'use client';

import { ComponentMeta } from './componentRegistry';
import LivePreview from './LivePreview';
import { useState } from 'react';

/**
 * ComponentCard Component
 * 
 * Displays an individual component card with live preview and metadata.
 * Features hover effects and animated "View Docs" link.
 */

interface ComponentCardProps {
  component: ComponentMeta;
  onClick?: () => void;
}

export default function ComponentCard({ component, onClick }: ComponentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // If component has overlay (Modal/Drawer), trigger onClick
    if (component.hasOverlay && onClick) {
      onClick();
    }
  };

  return (
    <div
      className="component-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        background: 'var(--mark-bg-elevated)',
        border: '1px solid var(--mark-border)',
        borderColor: isHovered ? 'rgba(var(--mark-accent-primary), 0.4)' : 'var(--mark-border)',
        borderRadius: 'var(--mark-radius-lg)',
        padding: '32px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: component.hasOverlay ? 'pointer' : 'default',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top section: LivePreview */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <LivePreview componentId={component.id} />
      </div>

      {/* Bottom section: Metadata */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {/* Component name */}
        <h3
          style={{
            fontFamily: 'var(--mark-font-display)',
            fontWeight: 700,
            fontSize: '18px',
            color: 'var(--mark-text)',
            margin: 0,
          }}
        >
          {component.name}
        </h3>

        {/* Category tag and View Docs link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Category tag pill */}
          <span
            style={{
              background: 'var(--mark-bg)',
              border: '1px solid var(--mark-border)',
              borderRadius: 'var(--mark-radius-full)',
              padding: '4px 12px',
              fontFamily: 'var(--mark-font-body)',
              fontSize: '12px',
              color: 'var(--mark-text-muted)',
            }}
          >
            {component.category}
          </span>

          {/* View Docs link with slide-up animation */}
          <a
            href={`/docs#${component.id.toLowerCase()}`}
            onClick={(e) => {
              // Prevent navigation if card has overlay
              if (component.hasOverlay) {
                e.stopPropagation();
              }
            }}
            style={{
              fontFamily: 'var(--mark-font-body)',
              fontSize: '13px',
              color: 'var(--mark-accent-primary)',
              textDecoration: 'none',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'all 0.3s ease',
            }}
          >
            View Docs →
          </a>
        </div>
      </div>
    </div>
  );
}
