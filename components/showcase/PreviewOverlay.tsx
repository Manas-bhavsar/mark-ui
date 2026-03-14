'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalPreview from './ModalPreview';
import DrawerPreview from './DrawerPreview';

/**
 * PreviewOverlay Component
 * 
 * Full-screen overlay for Modal and Drawer component previews.
 * Features backdrop with blur, click-to-close, Escape key handling,
 * and fade animations using --mark-ease-snappy.
 * 
 * Validates Requirements: 9.1, 9.5, 9.6, 10.1, 10.5, 10.6
 */

interface PreviewOverlayProps {
  componentId: 'Modal' | 'Drawer' | null;
  onClose: () => void;
}

export default function PreviewOverlay({ componentId, onClose }: PreviewOverlayProps) {
  // Handle Escape key press to close overlay
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (componentId) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [componentId, onClose]);

  return (
    <AnimatePresence>
      {componentId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0, 0, 1], // --mark-ease-snappy
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={onClose} // Click backdrop to close
        >
          {/* Prevent clicks on preview content from closing overlay */}
          <div onClick={(e) => e.stopPropagation()}>
            {componentId === 'Modal' && <ModalPreview />}
            {componentId === 'Drawer' && <DrawerPreview onClose={onClose} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
