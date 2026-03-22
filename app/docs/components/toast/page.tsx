'use client'

import { useState } from 'react'
import { Toast, ToastProvider, useToast } from '@/packages/core'

function ToastDemo() {
  const { toast } = useToast()

  const showSuccessToast = () => {
    toast({
      variant: 'success',
      title: 'Success!',
      description: 'Your action was completed successfully.',
      duration: 5000,
    })
  }

  const showErrorToast = () => {
    toast({
      variant: 'error',
      title: 'Error occurred',
      description: 'Something went wrong. Please try again.',
      duration: 0, // No auto-dismiss
      action: {
        label: 'Retry',
        onClick: () => console.log('Retry clicked'),
      },
    })
  }

  const showWarningToast = () => {
    toast({
      variant: 'warning',
      title: 'Warning',
      description: 'Please review your input before proceeding.',
    })
  }

  const showInfoToast = () => {
    toast({
      variant: 'info',
      title: 'Information',
      description: 'Here is some helpful information for you.',
      action: {
        label: 'Learn More',
        onClick: () => console.log('Learn more clicked'),
      },
    })
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <button
        onClick={showSuccessToast}
        style={{
          padding: '0.5rem 1rem',
          background: '#22C55E',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Show Success Toast
      </button>
      <button
        onClick={showErrorToast}
        style={{
          padding: '0.5rem 1rem',
          background: '#EF4444',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Show Error Toast
      </button>
      <button
        onClick={showWarningToast}
        style={{
          padding: '0.5rem 1rem',
          background: '#EAB308',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Show Warning Toast
      </button>
      <button
        onClick={showInfoToast}
        style={{
          padding: '0.5rem 1rem',
          background: '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Show Info Toast
      </button>
    </div>
  )
}

export default function ToastPage() {
  return (
    <ToastProvider>
      <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Toast Component</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Basic Usage</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--mark-fg-muted)' }}>
            Toast notifications provide temporary feedback to users. They support different variants,
            auto-dismiss functionality, action buttons, and keyboard accessibility.
          </p>
          <ToastDemo />
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Features</h2>
          <ul style={{ color: 'var(--mark-fg-muted)', lineHeight: 1.6 }}>
            <li>Four variants: success, error, warning, info</li>
            <li>Auto-dismiss with configurable timeout</li>
            <li>Manual dismissal with close button</li>
            <li>Action buttons for user interaction</li>
            <li>Toast stacking with proper spacing</li>
            <li>Keyboard dismissal (Escape key)</li>
            <li>Slide-in/out animations</li>
            <li>Reduced motion compliance</li>
            <li>Context-based toast management</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: '1rem' }}>Usage with ToastProvider</h2>
          <pre style={{ 
            background: 'var(--mark-bg-elevated)', 
            padding: '1rem', 
            borderRadius: '0.375rem',
            overflow: 'auto',
            fontSize: '0.875rem',
          }}>
{`import { ToastProvider, useToast } from '@/packages/core'

function App() {
  return (
    <ToastProvider>
      <YourAppContent />
    </ToastProvider>
  )
}

function YourComponent() {
  const { toast } = useToast()
  
  const showToast = () => {
    toast({
      variant: 'success',
      title: 'Success!',
      description: 'Operation completed.',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo clicked')
      }
    })
  }
  
  return <button onClick={showToast}>Show Toast</button>
}`}
          </pre>
        </section>
      </div>
    </ToastProvider>
  )
}