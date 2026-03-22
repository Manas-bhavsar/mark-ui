'use client';

/**
 * LivePreview Component
 * 
 * Renders live instances of real MARK UI components.
 */

import Button from '@mark-ui/components/inputs/Button/Button'
import Input from '@mark-ui/components/inputs/Input/Input'
import Checkbox from '@mark-ui/components/inputs/Checkbox/Checkbox'
import Toggle from '@mark-ui/components/inputs/Toggle/Toggle'
import Badge from '@mark-ui/components/display/Badge/Badge'
import Card from '@mark-ui/components/display/Card/Card'
import Spinner from '@mark-ui/components/feedback/Spinner/Spinner'
import Skeleton from '@mark-ui/components/feedback/Skeleton/Skeleton'
import Alert from '@mark-ui/components/feedback/Alert/Alert'
import Divider from '@mark-ui/components/layout/Divider/Divider'
import Container from '@mark-ui/components/layout/Container/Container'

interface LivePreviewProps {
  componentId: string;
}

const stageStyles: React.CSSProperties = {
  background: 'var(--mark-bg)',
  borderRadius: 'var(--mark-radius-md)',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80px',
};

export default function LivePreview({ componentId }: LivePreviewProps) {
  switch (componentId) {
    case 'Button':
      return (
        <div style={stageStyles}>
          <Button variant="primary" size="md">Click me</Button>
        </div>
      );

    case 'Input':
      return (
        <div style={stageStyles}>
          <Input placeholder="Type here..." />
        </div>
      );

    case 'Checkbox':
      return (
        <div style={stageStyles}>
          <Checkbox label="Check me" defaultChecked />
        </div>
      );

    case 'Toggle':
      return (
        <div style={stageStyles}>
          <Toggle label="Enabled" defaultChecked />
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
              color: 'var(--mark-fg)',
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
          <Badge variant="accent">New</Badge>
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
          <Card variant="default" padding="sm">
            <div
              style={{
                fontFamily: 'var(--mark-font-display)',
                fontWeight: 600,
                color: 'var(--mark-fg)',
                marginBottom: '4px',
                fontSize: '14px',
              }}
            >
              Card Title
            </div>
            <div
              style={{
                fontFamily: 'var(--mark-font-body)',
                fontSize: '13px',
                color: 'var(--mark-fg-muted)',
              }}
            >
              Card content goes here
            </div>
          </Card>
        </div>
      );

    case 'Tooltip':
      return (
        <div style={stageStyles}>
          <div
            className="tooltip-trigger-group"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <Button variant="secondary" size="sm">Hover me</Button>
            <div
              className="tooltip-popup"
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
                color: 'var(--mark-fg)',
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
            <Badge variant="default" size="sm">React</Badge>
            <Badge variant="default" size="sm">TypeScript</Badge>
          </div>
        </div>
      );

    case 'Alert':
      return (
        <div style={{ ...stageStyles, padding: '12px', alignItems: 'flex-start' }}>
          <div style={{ width: '100%', maxWidth: '240px', transform: 'scale(0.85)', transformOrigin: 'center' }}>
            <Alert variant="info" title="Alert">
              Info message
            </Alert>
          </div>
        </div>
      );

    case 'Toast':
      return (
        <div style={{ ...stageStyles, padding: '12px' }}>
          <div style={{ transform: 'scale(0.9)', transformOrigin: 'center', minWidth: '180px' }}>
            <Card variant="default" padding="sm">
              <div
                style={{
                  fontFamily: 'var(--mark-font-display)',
                  fontWeight: 600,
                  color: 'var(--mark-fg)',
                  fontSize: '13px',
                }}
              >
                Success!
              </div>
              <div
                style={{
                  fontFamily: 'var(--mark-font-body)',
                  fontSize: '12px',
                  color: 'var(--mark-fg-muted)',
                  marginTop: '2px',
                }}
              >
                Action completed
              </div>
            </Card>
          </div>
        </div>
      );

    case 'Spinner':
      return (
        <div style={stageStyles}>
          <Spinner size="md" color="accent" />
        </div>
      );

    case 'Skeleton':
      return (
        <div style={stageStyles}>
          <div style={{ width: '160px' }}>
            <Skeleton variant="text" lines={3} />
          </div>
        </div>
      );

    case 'Modal':
      return (
        <div style={stageStyles}>
          <div
            style={{
              fontFamily: 'var(--mark-font-body)',
              fontSize: '13px',
              color: 'var(--mark-fg-muted)',
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
              color: 'var(--mark-fg-muted)',
              textAlign: 'center',
            }}
          >
            Click card to preview
          </div>
        </div>
      );

    case 'Divider':
      return (
        <div style={{ ...stageStyles, flexDirection: 'column', gap: '12px', width: '100%' }}>
          <Divider />
          <Divider label="Section" />
        </div>
      );

    case 'Container':
      return (
        <div style={stageStyles}>
          <Container size="sm" padding>
            <div
              style={{
                border: '2px dashed var(--mark-border)',
                borderRadius: 'var(--mark-radius-md)',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mark-font-body)',
                  fontSize: '12px',
                  color: 'var(--mark-fg-muted)',
                }}
              >
                Container content
              </div>
            </div>
          </Container>
        </div>
      );

    default:
      return (
        <div style={stageStyles}>
          <div
            style={{
              fontFamily: 'var(--mark-font-body)',
              fontSize: '13px',
              color: 'var(--mark-fg-muted)',
            }}
          >
            Preview unavailable
          </div>
        </div>
      );
  }
}
