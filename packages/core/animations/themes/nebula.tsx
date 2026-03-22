"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function NebulaAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <NebulaClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <NebulaToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <NebulaCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <NebulaMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <NebulaDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

// ─── CLICK — Supernova ────────────────────────────────────────────────────
function NebulaClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#9B59B6', '#E74C3C', '#FFFFFF', '#FFD700'];

  const particles = React.useRef(
    Array.from({ length: 20 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 120;
      return {
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        lifetime: 1200 + Math.random() * 800,
        startOpacity: 0.7 + Math.random() * 0.3,
      };
    })
  ).current;

  const nebulaClouds = [
    { color: 'rgba(155,89,182,0.15)', dx: 10, dy: -5 },
    { color: 'rgba(231,76,60,0.10)', dx: -15, dy: 10 },
    { color: 'rgba(255,215,0,0.08)', dx: 5, dy: 15 },
  ];

  return (
    <>
      {/* Core white flash */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: cy - 30,
          left: cx - 30,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Star particles – drift slowly, glow, twinkle */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: p.startOpacity }}
          animate={{
            x: p.vx,
            y: [0, p.vy * 0.5, p.vy],
            opacity: [p.startOpacity, p.startOpacity * 0.8, 0],
          }}
          transition={{
            duration: p.lifetime / 1000,
            ease: 'easeOut',
            y: { times: [0, 0.4, 1] },
            opacity: { times: [0, 0.7, 1] },
          }}
          onAnimationComplete={i === particles.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: cy - p.size / 2,
            left: cx - p.size / 2,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 4px 2px ${p.color}`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Nebula cloud expansion */}
      {nebulaClouds.map((nc, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: parseFloat(nc.color.split(',')[3] || '0.1') * 10 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: cy - 50 + nc.dy,
            left: cx - 50 + nc.dx,
            width: 100,
            height: 100,
            borderRadius: '50%',
            backgroundColor: nc.color,
            filter: 'blur(8px)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── TOGGLE ON — Star Trail ───────────────────────────────────────────────
function NebulaToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const starColors = ['#9B59B6', '#E74C3C', '#FFFFFF', '#FFD700'];
  const stars = React.useRef(
    Array.from({ length: 8 }).map((_, i) => ({
      color: starColors[i % 4],
      delay: i * 0.04,
      size: 3 + Math.random() * 5,
      xPos: rect.left + (i / 8) * rect.width,
    }))
  ).current;

  return (
    <>
      {/* Expanding rings from thumb */}
      {[0, 0.1, 0.2].map((delay, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.5 + i * 0.15, delay, ease: 'easeOut' }}
          onAnimationComplete={i === 2 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2 - 20,
            left: rect.left + rect.width - 34,
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: `1.5px solid ${starColors[i]}`,
            boxShadow: `0 0 6px ${starColors[i]}`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Star trail across track */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 0.4, delay: s.delay, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2 - s.size / 2,
            left: s.xPos,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            backgroundColor: s.color,
            boxShadow: `0 0 4px 2px ${s.color}`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── CHECK — Constellation Draw ───────────────────────────────────────────
function NebulaCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  // 5 star positions along checkmark path (relative in 24x24 viewbox)
  const starPositions = [
    { cx: 20, cy: 6 },
    { cx: 15.5, cy: 10 },
    { cx: 9, cy: 17 },
    { cx: 6.5, cy: 14.5 },
    { cx: 4, cy: 12 },
  ];

  return (
    <div style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" overflow="visible">
        {/* Connecting lines appear after stars */}
        {starPositions.slice(0, -1).map((pos, i) => {
          const next = starPositions[i + 1];
          return (
            <motion.line
              key={i}
              x1={pos.cx} y1={pos.cy} x2={next.cx} y2={next.cy}
              stroke="rgba(155,89,182,0.4)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 + (i + 1) * 0.08 }}
            />
          );
        })}

        {/* Star dots appear one by one */}
        {starPositions.map((pos, i) => (
          <motion.g key={i} transform={`translate(${pos.cx},${pos.cy})`}>
            <motion.path
              d="M0,-3 L0.7,-0.9 L3,-0.9 L1.1,0.4 L1.8,2.6 L0,1.3 L-1.8,2.6 L-1.1,0.4 L-3,-0.9 L-0.7,-0.9 Z"
              fill="#FFFFFF"
              style={{ filter: 'drop-shadow(0 0 4px rgba(155,89,182,0.8))' }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: 1,
              }}
              transition={{ duration: 0.2, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
              onAnimationComplete={i === starPositions.length - 1 ? onComplete : undefined}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// ─── MOUNT — Starbirth ─────────────────────────────────────────────────────
function NebulaMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  return (
    <>
      {/* Bright point ignition */}
      <motion.div
        initial={{ width: 2, height: 2, opacity: 1, filter: 'brightness(10) blur(2px)' }}
        animate={{ width: rect.width * 1.4, height: rect.height * 1.4, opacity: 0, filter: 'brightness(2) blur(0px)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: cy - 1,
          left: cx - 1,
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          pointerEvents: 'none',
        }}
      />

      {/* Badge settle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 1], filter: ['brightness(4)', 'brightness(2)', 'brightness(1)'] }}
        transition={{ duration: 0.5, delay: 0.1, times: [0, 0.6, 1] }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(155,89,182,0.05)',
          borderRadius: 'inherit',
          boxShadow: '0 0 16px 4px rgba(155,89,182,0.3)',
          pointerEvents: 'none',
        }}
      />

      {/* 8 spike rays */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            top: cy,
            left: cx,
            transformOrigin: '0 0',
            rotate: angle,
            pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            style={{ width: 30, height: 1, backgroundColor: '#FFFFFF', transformOrigin: 'left' }}
          />
        </motion.div>
      ))}
    </>
  );
}

// ─── DISMISS — Gravitational Pull ─────────────────────────────────────────
function NebulaDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      {/* Event horizon ring */}
      <motion.div
        initial={{ opacity: 0.4, rotate: 0, scale: 1 }}
        animate={{ opacity: 0, rotate: 360, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn', rotate: { ease: 'linear' } }}
        style={{
          position: 'fixed',
          top: rect.top - 4,
          left: rect.left - 4,
          width: rect.width + 8,
          height: rect.height + 8,
          borderRadius: 6,
          border: '1.5px solid rgba(155,89,182,0.4)',
          pointerEvents: 'none',
        }}
      />

      {/* Content implosion */}
      <motion.div
        initial={{ scale: 1, rotate: 0, opacity: 1 }}
        animate={{ scale: [1, 0.85, 0], rotate: [0, 8, 720], opacity: [1, 1, 0] }}
        transition={{ duration: 0.5, times: [0, 0.6, 1], ease: 'easeIn' }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(155,89,182,0.08)',
          borderRadius: 4,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}

function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete(); }, [onComplete]);
  return null;
}
