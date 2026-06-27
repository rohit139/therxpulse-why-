'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FIELDS = Array.from({ length: 9 }, (_, i) => ({
  x: 8 + (i * 23) % 90,
  y: 12 + (i * 17) % 80,
  delay: i * 0.18,
}));

export function ClosingFieldBg() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="absolute inset-0 -z-0" aria-hidden>
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute inset-0 shell-aurora opacity-40" />
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="close-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10A884" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10A884" stopOpacity="0" />
          </radialGradient>
        </defs>
        <radialGradient id="close-glow-2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E87A3E" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E87A3E" stopOpacity="0" />
        </radialGradient>

        <motion.circle
          cx="50"
          cy="50"
          r="42"
          fill="url(#close-glow)"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: [0.6, 0.95, 0.6] } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
        <motion.circle
          cx="22"
          cy="78"
          r="28"
          fill="url(#close-glow-2)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: [0.3, 0.6, 0.3] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />

        {FIELDS.map((f, i) => (
          <motion.g
            key={i}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0.2, 0.9, 0.2] } : {}}
            transition={{ duration: 4 + f.delay, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
          >
            <circle cx={f.x} cy={f.y} r={1.4} fill="#7BD4B7" />
          </motion.g>
        ))}

        {[60, 80].map((r, i) => (
          <motion.circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="#10A884"
            strokeOpacity="0.18"
            strokeWidth="0.18"
            strokeDasharray="2 4"
            initial={{ rotate: 0, opacity: 0 }}
            animate={inView ? { rotate: i === 0 ? 360 : -360, opacity: 1 } : {}}
            transition={{ duration: i === 0 ? 60 : 80, repeat: Infinity, ease: 'linear' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        ))}
      </svg>
    </div>
  );
}