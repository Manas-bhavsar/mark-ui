"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function TitanAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <TitanClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <TitanToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <TitanCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <TitanMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <TitanDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

// ─── CLICK — Thunder Spear Strike ────────────────────────────────────────
function TitanClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const debris = React.useRef(
    Array.from({ length: 16 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      speed: 80 + Math.random() * 120,
      vy: -(100 + Math.random() * 100),
      size: 4 + Math.random() * 6,
      isSquare: Math.random() > 0.5,
      color: ['#8B6914', '#2D5A3D', '#5C4A1E'][Math.floor(Math.random() * 3)],
      rotSpeed: (Math.random() - 0.5) * 1440,
      lifetime: 600 + Math.random() * 400,
    }))
  ).current;

  const slashAngles = [30, 90, 150];

  return (
    <>
      {/* Shockwave ring */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'linear' }}
        style={{
          position: 'fixed',
          top: cy - 60,
          left: cx - 60,
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '3px solid #8B6914',
          boxShadow: '0 0 8px #8B6914',
          pointerEvents: 'none',
        }}
      />

      {/* Screen shake — offset wrapper */}
      <motion.div
        animate={{
          x: [0, -6, 8, -5, 4, -2, 0],
          y: [0, -3, 4, -2, 2, 0, 0],
        }}
        transition={{ duration: 0.2, ease: 'linear' }}
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}
      >
        {/* 3 diagonal slash marks */}
        {slashAngles.map((angle, i) => (
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
            <svg width="60" height="4" viewBox="0 0 60 4" style={{ overflow: 'visible' }}>
              <motion.line
                x1="0" y1="2" x2="60" y2="2"
                stroke="#8B6914"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 4px #8B6914)' }}
                initial={{ pathLength: 0, opacity: 1 }}
                animate={{ pathLength: 1, opacity: [1, 1, 0] }}
                transition={{ pathLength: { duration: 0.1, delay: i * 0.03 }, opacity: { duration: 0.2, delay: 0.1 + i * 0.03, times: [0, 0.5, 1] } }}
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Heavy debris particles */}
      {debris.map((d, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          animate={{
            x: Math.cos(d.angle) * d.speed,
            y: [0, d.vy, d.vy + 120],
            rotate: d.rotSpeed,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: d.lifetime / 1000,
            ease: 'easeOut',
            delay: i * 0.01,
            y: { times: [0, 0.25, 1] },
            opacity: { times: [0, 0.7, 1] },
          }}
          onAnimationComplete={i === debris.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: cy - d.size / 2,
            left: cx - d.size / 2,
            width: d.size,
            height: d.isSquare ? d.size : d.size * 0.6,
            backgroundColor: d.color,
            borderRadius: d.isSquare ? 1 : 0,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── TOGGLE ON — 3DMG Launch ──────────────────────────────────────────────
function TitanToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const cx = rect.left + rect.width - 14; // ON thumb position
  const cy = rect.top + rect.height / 2;

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([50, 20, 30]);
    }
  }, []);

  const dustClouds = React.useRef(
    Array.from({ length: 8 }).map(() => ({
      x: (Math.random() - 0.5) * 60,
      size: 20 + Math.random() * 20,
      delay: Math.random() * 0.1,
    }))
  ).current;

  return (
    <>
      {/* Cable firing across track */}
      <motion.div
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ scaleX: { duration: 0.12, ease: [0.25, 0, 0, 1] }, opacity: { duration: 0.15, delay: 0.12 } }}
        style={{
          position: 'fixed',
          top: cy - 1,
          left: rect.left,
          width: rect.width,
          height: 2,
          backgroundColor: '#8B6914',
          transformOrigin: 'left',
          pointerEvents: 'none',
        }}
      />

      {/* Grapple hit — 4 spike lines */}
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.12, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: cy,
            left: cx,
            width: 20,
            height: 2,
            backgroundColor: '#8B6914',
            transformOrigin: 'left center',
            rotate: angle,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Ground shake */}
      <motion.div
        animate={{ y: [0, -4, 3, -2, 1, 0], x: [0, -2, 2, -1, 0] }}
        transition={{ duration: 0.25, delay: 0.12, ease: 'easeOut' }}
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}
      />

      {/* Dust clouds expanding */}
      {dustClouds.map((d, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.2, opacity: 0.3, x: 0 }}
          animate={{ scale: 2, opacity: 0, x: d.x }}
          transition={{ duration: 0.8, delay: 0.12 + d.delay, ease: 'easeOut' }}
          onAnimationComplete={i === dustClouds.length - 1 ? onComplete : undefined}
          style={{
            position: 'fixed',
            top: cy - d.size / 2,
            left: cx - d.size / 2,
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(139,105,20,0.3)',
            filter: 'blur(4px)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── CHECK — Military Brand ───────────────────────────────────────────────
function TitanCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const smokeParticles = React.useRef(
    Array.from({ length: 4 }).map(() => ({
      dx: (Math.random() - 0.5) * 10,
    }))
  ).current;

  return (
    <>
      {/* White-hot flash */}
      <motion.div
        initial={{ scale: 1, opacity: 1, filter: 'brightness(5)' }}
        animate={{ scale: [1, 1.15, 0.95, 1], opacity: [1, 1, 1, 0], filter: ['brightness(5)', 'brightness(5)', 'brightness(1)', 'brightness(1)'] }}
        transition={{ duration: 0.2, times: [0, 0.4, 0.7, 1] }}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'white',
          mixBlendMode: 'screen',
          borderRadius: 4,
          pointerEvents: 'none',
        }}
      />

      {/* Scorch ring */}
      <motion.div
        initial={{ boxShadow: '0 0 0 0px rgba(139,105,20,0.6)' }}
        animate={{ boxShadow: '0 0 0 8px rgba(139,105,20,0)' }}
        transition={{ duration: 0.4 }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: 4,
          pointerEvents: 'none',
        }}
      />

      {/* Smoke rising */}
      {smokeParticles.map((s, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, scale: 0.5, opacity: 0.3, x: s.dx }}
          animate={{ y: -20, scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.05 + i * 0.04, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.top + rect.height / 2,
            left: rect.left + rect.width / 2,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.3)',
            filter: 'blur(2px)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── MOUNT — Parachute Drop ───────────────────────────────────────────────
function TitanMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const dustParticles = React.useRef(
    Array.from({ length: 6 }).map((_, i) => ({
      dir: i % 2 === 0 ? 'left' : 'right' as 'left' | 'right',
      x: ((i % 2 === 0 ? -1 : 1) * (20 + Math.random() * 30)),
      size: 12 + Math.random() * 8,
    }))
  ).current;

  return (
    <>
      {/* Badge parachute drop from -120 */}
      <motion.div
        initial={{ y: -120, scaleY: 1, opacity: 0 }}
        animate={{ y: [- 120, 0, 6, 0], scaleY: [1, 1, 0.85, 1], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 0.56, times: [0, 0.71, 0.82, 1], ease: ['easeIn', 'easeIn', 'easeOut'] }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(139,105,20,0.08)',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }}
      />

      {/* Impact dust */}
      {dustParticles.map((d, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.4, x: 0 }}
          animate={{ scale: 2, opacity: 0, x: d.x }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            top: rect.bottom - d.size / 2,
            left: rect.left + rect.width / 2 - d.size / 2,
            width: d.size,
            height: d.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(139,105,20,0.4)',
            filter: 'blur(3px)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

// ─── DISMISS — Tactical Retreat ───────────────────────────────────────────
function TitanDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  // 3 ghost trail copies
  const ghosts = [0.4, 0.2, 0.1];

  return (
    <>
      {/* Border flash */}
      <motion.div
        initial={{ boxShadow: '0 0 0 0px #8B6914' }}
        animate={{ boxShadow: ['0 0 0 0px #8B6914', '0 0 0 2px #8B6914', '0 0 0 0px #8B6914', '0 0 0 2px #8B6914'] }}
        transition={{ duration: 0.2, times: [0, 0.25, 0.5, 0.75] }}
        style={{ position: 'fixed', top: rect.top, left: rect.left, width: rect.width, height: rect.height, borderRadius: 4, pointerEvents: 'none' }}
      />

      {/* Coil left then sprint */}
      <motion.div
        initial={{ x: 0, scaleX: 1, opacity: 1 }}
        animate={{ x: [-30, -30, -window.innerWidth * 1.2], scaleX: [0.95, 0.95, 1], opacity: [1, 1, 0] }}
        transition={{ duration: 0.5, times: [0, 0.4, 1], delay: 0.1, ease: [0.25, 0, 0, 1] }}
        onAnimationComplete={onComplete}
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      />

      {/* Ghost trails */}
      {ghosts.map((opacity, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, opacity }}
          animate={{ x: -window.innerWidth * 1.2, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + (i + 1) * 0.02, ease: [0.25, 0, 0, 1] }}
          style={{
            position: 'fixed',
            top: rect.top + i * 2,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            backgroundColor: `rgba(139,105,20,${opacity * 0.3})`,
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
