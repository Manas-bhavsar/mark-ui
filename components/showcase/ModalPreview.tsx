'use client';

/**
 * ModalPreview Component
 * 
 * Renders a sample modal for the showcase page overlay.
 * Features centered layout, title, body text, and action buttons.
 * Uses CSS custom properties for theming and --mark-ease-snappy for animations.
 */

export default function ModalPreview() {
  return (
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
        gap: '24px',
      }}
    >
      {/* Modal Title */}
      <h2
        style={{
          fontFamily: 'var(--mark-font-display)',
          fontWeight: 700,
          fontSize: '24px',
          color: 'var(--mark-text)',
          margin: 0,
        }}
      >
        Sample Modal
      </h2>

      {/* Modal Body */}
      <p
        style={{
          fontFamily: 'var(--mark-font-body)',
          fontSize: '16px',
          color: 'var(--mark-text)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        This is what a modal looks like in MARK UI. It&apos;s centered, animated, and fully themeable.
      </p>

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-end',
        }}
      >
        {/* Cancel Button */}
        <button
          style={{
            background: 'var(--mark-bg)',
            border: '1px solid var(--mark-border)',
            borderRadius: 'var(--mark-radius-md)',
            padding: '10px 20px',
            fontFamily: 'var(--mark-font-display)',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--mark-text)',
            cursor: 'pointer',
            transition: 'all 0.2s var(--mark-ease-snappy)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--mark-accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--mark-border)';
          }}
        >
          Cancel
        </button>

        {/* Confirm Button */}
        <button
          style={{
            background: 'var(--mark-accent-primary)',
            border: 'none',
            borderRadius: 'var(--mark-radius-md)',
            padding: '10px 20px',
            fontFamily: 'var(--mark-font-display)',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--mark-bg)',
            cursor: 'pointer',
            transition: 'all 0.2s var(--mark-ease-snappy)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
