'use client';

/**
 * LivePreview Component
 * 
 * Renders live preview instances of MARK UI components.
 * Uses a switch statement to render the appropriate component based on componentId.
 * Each preview uses minimal props to showcase the component's default state.
 */

interface LivePreviewProps {
  componentId: string;
}

export default function LivePreview({ componentId }: LivePreviewProps) {
  // Mini dark stage area styling
  const stageStyles: React.CSSProperties = {
    background: 'var(--mark-bg)',
    borderRadius: 'var(--mark-radius-md)',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80px',
  };

  // Render appropriate component based on componentId
  switch (componentId) {
    case 'Button':
      return (
        <div style={stageStyles}>
          <button
            style={{
              background: 'var(--mark-accent-primary)',
              color: 'var(--mark-bg)',
              padding: '8px 16px',
              borderRadius: 'var(--mark-radius-md)',
              border: 'none',
              fontFamily: 'var(--mark-font-display)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Click me
          </button>
        </div>
      );

    case 'Input':
      return (
        <div style={stageStyles}>
          <input
            type="text"
            placeholder="Type here..."
            style={{
              background: 'var(--mark-bg-elevated)',
              border: '1px solid var(--mark-border)',
              borderRadius: 'var(--mark-radius-md)',
              padding: '8px 12px',
              color: 'var(--mark-text)',
              fontFamily: 'var(--mark-font-body)',
              width: '200px',
            }}
          />
        </div>
      );

    case 'Checkbox':
      return (
        <div style={stageStyles}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              defaultChecked
              style={{
                width: '18px',
                height: '18px',
                accentColor: 'var(--mark-accent-primary)',
                cursor: 'pointer',
              }}
            />
            <span style={{ color: 'var(--mark-text)', fontFamily: 'var(--mark-font-body)' }}>
              Check me
            </span>
          </label>
        </div>
      );

    case 'Toggle':
      return (
        <div style={stageStyles}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div
              style={{
                width: '44px',
                height: '24px',
                background: 'var(--mark-accent-primary)',
                borderRadius: '12px',
                position: 'relative',
                transition: 'background 0.2s',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  background: 'var(--mark-bg)',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '3px',
                  right: '3px',
                  transition: 'transform 0.2s',
                }}
              />
            </div>
            <span style={{ color: 'var(--mark-text)', fontFamily: 'var(--mark-font-body)' }}>
              Enabled
            </span>
          </label>
        </div>
      );

    case 'Select':
      return (
        <div style={stageStyles}>
          <select
            style={{
              background: 'var(--mark-bg-elevated)',
              border: '1px solid var(--mark-border)',
              borderRadius: 'var(--mark-radius-md)',
              padding: '8px 12px',
              color: 'var(--mark-text)',
              fontFamily: 'var(--mark-font-body)',
              width: '200px',
              cursor: 'pointer',
            }}
          >
            <option>Choose option...</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      );

    case 'Badge':
      return (
        <div style={stageStyles}>
          <span
            style={{
              background: 'var(--mark-accent-primary)',
              color: 'var(--mark-bg)',
              padding: '4px 12px',
              borderRadius: 'var(--mark-radius-full)',
              fontFamily: 'var(--mark-font-display)',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            New
          </span>
        </div>
      );

    case 'Avatar':
      return (
        <div style={stageStyles}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--mark-accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mark-bg)',
              fontFamily: 'var(--mark-font-display)',
              fontWeight: 600,
              fontSize: '18px',
            }}
          >
            JD
          </div>
        </div>
      );

    case 'Card':
      return (
        <div style={stageStyles}>
          <div
            style={{
              background: 'var(--mark-bg-elevated)',
              border: '1px solid var(--mark-border)',
              borderRadius: 'var(--mark-radius-lg)',
              padding: '16px',
              width: '180px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--mark-font-display)',
                fontWeight: 600,
                color: 'var(--mark-text)',
                marginBottom: '8px',
              }}
            >
              Card Title
            </div>
            <div
              style={{
                fontFamily: 'var(--mark-font-body)',
                fontSize: '14px',
                color: 'var(--mark-text-muted)',
              }}
            >
              Card content goes here
            </div>
          </div>
        </div>
      );

    case 'Tooltip':
      return (
        <div style={stageStyles}>
          <div style={{ position: 'relative' }}>
            <button
              style={{
                background: 'var(--mark-bg-elevated)',
                border: '1px solid var(--mark-border)',
                borderRadius: 'var(--mark-radius-md)',
                padding: '8px 16px',
                color: 'var(--mark-text)',
                fontFamily: 'var(--mark-font-body)',
                cursor: 'pointer',
              }}
            >
              Hover me
            </button>
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '8px',
                background: 'var(--mark-bg-surface)',
                border: '1px solid var(--mark-border)',
                borderRadius: 'var(--mark-radius-sm)',
                padding: '4px 8px',
                fontSize: '12px',
                color: 'var(--mark-text)',
                fontFamily: 'var(--mark-font-body)',
                whiteSpace: 'nowrap',
              }}
            >
              Tooltip text
            </div>
          </div>
        </div>
      );

    case 'Tag':
      return (
        <div style={stageStyles}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                background: 'var(--mark-bg-elevated)',
                border: '1px solid var(--mark-border)',
                borderRadius: 'var(--mark-radius-md)',
                padding: '4px 12px',
                fontFamily: 'var(--mark-font-body)',
                fontSize: '13px',
                color: 'var(--mark-text)',
              }}
            >
              React
            </span>
            <span
              style={{
                background: 'var(--mark-bg-elevated)',
                border: '1px solid var(--mark-border)',
                borderRadius: 'var(--mark-radius-md)',
                padding: '4px 12px',
                fontFamily: 'var(--mark-font-body)',
                fontSize: '13px',
                color: 'var(--mark-text)',
              }}
            >
              TypeScript
            </span>
          </div>
        </div>
      );

    case 'Alert':
      return (
        <div style={stageStyles}>
          <div
            style={{
              background: 'var(--mark-bg-elevated)',
              border: '1px solid var(--mark-accent-primary)',
              borderRadius: 'var(--mark-radius-md)',
              padding: '12px 16px',
              width: '220px',
              display: 'flex',
              gap: '8px',
            }}
          >
            <span style={{ color: 'var(--mark-accent-primary)', fontSize: '18px' }}>ℹ</span>
            <div>
              <div
                style={{
                  fontFamily: 'var(--mark-font-display)',
                  fontWeight: 600,
                  color: 'var(--mark-text)',
                  fontSize: '14px',
                  marginBottom: '4px',
                }}
              >
                Alert Title
              </div>
              <div
                style={{
                  fontFamily: 'var(--mark-font-body)',
                  fontSize: '12px',
                  color: 'var(--mark-text-muted)',
                }}
              >
                This is an alert message
              </div>
            </div>
          </div>
        </div>
      );

    case 'Toast':
      return (
        <div style={stageStyles}>
          <div
            style={{
              background: 'var(--mark-bg-surface)',
              border: '1px solid var(--mark-border)',
              borderRadius: 'var(--mark-radius-md)',
              padding: '12px 16px',
              width: '200px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--mark-font-display)',
                fontWeight: 600,
                color: 'var(--mark-text)',
                fontSize: '14px',
              }}
            >
              Success!
            </div>
            <div
              style={{
                fontFamily: 'var(--mark-font-body)',
                fontSize: '12px',
                color: 'var(--mark-text-muted)',
                marginTop: '4px',
              }}
            >
              Action completed
            </div>
          </div>
        </div>
      );

    case 'Spinner':
      return (
        <div style={stageStyles}>
          <div
            style={{
              width: '32px',
              height: '32px',
              border: '3px solid var(--mark-border)',
              borderTop: '3px solid var(--mark-accent-primary)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <style jsx>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      );

    case 'Skeleton':
      return (
        <div style={stageStyles}>
          <div style={{ width: '200px' }}>
            <div
              style={{
                height: '16px',
                background: 'var(--mark-bg-elevated)',
                borderRadius: 'var(--mark-radius-sm)',
                marginBottom: '8px',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
            <div
              style={{
                height: '16px',
                background: 'var(--mark-bg-elevated)',
                borderRadius: 'var(--mark-radius-sm)',
                width: '70%',
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: '0.2s',
              }}
            />
          </div>
          <style jsx>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}</style>
        </div>
      );

    case 'Modal':
      return (
        <div style={stageStyles}>
          <div
            style={{
              fontFamily: 'var(--mark-font-body)',
              fontSize: '13px',
              color: 'var(--mark-text-muted)',
              textAlign: 'center',
            }}
          >
            Click card to preview
          </div>
        </div>
      );

    case 'Drawer':
      return (
        <div style={stageStyles}>
          <div
            style={{
              fontFamily: 'var(--mark-font-body)',
              fontSize: '13px',
              color: 'var(--mark-text-muted)',
              textAlign: 'center',
            }}
          >
            Click card to preview
          </div>
        </div>
      );

    case 'Divider':
      return (
        <div style={stageStyles}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              style={{
                height: '1px',
                background: 'var(--mark-border)',
                width: '100%',
              }}
            />
            <div
              style={{
                height: '1px',
                background: 'var(--mark-border)',
                width: '100%',
                opacity: 0.5,
              }}
            />
          </div>
        </div>
      );

    case 'Container':
      return (
        <div style={stageStyles}>
          <div
            style={{
              border: '2px dashed var(--mark-border)',
              borderRadius: 'var(--mark-radius-md)',
              padding: '16px',
              width: '180px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--mark-font-body)',
                fontSize: '12px',
                color: 'var(--mark-text-muted)',
              }}
            >
              Container content
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div style={stageStyles}>
          <div
            style={{
              fontFamily: 'var(--mark-font-body)',
              fontSize: '13px',
              color: 'var(--mark-text-muted)',
            }}
          >
            Preview unavailable
          </div>
        </div>
      );
  }
}
