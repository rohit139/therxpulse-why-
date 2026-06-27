'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const NODES = [
  { id: 'products', label: 'Products', x: 30, y: 26 },
  { id: 'orgs', label: 'Organizations', x: 70, y: 26 },
  { id: 'mfg', label: 'Manufacturing', x: 16, y: 56 },
  { id: 'comp', label: 'Competition', x: 50, y: 52 },
  { id: 'supply', label: 'Supply', x: 84, y: 56 },
  { id: 'pricing', label: 'Pricing', x: 32, y: 82 },
  { id: 'market', label: 'Market', x: 68, y: 82 },
];

const LINKS: [string, string][] = [
  ['products', 'orgs'],
  ['products', 'mfg'],
  ['products', 'comp'],
  ['orgs', 'comp'],
  ['orgs', 'supply'],
  ['mfg', 'supply'],
  ['comp', 'pricing'],
  ['comp', 'market'],
  ['supply', 'market'],
  ['pricing', 'market'],
  ['mfg', 'pricing'],
];

export function EcosystemMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-14% 0px' });

  return (
    <div
      ref={ref}
      className="relative mx-auto h-[clamp(340px,52vw,520px)] w-full max-w-[920px] overflow-hidden rounded-4xl glass shadow-glass"
    >
      <svg viewBox="0 0 100 92" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="eco-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10A884" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#10A884" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Flowing pulses along edges */}
        {LINKS.map(([a, b], i) => {
          const na = NODES.find((n) => n.id === a)!;
          const nb = NODES.find((n) => n.id === b)!;
          return (
            <g key={`edge-${i}`}>
              <motion.line
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="#0B1B2B"
                strokeOpacity="0.22"
                strokeWidth="0.18"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.2 + i * 0.07, ease: 'easeOut' }}
              />
              <motion.circle
                r="0.45"
                fill="#0F9D74"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: [0, 1, 0] } : {}}
                transition={{ duration: 2.4, repeat: Infinity, delay: 1 + i * 0.18 }}
              >
                <animateMotion
                  dur={`${2.4 + (i % 4) * 0.4}s`}
                  repeatCount="indefinite"
                  path={`M ${na.x} ${na.y} L ${nb.x} ${nb.y}`}
                  begin={`${1 + i * 0.18}s`}
                />
              </motion.circle>
            </g>
          );
        })}

        {NODES.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <circle cx={n.x} cy={n.y} r="3.2" fill="url(#eco-node)" />
            <circle cx={n.x} cy={n.y} r="1.6" fill="#0B8567" fillOpacity="0.95" />
          </motion.g>
        ))}
      </svg>

      {NODES.map((n, i) => (
        <motion.span
          key={`lbl-${n.id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
          style={{ left: `${n.x}%`, top: `${n.y + 8}%`, transform: 'translateX(-50%)' }}
          className="absolute whitespace-nowrap text-[0.7rem] font-medium text-ink-700"
        >
          {n.label}
        </motion.span>
      ))}
    </div>
  );
}