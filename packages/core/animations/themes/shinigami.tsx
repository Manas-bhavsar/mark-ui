"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function ShinigamiAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <ShinigamiClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <ShinigamiToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <ShinigamiCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <ShinigamiMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <ShinigamiDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

// ─── CLICK — Soul Reaper Slash ────────────────────────────────────────────
function ShinigamiClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const orbs = React.useRef(
    Array.from({ length: 8 }).map(() => ({
      size: 6 + Math.random() * 8,
      angle: Math.random() * Math.PI * 2,
      speed: 40 + Math.random() * 60,
      lifetime: 800 + Math.random() * 400,
    }))
  ).current;

  return (
    <>
      {/* Slash line 1: −45deg */}
      <motion.div
        style={{
          position: 'fixed',
          top: cy - 40,
          left: cx - 2,
          width: 4,
          height: 80,
          pointerEvents: 'none',
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', top: 0, left: -38 }}>
          <motion.line
            x1="0" y1="80" x2="80" y2="0"
            stroke="#C9A84C"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 6px #C9A84C)' }}
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: [1, 1, 0] }}
            transition={{ pathLength: { duration: 0.15 }, opacity: { duration: 0.5, delay: 0.1, times: [0, 0.4, 1] } }}
          />
          {/* After image 1 */}
          {[0.6, 0.3, 0.1].map((opacity, i) => (
            <motion.line
              key={i}
              x1="0" y1={80 + i * 4} x2="80" y2={i * 4}
              stroke="#C9A84C"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity, scale: 1 }}
              animate={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Slash line 2: +45deg */}
      <motion.div
        style={{
          position: 'fixed',
          top: cy - 40,
          left: cx - 2,
          width: 4,
          height: 80,
          pointerEvents: 'none',
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', top: 0, left: -38 }}>
          <motion.line
            x1="0" y1="0" x2="80" y2="80"
            stroke="#C9A84C"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 6px #C9A84C)' }}
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: [1, 1, 0] }}
            transition={{ pathLength: { duration: 0.15, delay: 0.03 }, opacity: { duration: 0.5, delay: 0.13, times: [0, 0.4, 1] } }}
            onAnimationComplete={onComplete}
          />
        </svg>
      </motion.div>

      {/* Soul orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: Math.cos(orb.angle) * orb.speed,
            y: [0, -60 - Math.random() * 60, -80 - Math.random() * 40],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: orb.lifetime / 1000,
            delay: 0.15,
            ease: 'easeOut',
            y: { times: [0, 0.5, 1] },
            opacity: { times: [0, 0.6, 1] },
          }}
          style={{
            position: 'fixed',
            top: cy - orb.size / 2,
            left: cx - orb.size / 2,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            backgroundColor: '#C9A84C',
            boxShadow: '0 0 8px 4px rgba(201,168,76,0.5)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── TOGGLE ON — Reiatsu Explosion ────────────────────────────────────────
function ShinigamiToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width - 14;
  const cy = rect.top + rect.height / 2;

  const feathers = React.useRef(
    Array.from({ length: 10 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 200,
      vy: -(60 + Math.random() * 80),
      lifetime: 1000 + Math.random() * 400,
      rotate: Math.random() * 360,
    }))
  ).current;

  const rings = [
    { duration: 0.4, delay: 0, color: '#C9A84C', opacity: 0.9 },
    { duration: 0.55, delay: 0.08, color: 'rgba(201,168,76,0.7)', opacity: 0.7 },
    { duration: 0.7, delay: 0.16, color: 'rgba(201,168,76,0.4)', opacity: 0.4 },
  ];

  return (
    <>
      {/* Pressure rings */}
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: ring.opacity }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: ring.duration, delay: ring.delay, ease: 'easeOut' }}
          onAnimationComplete={i === rings.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: cy - 40,
            left: cx - 40,
            width: 80,
            height: 80,
            borderRadius: '50%',
            border: `2px solid ${ring.color}`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Central flash */}
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: cy - 20,
          left: cx - 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Feathers */}
      {feathers.map((f, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, rotate: f.rotate, opacity: 1 }}
          animate={{
            x: f.vx,
            y: [0, f.vy, f.vy + 80],
            opacity: [1, 0.8, 0],
            rotate: f.rotate + 360,
          }}
          transition={{
            duration: f.lifetime / 1000,
            delay: 0.05,
            ease: 'easeOut',
            y: { times: [0, 0.3, 1] },
            opacity: { times: [0, 0.6, 1] },
          }}
          style={{
            position: 'fixed',
            top: cy - 4,
            left: cx - 10,
            width: 20,
            height: 8,
            pointerEvents: 'none',
          }}
        >
          <svg width="20" height="8" viewBox="0 0 20 8" fill="#C9A84C">
            <path d="M0,4 Q5,0 10,4 Q15,0 20,4 Q15,8 10,4 Q5,8 0,4 Z" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

// ─── CHECK — Death Note Write (Calligraphy Brush) ─────────────────────────
function ShinigamiCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const inkSplatters = React.useRef(
    Array.from({ length: 5 }).map(() => ({
      dx: (Math.random() - 0.5) * 20,
      dy: (Math.random() - 0.5) * 20,
    }))
  ).current;

  return (
    <div style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, pointerEvents: 'none' }}>
      {/* Thick calligraphy checkmark stroke */}
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" overflow="visible">
        <motion.polyline
          points="20 6 9 17 4 12"
          stroke="#C9A84C"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 4px #C9A84C)' }}
          initial={{ pathLength: 0, strokeWidth: 6 }}
          animate={{ pathLength: 1, strokeWidth: 2 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
          onAnimationComplete={onComplete}
        />
      </svg>

      {/* Ink splatters near brush tip */}
      {inkSplatters.map((s, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 0.3, delay: 0.1 + i * 0.025 }}
          style={{
            position: 'absolute',
            top: '25%',
            left: '80%',
            width: 3,
            height: 3,
            borderRadius: '50%',
            backgroundColor: '#C9A84C',
            transform: `translate(${s.dx}px, ${s.dy}px)`,
          }}
        />
      ))}

      {/* End-of-stroke ink bleed */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 3, opacity: [0, 1, 0] }}
          transition={{ duration: 0.3, delay: 0.32 + i * 0.04 }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '70%',
            width: 3,
            height: 3,
            borderRadius: '50%',
            backgroundColor: '#C9A84C',
          }}
        />
      ))}
    </div>
  );
}

// ─── MOUNT — Shadow World Emerge ──────────────────────────────────────────
function ShinigamiMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      {/* Dark void ripple */}
      {[0, 0.08, 0.16].map((delay, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.4, delay, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2 - rect.height * 0.75,
            left: rect.left + rect.width / 2 - rect.width * 0.75,
            width: rect.width * 1.5,
            height: rect.height * 1.5,
            borderRadius: '50%',
            background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.8) 100%)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Badge tearing through */}
      <motion.div
        initial={{ scaleX: 0, filter: 'brightness(0)' }}
        animate={{
          scaleX: [0, 1.1, 1],
          filter: ['brightness(0)', 'brightness(2)', 'brightness(1)'],
        }}
        transition={{ duration: 0.5, delay: 0.2, times: [0, 0.8, 1] }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(201,168,76,0.05)',
          borderRadius: 'inherit',
          boxShadow: '0 0 20px #C9A84C',
          transformOrigin: 'left',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}

// ─── DISMISS — Soul Extraction ────────────────────────────────────────────
function ShinigamiDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const orbs = React.useRef(
    Array.from({ length: 10 }).map(() => ({
      x: (Math.random() - 0.5) * rect.width * 0.8,
      y: -(30 + Math.random() * 60),
      size: 4 + Math.random() * 6,
      delay: Math.random() * 0.2,
    }))
  ).current;

  return (
    <>
      {/* Content desaturate and rise */}
      <motion.div
        initial={{ y: 0, scaleY: 1, opacity: 1, filter: 'saturate(1)' }}
        animate={{ y: -40, scaleY: 0.6, opacity: 0, filter: 'saturate(0)' }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeIn' }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(255,255,255,0.04)',
          transformOrigin: 'bottom',
          pointerEvents: 'none',
        }}
      />

      {/* Gold outline pulse */}
      <motion.div
        initial={{ boxShadow: '0 0 0 0px #C9A84C inset' }}
        animate={{ boxShadow: ['0 0 0 0px #C9A84C inset', '0 0 0 2px #C9A84C inset', '0 0 0 0px #C9A84C inset', '0 0 0 2px #C9A84C inset', '0 0 0 0px #C9A84C inset'] }}
        transition={{ duration: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          pointerEvents: 'none',
          borderRadius: 4,
        }}
      />

      {/* Soul orbs scattering up */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 0.8, scale: 1 }}
          animate={{ x: orb.x, y: orb.y, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 + orb.delay, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2,
            left: rect.left + rect.width / 2,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            backgroundColor: '#C9A84C',
            boxShadow: '0 0 6px #C9A84C',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete(); }, [onComplete]);
  return null;
}
