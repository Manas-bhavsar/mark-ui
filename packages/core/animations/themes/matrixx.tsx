"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function MatrixxAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <MatrixxClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <MatrixxToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <MatrixxCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <MatrixxMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <MatrixxDismiss rect={rect} onComplete={onComplete} />;
    case 'focus':
      return <MatrixxFocus rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

const MATRIX_CHARS = ['ﾊ','ﾐ','ﾋ','ｳ','ｼ','ﾅ','ﾓ','0','1','ﾚ','ﾑ','ﾃ','ｦ','ﾆ','ｻ'];
const rChar = () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

// ─── CLICK — System Override ──────────────────────────────────────────────
function MatrixxClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const codeChars = React.useRef(
    Array.from({ length: 20 }).map((_, i) => ({
      char: rChar(),
      isWhite: i === Math.floor(Math.random() * 20),
      vx: (Math.random() - 0.5) * 300,
      vy: -(80 + Math.random() * 100),
      size: 12 + Math.floor(Math.random() * 5),
      lifetime: 600 + Math.random() * 400,
      rotate: (Math.random() - 0.5) * 360,
    }))
  ).current;

  return (
    <>
      {/* Glitch flash — 3 offset copies */}
      <motion.div
        initial={{ x: 6, opacity: 0.8 }}
        animate={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.06 }}
        style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, backgroundColor: '#00FF41', mixBlendMode: 'screen', pointerEvents: 'none', borderRadius: 4 }}
      />
      <motion.div
        initial={{ x: -4, opacity: 0.6 }}
        animate={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.06 }}
        style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, backgroundColor: '#003D10', mixBlendMode: 'screen', pointerEvents: 'none', borderRadius: 4 }}
      />

      {/* Scan line sweep */}
      <motion.div
        initial={{ y: -rect.height / 2, opacity: 0.4 }}
        animate={{ y: rect.height / 2, opacity: 0 }}
        transition={{ duration: 0.24, delay: 0.06, ease: 'linear' }}
        style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: 2, backgroundColor: 'rgba(0,255,65,0.4)', pointerEvents: 'none' }}
      />

      {/* Code explosion */}
      {codeChars.map((c, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          animate={{
            x: c.vx,
            y: [0, c.vy, c.vy + 80],
            rotate: c.rotate,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: c.lifetime / 1000,
            delay: 0.06,
            ease: 'easeOut',
            y: { times: [0, 0.35, 1] },
            opacity: { times: [0, 0.7, 1] },
          }}
          onAnimationComplete={i === codeChars.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: cy,
            left: cx,
            color: c.isWhite ? '#FFFFFF' : '#00FF41',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: c.size,
            textShadow: '0 0 8px #00FF41',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {c.char}
        </motion.div>
      ))}
    </>
  );
}

// ─── TOGGLE ON — Reality Rewrite ──────────────────────────────────────────
function MatrixxToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const streamChars = React.useRef(
    Array.from({ length: 20 }).map((_, i) => ({
      char: rChar(),
      isBright: i % 4 === 0,
    }))
  ).current;

  const rainCols = React.useRef(
    Array.from({ length: 8 }).map((_, i) => ({
      x: rect.left + (i / 8) * rect.width,
      chars: Array.from({ length: 10 }).map((_, j) => ({
        char: rChar(),
        isBright: j === 0,
        delay: j * 0.04,
      })),
    }))
  ).current;

  return (
    <>
      {/* Binary stream across track */}
      <motion.div
        initial={{ x: -rect.width, opacity: 1 }}
        animate={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
        style={{
          position: 'fixed',
          top: rect.top + rect.height / 2 - 6,
          left: rect.left,
          width: rect.width,
          height: 12,
          color: '#00FF41',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.05em',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        {streamChars.map((c, i) => (
          <span key={i} style={{ color: c.isBright ? '#FFFFFF' : '#00FF41' }}>{c.char}</span>
        ))}
      </motion.div>

      {/* Track pulse glow */}
      <motion.div
        initial={{ boxShadow: '0 0 0px 0px rgba(0,255,65,0)' }}
        animate={{ boxShadow: ['0 0 0px 0px rgba(0,255,65,0)', '0 0 16px 8px rgba(0,255,65,0.5)', '0 0 4px 2px rgba(0,255,65,0.2)'] }}
        transition={{ duration: 0.6, delay: 0.3, times: [0, 0.4, 1] }}
        onAnimationComplete={onComplete}
        style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, borderRadius: 9999, pointerEvents: 'none' }}
      />

      {/* Matrix rain burst columns */}
      {rainCols.map((col, ci) => col.chars.map((ch, ri) => (
        <motion.div
          key={`${ci}-${ri}`}
          initial={{ y: 0, opacity: ch.isBright ? 1 : 0.6 - ri * 0.05 }}
          animate={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + ch.delay + ci * 0.02, ease: 'linear' }}
          style={{
            position: 'fixed',
            top: rect.top + ri * 12,
            left: col.x,
            color: ch.isBright ? '#FFFFFF' : '#00FF41',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            textShadow: ch.isBright ? '0 0 8px #00FF41' : 'none',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {ch.char}
        </motion.div>
      )))}
    </>
  );
}

// ─── CHECK — Access Granted ───────────────────────────────────────────────
function MatrixxCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <div style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, pointerEvents: 'none' }}>
      {/* Border flash x3 */}
      <motion.div
        initial={{ boxShadow: '0 0 0 0px #00FF41' }}
        animate={{ boxShadow: ['0 0 0 0px #00FF41','0 0 0 2px #00FF41','0 0 0 0px #00FF41','0 0 0 2px #00FF41','0 0 0 0px #00FF41'] }}
        transition={{ duration: 0.3, times: [0, 0.17, 0.34, 0.51, 0.68] }}
        style={{ position: 'absolute', inset: 0, borderRadius: 4 }}
      />

      {/* Scan line sweep */}
      <motion.div
        initial={{ y: 0, opacity: 0.6 }}
        animate={{ y: rect.height, opacity: 0 }}
        transition={{ duration: 0.15, delay: 0.2, ease: 'linear' }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 2, backgroundColor: 'rgba(0,255,65,0.6)' }}
      />

      {/* Checkmark — instant terminal style */}
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <motion.polyline
          points="20 6 9 17 4 12"
          stroke="#00FF41"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 4px #00FF41)' }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 0.4, 0.4, 1, 1] }}
          transition={{ duration: 0.4, delay: 0.35, times: [0, 0.15, 0.16, 0.65, 0.66, 1] }}
          onAnimationComplete={onComplete}
        />
      </svg>

      {/* "ACCESS GRANTED" text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 1.2, delay: 0.5, times: [0, 0.1, 0.2, 0.7, 1] }}
        style={{
          position: 'absolute',
          bottom: -14,
          left: 0,
          whiteSpace: 'nowrap',
          color: '#00FF41',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 8,
          letterSpacing: '0.05em',
        }}
      >
        ACCESS GRANTED
      </motion.div>
    </div>
  );
}

// ─── MOUNT — Terminal Output ───────────────────────────────────────────────
function MatrixxMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ filter: 'brightness(0)', scaleX: 0 }}
      animate={{ filter: 'brightness(1)', scaleX: 1 }}
      transition={{ duration: 0.3, ease: [0.0, 0.0, 1.0, 1.0] }}
      onAnimationComplete={onComplete}
      style={{
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        backgroundColor: 'rgba(0,255,65,0.04)',
        borderRadius: 'inherit',
        mixBlendMode: 'overlay',
        transformOrigin: 'left',
        boxShadow: '0 0 8px rgba(0,255,65,0.2)',
        pointerEvents: 'none',
      }}
    />
  );
}

// ─── DISMISS — System Delete ───────────────────────────────────────────────
function MatrixxDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const rows = Math.ceil(rect.height / 8);
  const cols = Math.ceil(rect.width / 8);
  const totalCells = rows * cols;

  const cells = React.useRef(
    Array.from({ length: totalCells }).map((_, i) => ({
      char: rChar(),
      delay: Math.random() * 0.5,
      duration: 0.1 + Math.random() * 0.3,
    }))
  ).current;

  return (
    <div
      style={{
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 8px)`,
        gridTemplateRows: `repeat(${rows}, 8px)`,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {cells.map((cell, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.8, 0] }}
          transition={{ duration: cell.duration, delay: cell.delay }}
          onAnimationComplete={i === cells.length - 1 ? onComplete : undefined}
          style={{
            width: 8,
            height: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00FF41',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 7,
            lineHeight: 1,
          }}
        >
          {cell.char}
        </motion.div>
      ))}
    </div>
  );
}

// ─── FOCUS — Matrix Rain on Border ─────────────────────────────────────────
function MatrixxFocus({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const colCount = Math.max(8, Math.floor(rect.width / 14));
  const cols = React.useRef(
    Array.from({ length: colCount }).map((_, i) => ({
      char: rChar(),
      delay: Math.random() * 0.4,
      x: rect.left + (i / colCount) * rect.width,
      isBright: i % 5 === 0,
    }))
  ).current;

  return (
    <>
      {/* SVG border draw */}
      <svg
        style={{ position: 'fixed', top: rect.top - 2, left: rect.left - 2, width: rect.width + 4, height: rect.height + 4, overflow: 'visible', pointerEvents: 'none' }}
      >
        <motion.rect
          x="0" y="0" width={rect.width + 4} height={rect.height + 4}
          rx="4" ry="4"
          fill="none"
          stroke="#00FF41"
          strokeWidth="1.5"
          style={{ filter: 'drop-shadow(0 0 4px #00FF41)' }}
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'linear' }}
        />
      </svg>

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
            repeat: 1,
          }}
          onAnimationComplete={i === cols.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: rect.top,
            left: col.x,
            color: col.isBright ? '#FFFFFF' : '#00FF41',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            fontWeight: 700,
            textShadow: '0 0 8px #00FF41',
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
