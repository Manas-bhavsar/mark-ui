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
import Select from '@mark-ui/components/inputs/Select/Select'
import Badge from '@mark-ui/components/display/Badge/Badge'
import Avatar from '@mark-ui/components/display/Avatar/Avatar'
import Card from '@mark-ui/components/display/Card/Card'
import Tag from '@mark-ui/components/display/Tag/Tag'
import Spinner from '@mark-ui/components/feedback/Spinner/Spinner'
import Skeleton from '@mark-ui/components/feedback/Skeleton/Skeleton'
import Alert from '@mark-ui/components/feedback/Alert/Alert'
import Divider from '@mark-ui/components/layout/Divider/Divider'
import Container from '@mark-ui/components/layout/Container/Container'
import Tooltip from '@mark-ui/components/layout/Tooltip/Tooltip'
import { Toast } from '@mark-ui/components/overlay/Toast'

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
          <Select 
            placeholder="Choose option..."
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
            style={{ width: '200px' }}
          />
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
          <Avatar 
            name="John Doe"
            size="md"
            shape="circle"
          />
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
          <Tooltip content="Tooltip text" position="top">
            <Button variant="secondary" size="sm">Hover me</Button>
          </Tooltip>
        </div>
      );

    case 'Tag':
      return (
        <div style={stageStyles}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Tag variant="default" size="sm">React</Tag>
            <Tag variant="primary" size="sm" removable>TypeScript</Tag>
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
            <Toast
              variant="success"
              title="Success!"
              message="Action completed"
              onDismiss={() => {}}
            />
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
