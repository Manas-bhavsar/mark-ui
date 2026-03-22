'use client'

import { useState } from 'react'
import { Drawer, Button } from '@/packages/core'

export default function DrawerPage() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const [topOpen, setTopOpen] = useState(false)
  const [bottomOpen, setBottomOpen] = useState(false)

  return (
    <div style={{ padding: 'var(--mark-px-lg)' }}>
      <h1 style={{ 
        fontSize: 'var(--mark-text-3xl)', 
        fontWeight: 'var(--mark-weight-bold)',
        color: 'var(--mark-fg)',
        marginBottom: 'var(--mark-space-6)'
      }}>
        Drawer Component
      </h1>

      <p style={{ 
        color: 'var(--mark-fg-muted)', 
        marginBottom: 'var(--mark-space-8)',
        lineHeight: 1.6
      }}>
        The Drawer component provides slide-out panels for navigation and secondary content.
        It supports four directional slides, focus trapping, and accessibility features.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--mark-space-4)',
        marginBottom: 'var(--mark-space-8)'
      }}>
        <Button onClick={() => setLeftOpen(true)}>
          Open Left Drawer
        </Button>
        <Button onClick={() => setRightOpen(true)}>
          Open Right Drawer
        </Button>
        <Button onClick={() => setTopOpen(true)}>
          Open Top Drawer
        </Button>
        <Button onClick={() => setBottomOpen(true)}>
          Open Bottom Drawer
        </Button>
      </div>

      {/* Left Drawer */}
      <Drawer
        open={leftOpen}
        onClose={() => setLeftOpen(false)}
        placement="left"
        size="md"
      >
        <div style={{ padding: 'var(--mark-px-lg)' }}>
          <h2 style={{ 
            fontSize: 'var(--mark-text-xl)', 
            fontWeight: 'var(--mark-weight-semibold)',
            color: 'var(--mark-fg)',
            marginBottom: 'var(--mark-space-4)'
          }}>
            Left Drawer
          </h2>
          <p style={{ color: 'var(--mark-fg-muted)', marginBottom: 'var(--mark-space-4)' }}>
            This drawer slides in from the left side of the screen.
          </p>
          <Button onClick={() => setLeftOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>

      {/* Right Drawer */}
      <Drawer
        open={rightOpen}
        onClose={() => setRightOpen(false)}
        placement="right"
        size="md"
      >
        <div style={{ padding: 'var(--mark-px-lg)' }}>
          <h2 style={{ 
            fontSize: 'var(--mark-text-xl)', 
            fontWeight: 'var(--mark-weight-semibold)',
            color: 'var(--mark-fg)',
            marginBottom: 'var(--mark-space-4)'
          }}>
            Right Drawer
          </h2>
          <p style={{ color: 'var(--mark-fg-muted)', marginBottom: 'var(--mark-space-4)' }}>
            This drawer slides in from the right side of the screen.
          </p>
          <Button onClick={() => setRightOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>

      {/* Top Drawer */}
      <Drawer
        open={topOpen}
        onClose={() => setTopOpen(false)}
        placement="top"
        size="sm"
      >
        <div style={{ padding: 'var(--mark-px-lg)' }}>
          <h2 style={{ 
            fontSize: 'var(--mark-text-xl)', 
            fontWeight: 'var(--mark-weight-semibold)',
            color: 'var(--mark-fg)',
            marginBottom: 'var(--mark-space-4)'
          }}>
            Top Drawer
          </h2>
          <p style={{ color: 'var(--mark-fg-muted)', marginBottom: 'var(--mark-space-4)' }}>
            This drawer slides in from the top of the screen.
          </p>
          <Button onClick={() => setTopOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>

      {/* Bottom Drawer */}
      <Drawer
        open={bottomOpen}
        onClose={() => setBottomOpen(false)}
        placement="bottom"
        size="sm"
      >
        <div style={{ padding: 'var(--mark-px-lg)' }}>
          <h2 style={{ 
            fontSize: 'var(--mark-text-xl)', 
            fontWeight: 'var(--mark-weight-semibold)',
            color: 'var(--mark-fg)',
            marginBottom: 'var(--mark-space-4)'
          }}>
            Bottom Drawer
          </h2>
          <p style={{ color: 'var(--mark-fg-muted)', marginBottom: 'var(--mark-space-4)' }}>
            This drawer slides in from the bottom of the screen.
          </p>
          <Button onClick={() => setBottomOpen(false)}>
            Close Drawer
          </Button>
        </div>
      </Drawer>
    </div>
  )
}