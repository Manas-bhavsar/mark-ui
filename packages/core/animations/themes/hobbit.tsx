"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function HobbitAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <HobbitClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <HobbitToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <HobbitCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <HobbitMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <HobbitDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

const LEAF_COLORS = ['#4A7C59', '#8B7355', '#6B8E23', '#228B22'];

// A realistic leaf: oval with pointed tip
function LeafSvg({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 24 16">
      <path d="M12,1 C16,1 22,5 22,9 C22,13 16,15 12,15 C8,15 2,13 2,9 C2,5 8,1 12,1 Z" fill={color} />
      <line x1="12" y1="1" x2="12" y2="15" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" />
    </svg>
  );
}

// ─── CLICK — Leaf Storm ───────────────────────────────────────────────────
function HobbitClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const leaves = React.useRef(
    Array.from({ length: 12 }).map(() => ({
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      size: 12 + Math.random() * 12,
      vx: (Math.random() - 0.5) * 240,
      vy: -(80 + Math.random() * 80),
      rotSpeed: (Math.random() - 0.5) * 360,
      driftFreq: 2 + Math.random() * 2,
      driftAmp: 8 + Math.random() * 8,
      lifetime: 1200 + Math.random() * 800,
    }))
  ).current;

  const sparkles = React.useRef(
    Array.from({ length: 8 }).map(() => ({
      dx: (Math.random() - 0.5) * 60,
      dy: (Math.random() - 0.5) * 40,
      delay: Math.random() * 0.3,
    }))
  ).current;

  return (
    <>
      {/* Leaf burst */}
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          animate={{
            x: leaf.vx,
            y: [0, leaf.vy, leaf.vy + 100],
            rotate: leaf.rotSpeed,
            opacity: [1, 0.9, 0],
          }}
          transition={{
            duration: leaf.lifetime / 1000,
            ease: 'easeOut',
            y: { times: [0, 0.3, 1] },
            opacity: { times: [0, 0.7, 1] },
          }}
          onAnimationComplete={i === leaves.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: cy,
            left: cx,
            pointerEvents: 'none',
          }}
        >
          <LeafSvg color={leaf.color} size={leaf.size} />
        </motion.div>
      ))}

      {/* Sparkle dust */}
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.8, delay: s.delay, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: cy + s.dy,
            left: cx + s.dx,
            width: 3,
            height: 3,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,220,0.8)',
            boxShadow: '0 0 4px rgba(255,255,220,0.6)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── TOGGLE ON — Shire Sunrise ─────────────────────────────────────────────
function HobbitToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const vineLeafPositions = [0.25, 0.55, 0.85];

  return (
    <>
      {/* Warm radial light sweep */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 0.6, times: [0, 0.5, 1] }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top - 10,
          left: rect.left - 10,
          width: rect.width + 20,
          height: rect.height + 20,
          borderRadius: 9999,
          background: `radial-gradient(circle at ${rect.width - 14}px center, rgba(139,115,85,0.4) 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Vine path growing across track */}
      <svg
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <motion.path
          d={`M 0 ${rect.height / 2} Q ${rect.width * 0.25} ${rect.height * 0.2} ${rect.width * 0.5} ${rect.height / 2} T ${rect.width} ${rect.height / 2}`}
          fill="none"
          stroke="#4A7C59"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
      </svg>

      {/* Leaf buds at 3 points */}
      {vineLeafPositions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.15 + i * 0.12 }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2 - 5,
            left: rect.left + rect.width * pos,
            pointerEvents: 'none',
            color: '#4A7C59',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2 C16,2 22,7 22,12 C22,17 16,22 12,22 C8,22 2,17 2,12 C2,7 8,2 12,2 Z" />
          </svg>
        </motion.div>
      ))}

      {/* Flower bloom at arrival */}
      {[0,60,120,180,240,300].map((angle, i) => {
        const r = Math.PI * angle / 180;
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: [0, 0.6, 0] }}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.04, ease: 'easeOut', opacity: { times: [0, 0.3, 1] } }}
            style={{
              position: 'fixed',
              top: rect.top + rect.height / 2 - 6,
              left: rect.left + rect.width - 20,
              width: 12,
              height: 8,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              backgroundColor: 'rgba(139,115,85,0.5)',
              transformOrigin: 'center',
              rotate: angle,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </>
  );
}

// ─── CHECK — Elvish Rune Inscription ──────────────────────────────────────
function HobbitCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const scatterLeaves = React.useRef(
    Array.from({ length: 4 }).map(() => ({
      dx: (Math.random() - 0.5) * 24,
      dy: (Math.random() - 0.5) * 24,
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
    }))
  ).current;

  return (
    <div style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, pointerEvents: 'none' }}>
      {/* Elvish rune spiral */}
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" overflow="visible">
        <motion.circle
          cx="12" cy="12" r="6"
          stroke="#4A7C59"
          strokeWidth="1.5"
          style={{ filter: 'drop-shadow(0 0 4px #4A7C59)' }}
          initial={{ pathLength: 0, opacity: 0.8 }}
          animate={{ pathLength: 1, opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
        {/* Checkmark draws with leafy glow */}
        <motion.polyline
          points="20 6 9 17 4 12"
          stroke="#4A7C59"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 4px #4A7C59)' }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          onAnimationComplete={onComplete}
        />
      </svg>

      {/* Scatter leaves from rune */}
      {scatterLeaves.map((l, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
          animate={{ scale: 1, opacity: 0, x: l.dx, y: l.dy }}
          transition={{ duration: 0.3, delay: 0.18 + i * 0.03 }}
          style={{
            position: 'absolute',
            top: '30%',
            left: '40%',
          }}
        >
          <LeafSvg color={l.color} size={8} />
        </motion.div>
      ))}

      {/* Warm glow settle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          position: 'absolute',
          inset: -4,
          borderRadius: 6,
          boxShadow: 'inset 0 0 8px rgba(74,124,89,0.3)',
        }}
      />
    </div>
  );
}

// ─── MOUNT — Seed to Bloom ─────────────────────────────────────────────────
function HobbitMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const blossoms = React.useRef(
    Array.from({ length: 6 }).map(() => ({
      dx: (Math.random() - 0.5) * 60,
      dy: 10 + Math.random() * 30,
      delay: Math.random() * 0.2,
    }))
  ).current;

  return (
    <>
      {/* Seed growing into badge */}
      <motion.div
        initial={{ scale: 0.05, opacity: 1, borderRadius: '50%', backgroundColor: '#5C4A1E' }}
        animate={{
          scale: [0.05, 1.1, 1],
          borderRadius: ['50%', '50%', '8px'],
          backgroundColor: ['#5C4A1E', '#6B8E23', 'rgba(74,124,89,0.05)'],
          opacity: [1, 1, 0],
        }}
        transition={{ duration: 0.7, times: [0, 0.7, 1], ease: [0.34, 1.56, 0.64, 1] }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          pointerEvents: 'none',
        }}
      />

      {/* Petal scatter */}
      {blossoms.map((b, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
          animate={{ scale: 1, opacity: [0, 0.5, 0], x: b.dx, y: b.dy }}
          transition={{ duration: 0.8, delay: 0.5 + b.delay, ease: 'easeOut', opacity: { times: [0, 0.3, 1] } }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2,
            left: rect.left + rect.width / 2,
            width: 10,
            height: 6,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            backgroundColor: 'rgba(139,115,85,0.5)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── DISMISS — Carried By The Wind ────────────────────────────────────────
function HobbitDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const windLeaves = React.useRef(
    Array.from({ length: 6 }).map((_, i) => ({
      color: LEAF_COLORS[i % LEAF_COLORS.length],
      startX: rect.left + (i / 6) * rect.width,
      size: 10 + Math.random() * 8,
      vx: 20 + Math.random() * 40,
      delay: Math.random() * 0.2,
    }))
  ).current;

  return (
    <>
      {/* Wind leaves drift up from top edge */}
      {windLeaves.map((leaf, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{
            x: leaf.vx,
            y: -60,
            opacity: 0,
            rotate: 45,
          }}
          transition={{ duration: 0.8, delay: leaf.delay, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.top,
            left: leaf.startX,
            pointerEvents: 'none',
          }}
        >
          <LeafSvg color={leaf.color} size={leaf.size} />
        </motion.div>
      ))}

      {/* Content gently lifts and fades with breeze wavering */}
      <motion.div
        initial={{ y: 0, opacity: 1, scaleX: 1 }}
        animate={{ y: -20, opacity: 0, scaleX: [1, 1.02, 0.98, 1] }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: 'easeOut',
          scaleX: { times: [0, 0.3, 0.7, 1] },
        }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(255,255,255,0.03)',
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
