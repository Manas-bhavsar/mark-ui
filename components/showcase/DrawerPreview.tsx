'use client';

/**
 * DrawerPreview Component
 * 
 * Renders a sample drawer for the showcase page overlay.
 * Features slide-in from right, title, body text, and close button.
 * Uses CSS custom properties for theming and --mark-ease-snappy for animations.
 */

export default function DrawerPreview({ onClose }: { onClose?: () => void }) {
  return (
    <div
      style={{
        background: 'var(--mark-bg-elevated)',
        border: '1px solid var(--mark-border)',
        borderRadius: 'var(--mark-radius-lg)',
        padding: '32px',
        width: '90%',
        maxWidth: '420px',
        height: '100vh',
        boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'fixed',
        right: 0,
        top: 0,
      }}
    >
      {/* Header with Title and Close Button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--mark-font-display)',
            fontWeight: 700,
            fontSize: '24px',
            color: 'var(--mark-text)',
            margin: 0,
          }}
        >
          Sample Drawer
        </h2>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--mark-text)',
            cursor: 'pointer',
            fontSize: '24px',
            lineHeight: 1,
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s var(--mark-ease-snappy)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--mark-accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--mark-text)';
          }}
          aria-label="Close drawer"
        >
          ✕
        </button>
      </div>

      {/* Drawer Body */}
      <p
        style={{
          fontFamily: 'var(--mark-font-body)',
          fontSize: '16px',
          color: 'var(--mark-text)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        This is what a drawer looks like in MARK UI. It slides in smoothly and can contain any content.
      </p>
    </div>
  );
}
