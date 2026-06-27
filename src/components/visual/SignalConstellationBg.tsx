'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * Background constellation of disconnected signal nodes drifting + connecting.
 * Pure SVG, GPU-friendly, motion respects reduced-motion via Reveal wrapper.
 */
export function SignalConstellationBg() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: 8 + ((i * 137.5) % 92),
        y: 12 + ((i * 73.3) % 78),
        r: 1.4 + ((i * 7) % 4) * 0.8,
        delay: (i % 11) * 0.45,
      })),
    [],
  );

  const lines = useMemo(() => {
    const pairs: { a: number; b: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const j = (i + 1 + (i % 3)) % nodes.length;
      if (Math.abs(nodes[i].x - nodes[j].x) < 35 && Math.abs(nodes[i].y - nodes[j].y) < 30) {
        pairs.push({ a: i, b: j });
      }
    }
    return pairs;
  }, [nodes]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-70" aria-hidden>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F9D74" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0F9D74" stopOpacity="0" />
          </radialGradient>
        </defs>
        {lines.map((l, i) => {
          const a = nodes[l.a];
          const b = nodes[l.b];
          return (
            <motion.line
              key={`l-${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#0F9D74"
              strokeWidth="0.08"
              strokeOpacity="0.35"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2.4, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
            />
          );
        })}
        {nodes.map((n) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.9, 0.3] }}
            transition={{ duration: 5 + n.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <circle cx={n.x} cy={n.y} r={n.r * 2.5} fill="url(#node-glow)" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="#0B1B2B" fillOpacity="0.55" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}