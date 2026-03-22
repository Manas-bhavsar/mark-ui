'use client';

import { useState } from 'react';
import { Drawer, Button } from '@/packages/core';

/**
 * DrawerPreview Component
 * 
 * Renders a real drawer component for the showcase page overlay.
 * Uses the actual Drawer component with proper functionality.
 */

export default function DrawerPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <div
        style={{
          background: 'var(--mark-bg-elevated)',
          border: '1px solid var(--mark-border)',
          borderRadius: 'var(--mark-radius-lg)',
          padding: '32px',
          width: '90%',
          maxWidth: '480px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--mark-font-display)',
            fontWeight: 700,
            fontSize: '20px',
            color: 'var(--mark-text)',
            margin: 0,
          }}
        >
          Drawer Component
        </h3>
        <p
          style={{
            fontFamily: 'var(--mark-font-body)',
            fontSize: '14px',
            color: 'var(--mark-text)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Click to see the drawer in action
        </p>
        <Button onClick={() => setIsOpen(true)}>
          Open Drawer
        </Button>
      </div>

      {/* Actual Drawer */}
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        placement="right"
        size="md"
      >
        <div style={{ padding: '24px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--mark-font-display)',
                fontWeight: 700,
                fontSize: '24px',
                color: 'var(--mark-fg)',
                margin: 0,
              }}
            >
              Sample Drawer
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close drawer"
            >
              ✕
            </Button>
          </div>
          <p
            style={{
              fontFamily: 'var(--mark-font-body)',
              fontSize: '16px',
              color: 'var(--mark-fg)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            This is what a drawer looks like in MARK UI. It slides in smoothly from the right side and can contain any content. It features proper focus management and accessibility.
          </p>
        </div>
      </Drawer>
    </>
  );
}
