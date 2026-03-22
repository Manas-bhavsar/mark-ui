"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function GothamAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <GothamClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <GothamToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <GothamCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <GothamMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <GothamDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

// Batarang SVG path (28×12 viewbox) — two swept wings with center
const BATARANG_PATH = "M14,12 L10,7 C4,6 0,2 0,0 C5,3 10,5 14,6 C18,5 23,3 28,0 C28,2 24,6 18,7 Z";

// Bat silhouette (20×12 viewbox)
const BAT_PATH = "M10,12 L8,8 C3,7 0,3 0,0 C4,2 8,4 10,5 C12,4 16,2 20,0 C20,3 17,7 12,8 Z";

// ─── CLICK — Batarang Throw ───────────────────────────────────────────────
function GothamClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const landX = cx + 180;
  const landY = cy;

  return (
    <>
      {/* Bat spotlight below button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'fixed',
          top: cy - 20,
          left: cx - 60,
          width: 120,
          height: 60,
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.2) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Batarang flying */}
      <motion.div
        initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        animate={{
          x: 180,
          y: [-0, -20, 0],
          rotate: 720,
          opacity: [1, 1, 1, 0],
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          y: { times: [0, 0.5, 1] },
          opacity: { times: [0, 0.7, 0.85, 1] },
        }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: cy - 6,
          left: cx - 14,
          width: 28,
          height: 12,
          pointerEvents: 'none',
        }}
      >
        <svg width="28" height="12" viewBox="0 0 28 12">
          <path d={BATARANG_PATH} fill="#1C1C1C" stroke="#FFD700" strokeWidth="0.8" />
        </svg>
      </motion.div>

      {/* Impact at landing point — 6 radial lines */}
      {[0,60,120,180,240,300].map((angle, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.38, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: landY,
            left: landX,
            width: 20,
            height: 2,
            backgroundColor: '#FFD700',
            transformOrigin: 'left center',
            rotate: angle,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── TOGGLE ON — Grapple Gun Fire ─────────────────────────────────────────
function GothamToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width - 14;
  const cy = rect.top + rect.height / 2;

  return (
    <>
      {/* Wire fires then retracts */}
      <motion.div
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: [0, 1, 1, 0], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 0.2, times: [0, 0.3, 0.6, 1] }}
        style={{
          position: 'fixed',
          top: cy - 1,
          left: rect.left,
          width: rect.width,
          height: 2,
          backgroundColor: '#FFD700',
          transformOrigin: 'left',
          boxShadow: '0 0 4px #FFD700',
          pointerEvents: 'none',
        }}
      />

      {/* Screen darkening vignette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.4 }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: cy - 60,
          left: cx - 60,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.3) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grapple clamp marks at thumb */}
      {[45, 135, 225, 315].map((angle, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.15, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: cy,
            left: cx,
            width: 12,
            height: 2,
            backgroundColor: '#FFD700',
            transformOrigin: 'left center',
            rotate: angle,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── CHECK — Bat Symbol Brand ─────────────────────────────────────────────
function GothamCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  return (
    <>
      {/* Golden spotlight from above */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 0.5, times: [0, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: rect.top - 30,
          left: cx - 20,
          width: 40,
          height: 50,
          background: 'linear-gradient(to bottom, rgba(255,215,0,0.3), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Bat descends */}
      <motion.div
        initial={{ y: -20, scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: [0, 1, 1, 0], filter: ['brightness(1)', 'brightness(1)', 'brightness(3)', 'brightness(1)'] }}
        transition={{ duration: 0.5, times: [0, 0.3, 0.6, 1] }}
        style={{
          position: 'fixed',
          top: cy - 6,
          left: cx - 10,
          width: 20,
          height: 12,
          pointerEvents: 'none',
          color: '#FFD700',
        }}
      >
        <svg width="20" height="12" viewBox="0 0 20 12" fill="currentColor">
          <path d={BAT_PATH} />
        </svg>
      </motion.div>

      {/* Gold sparkle ring — 6 diamonds */}
      {[0,60,120,180,240,300].map((angle, i) => {
        const r = Math.PI * angle / 180;
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{
              x: Math.cos(r) * 20,
              y: Math.sin(r) * 20,
              opacity: 0,
              scale: [0, 1, 0],
            }}
            transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut', scale: { times: [0, 0.5, 1] } }}
            onAnimationComplete={i === 5 ? onComplete : undefined}
            style={{
              position: 'fixed',
              top: cy - 3,
              left: cx - 3,
              width: 6,
              height: 6,
              backgroundColor: '#FFD700',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </>
  );
}

// ─── MOUNT — Night Descent ────────────────────────────────────────────────
function GothamMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      {/* Drop from darkness */}
      <motion.div
        initial={{ y: -40, filter: 'brightness(0)', opacity: 0 }}
        animate={{ y: 0, filter: ['brightness(0)', 'brightness(0)', 'brightness(1)'], opacity: [0, 1, 1] }}
        transition={{ duration: 0.45, times: [0, 0.67, 1], ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: 'inherit',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />
      {/* Gold glow pulse */}
      <motion.div
        initial={{ boxShadow: '0 0 0px 0px rgba(255,215,0,0)' }}
        animate={{ boxShadow: ['0 0 0px 0px rgba(255,215,0,0)', '0 0 16px 6px rgba(255,215,0,0.3)', '0 0 0px 0px rgba(255,215,0,0)'] }}
        transition={{ duration: 0.5, delay: 0.3, times: [0, 0.5, 1] }}
        onAnimationComplete={onComplete}
        style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, borderRadius: 'inherit', pointerEvents: 'none' }}
      />
    </>
  );
}

// ─── DISMISS — Into The Shadows ───────────────────────────────────────────
function GothamDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  return (
    <>
      {/* Dark vignette closing in */}
      {['top','bottom','left','right'].map((side, i) => {
        const styles: React.CSSProperties = {
          position: 'fixed',
          backgroundColor: 'rgba(0,0,0,0.8)',
          pointerEvents: 'none',
        };
        if (side === 'top') Object.assign(styles, { top: rect.top, left: rect.left, width: rect.width, height: 0, transformOrigin: 'top' });
        else if (side === 'bottom') Object.assign(styles, { bottom: window.innerHeight - rect.bottom, left: rect.left, width: rect.width, height: 0, transformOrigin: 'bottom' });
        else if (side === 'left') Object.assign(styles, { top: rect.top, left: rect.left, width: 0, height: rect.height, transformOrigin: 'left' });
        else Object.assign(styles, { top: rect.top, right: window.innerWidth - rect.right, width: 0, height: rect.height, transformOrigin: 'right' });

        const isH = side === 'top' || side === 'bottom';
        return (
          <motion.div
            key={side}
            initial={isH ? { scaleY: 0, opacity: 1 } : { scaleX: 0, opacity: 1 }}
            animate={isH ? { scaleY: 1, opacity: 0 } : { scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
            style={{ ...styles, ...(isH ? { height: rect.height / 2 } : { width: rect.width / 2 }) }}
          />
        );
      })}

      {/* Bat silhouette at center */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 0], opacity: [0, 0.8, 0] }}
        transition={{ duration: 0.3, delay: 0.1, times: [0, 0.5, 1] }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: cy - 6,
          left: cx - 10,
          width: 20,
          height: 12,
          color: '#FFD700',
          pointerEvents: 'none',
        }}
      >
        <svg width="20" height="12" viewBox="0 0 20 12" fill="currentColor">
          <path d={BAT_PATH} />
        </svg>
      </motion.div>
    </>
  );
}

function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete(); }, [onComplete]);
  return null;
}
