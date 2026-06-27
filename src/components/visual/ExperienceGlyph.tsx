'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Understated "experience + intelligence" glyph: an inner core (expertise),
 * outer orbiting nodes (signals), and softly glowing rotating rings.
 */
export function ExperienceGlyph() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });

  return (
    <div ref={ref} className="relative h-full w-full" aria-hidden>
      <svg viewBox="0 0 220 220" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B1B2B" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#1E3252" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1E3252" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F9D74" />
            <stop offset="100%" stopColor="#7BD4B7" />
          </linearGradient>
        </defs>

        {/* Soft glow */}
        <motion.circle
          cx="110"
          cy="110"
          r="60"
          fill="url(#core)"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />

        {/* Outer rotating rings */}
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="110" cy="110" r="92" fill="none" stroke="#0F9D74" strokeOpacity="0.35" strokeWidth="0.8" strokeDasharray="2 6" />
        </motion.g>
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="110" cy="110" r="74" fill="none" stroke="#0B1B2B" strokeOpacity="0.18" strokeWidth="0.6" strokeDasharray="1 9" />
        </motion.g>

        {/* Solid ring */}
        <motion.circle
          cx="110"
          cy="110"
          r="58"
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="280 90"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />

        {/* Orbiting signal nodes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const r = 92;
          const x = 110 + Math.cos((deg / 360) * Math.PI * 2) * r;
          const y = 110 + Math.sin((deg / 360) * Math.PI * 2) * r;
          return (
            <motion.g
              key={deg}
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear', delay: i * 0 }}
              style={{ transformBox: 'fill-box', transformOrigin: '110px 110px' }}
            >
              <motion.circle
                cx={x}
                cy={y}
                r={i % 2 === 0 ? 3.2 : 2.2}
                fill="#0F9D74"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: [0.4, 1, 0.4] } : {}}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.g>
          );
        })}

        {/* Inner core mark */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <circle cx="110" cy="110" r="26" fill="#0B1B2B" />
          <path d="M100 113c4.5 0 5.5-5 9-5s4.5 5 8 5 4.5-5 8-5" stroke="#10A884" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <circle cx="110" cy="104" r="1.6" fill="#FFFFFF" />
        </motion.g>
      </svg>

      {/* Caption label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="glass absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink-700 shadow-lift"
      >
        Expertise · Scaled
      </motion.div>
    </div>
  );
}