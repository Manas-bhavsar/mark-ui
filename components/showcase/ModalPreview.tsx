'use client';

import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@/packages/core';

/**
 * ModalPreview Component
 * 
 * Renders a real modal component for the showcase page overlay.
 * Uses the actual Modal component with proper functionality.
 */

export default function ModalPreview() {
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
          Modal Component
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
          Click to see the modal in action
        </p>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
      </div>

      {/* Actual Modal */}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        size="md"
      >
        <ModalHeader
          title="Sample Modal"
          onClose={() => setIsOpen(false)}
        />
        <ModalBody>
          <p>This is what a modal looks like in MARK UI. It's centered, animated, and fully themeable with proper focus management and accessibility features.</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
