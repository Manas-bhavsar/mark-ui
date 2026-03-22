"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function CyberpunkAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <CyberpunkClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <CyberpunkToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <CyberpunkCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <CyberpunkMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <CyberpunkDismiss rect={rect} onComplete={onComplete} />;
    case 'focus':
      return <CyberpunkFocus rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

// ─── CLICK — Neon Gunshot ──────────────────────────────────────────────────
function CyberpunkClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  // Shell casing data (stable)
  const shellData = React.useRef({
    startX: rect.right - 10,
    startY: cy,
  }).current;

  // Smoke wist data
  const smokeData = React.useRef(
    [0, 60, 120].map((delay) => ({
      delay,
      dx: (Math.random() - 0.5) * 20,
    }))
  ).current;

  return (
    <>
      {/* Impact flash — white button overlay that brightens then fades */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          background: 'rgba(255,255,255,0.85)',
          mixBlendMode: 'screen',
          borderRadius: 6,
          pointerEvents: 'none',
        }}
      />

      {/* Muzzle flash starburst */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: rect.top + rect.height / 2 - 16,
          left: rect.right - 16,
          width: 32,
          height: 32,
          pointerEvents: 'none',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          {[0,45,90,135,180,225,270,315].map((angle, i) => {
            const r = Math.PI * angle / 180;
            const x2 = 16 + Math.cos(r) * 14;
            const y2 = 16 + Math.sin(r) * 14;
            return (
              <line key={i} x1="16" y1="16" x2={x2} y2={y2}
                stroke="#00F5FF" strokeWidth={i % 2 === 0 ? 2.5 : 1.5}
                strokeLinecap="round" />
            );
          })}
        </svg>
      </motion.div>

      {/* Bullet — elongated capsule shooting right */}
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 320, opacity: [1, 1, 0] }}
        transition={{ duration: 0.3, ease: [0.25, 0, 0, 1], delay: 0.04, opacity: { times: [0, 0.8, 1] } }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: cy - 3,
          left: rect.right,
          width: 32,
          height: 6,
          borderRadius: 9999,
          background: 'linear-gradient(to right, transparent, #FF2D9B, #00F5FF)',
          boxShadow: '0 0 12px 4px #00F5FF',
          pointerEvents: 'none',
        }}
      />

      {/* Shell casing — tumbles bottom-right */}
      <motion.div
        initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        animate={{ x: 24, y: 64, rotate: 540, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 1, 1], delay: 0.04 }}
        style={{
          position: 'fixed',
          top: shellData.startY,
          left: shellData.startX,
          width: 10,
          height: 5,
          borderRadius: 2,
          backgroundColor: '#FFD700',
          boxShadow: '0 0 4px #FFD700',
          pointerEvents: 'none',
        }}
      />

      {/* Smoke wisps x3 */}
      {smokeData.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.5, opacity: 0.15, x: 0, y: 0 }}
          animate={{ scale: 2, opacity: 0, x: s.dx, y: -24 }}
          transition={{ duration: 0.5, delay: s.delay / 1000, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2 - 8,
            left: rect.right - 8,
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            filter: 'blur(4px)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── TOGGLE ON — High Voltage Arc ─────────────────────────────────────────
function CyberpunkToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width - 14; // thumb arrival (ON side)
  const cy = rect.top + rect.height / 2;

  const sparks = React.useRef(
    Array.from({ length: 12 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      speed: 80 + Math.random() * 120,
      size: 3 + Math.random() * 5,
      color: ['#FF2D9B', '#00F5FF', '#FFFFFF'][Math.floor(Math.random() * 3)],
      isSquare: Math.random() > 0.5,
      lifetime: 600 + Math.random() * 300,
      rotSpeed: (Math.random() - 0.5) * 720,
    }))
  ).current;

  return (
    <>
      {/* Track glow pulse */}
      <motion.div
        initial={{ boxShadow: '0 0 0px 0px #FF2D9B' }}
        animate={{ boxShadow: ['0 0 0px 0px rgba(255,45,155,0)', '0 0 20px 6px #FF2D9B', '0 0 8px 2px rgba(255,45,155,0.3)'] }}
        transition={{ duration: 0.4 }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: 9999,
          pointerEvents: 'none',
        }}
      />

      {/* Spark particles */}
      {sparks.map((s, i) => {
        const vx = Math.cos(s.angle) * s.speed;
        const vy = -80 - Math.random() * 80; // burst upward
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{
              x: vx,
              y: [0, vy, vy + 60], // up then gravity pull down
              opacity: [1, 1, 0],
              rotate: s.rotSpeed,
            }}
            transition={{
              duration: s.lifetime / 1000,
              ease: 'easeOut',
              delay: i * 0.01,
              y: { times: [0, 0.35, 1] },
              opacity: { times: [0, 0.7, 1] },
            }}
            style={{
              position: 'fixed',
              top: cy - s.size / 2,
              left: cx - s.size / 2,
              width: s.size,
              height: s.size,
              borderRadius: s.isSquare ? 1 : '50%',
              backgroundColor: s.color,
              boxShadow: `0 0 4px 2px ${s.color}`,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </>
  );
}

// ─── CHECK — System Hack Glitch ───────────────────────────────────────────
function CyberpunkCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const pixels = React.useRef(
    Array.from({ length: 6 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      dist: 12 + Math.random() * 20,
    }))
  ).current;

  return (
    <>
      {/* Red chromatic aberration copy */}
      <motion.div
        initial={{ x: 4, y: -2, opacity: 0.9 }}
        animate={{ x: 0, y: 0, opacity: 0 }}
        transition={{ duration: 0.28 }}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: '#FF2D9B',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          borderRadius: 4,
        }}
      />

      {/* Cyan chromatic aberration copy */}
      <motion.div
        initial={{ x: -4, y: 2, opacity: 0.9 }}
        animate={{ x: 0, y: 0, opacity: 0 }}
        transition={{ duration: 0.28 }}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: '#00F5FF',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          borderRadius: 4,
        }}
      />

      {/* White lock flash at 200ms */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 0.35, times: [0, 0.57, 0.65, 1] }}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'white',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          borderRadius: 4,
        }}
      />

      {/* Scan line sweeping down */}
      <motion.div
        initial={{ y: 0, opacity: 0.6 }}
        animate={{ y: rect.height, opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.2, ease: 'linear' }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: 2,
          backgroundColor: '#00F5FF',
          pointerEvents: 'none',
        }}
      />

      {/* Pixel scatter at lock moment */}
      {pixels.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: Math.cos(p.angle) * p.dist,
            y: Math.sin(p.angle) * p.dist,
            opacity: 0,
          }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2 - 2,
            left: rect.left + rect.width / 2 - 2,
            width: 4,
            height: 4,
            backgroundColor: '#FF2D9B',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── MOUNT — Neon Sign Flicker (DRAMATIC) ─────────────────────────────────
function CyberpunkMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0.3, 1, 1],
          scale: [1, 1.1, 1, 1.05, 1, 1, 1],
          filter: [
            'brightness(1)',
            'brightness(4)',
            'brightness(1)',
            'brightness(2)',
            'brightness(1)',
            'brightness(1.5)',
            'brightness(1)',
          ],
        }}
        transition={{
          duration: 0.32,
          times: [0, 0.19, 0.38, 0.5, 0.63, 0.75, 1],
        }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'var(--mark-accent-secondary, #00F5FF)',
          mixBlendMode: 'screen',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }}
      />
      {/* Glow bloom */}
      <motion.div
        initial={{ scale: 0, opacity: 0.4 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: rect.top + rect.height / 2 - 30,
          left: rect.left + rect.width / 2 - 30,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FF2D9B 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}

// ─── DISMISS — CRT Shutdown ───────────────────────────────────────────────
function CyberpunkDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Scan lines overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0.4, 0] }}
        transition={{ duration: 0.28, times: [0, 0.36, 0.71, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 4px)',
        }}
      />
      {/* CRT vertical collapse */}
      <motion.div
        initial={{ scaleY: 1, filter: 'brightness(1)', opacity: 1 }}
        animate={{ scaleY: [1, 1, 0.08, 0.08, 0], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(3)', 'brightness(3)', 'brightness(0)'], opacity: [1, 1, 1, 1, 0] }}
        transition={{ duration: 0.3, times: [0, 0.33, 0.66, 0.85, 1], ease: 'easeIn' }}
        onAnimationComplete={onComplete}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 245, 255, 0.08)',
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}

// ─── FOCUS — Matrix Rain Border ───────────────────────────────────────────
function CyberpunkFocus({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const matrixChars = ['0','1','¥','$','#','@','!','ﾊ','ﾐ','ﾋ','ｳ','ｼ','ﾅ','ﾓ','ﾚ','ﾑ'];
  const colCount = Math.max(8, Math.floor(rect.width / 14));
  const cols = React.useRef(
    Array.from({ length: colCount }).map((_, i) => ({
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
      delay: Math.random() * 0.4,
      x: rect.left + (i / colCount) * rect.width,
    }))
  ).current;

  return (
    <>
      {cols.map((col, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 40, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 0.6,
            delay: col.delay,
            ease: 'linear',
            opacity: { times: [0, 0.1, 0.7, 1] },
            repeat: 2,
          }}
          onAnimationComplete={i === cols.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: rect.top,
            left: col.x,
            color: '#00F5FF',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            fontWeight: 700,
            textShadow: '0 0 8px #00F5FF',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {col.char}
        </motion.div>
      ))}
    </>
  );
}

function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete(); }, [onComplete]);
  return null;
}
