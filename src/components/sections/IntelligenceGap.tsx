'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal, StaggerGroup, staggerChild } from '@/components/motion/Reveal';
import { Parallax } from '@/components/motion/Parallax';

const DIMENSIONS = [
  { label: 'Pricing', x: 50, y: 14 },
  { label: 'Competition', x: 86, y: 38 },
  { label: 'Market Behavior', x: 78, y: 82 },
  { label: 'Portfolio', x: 22, y: 82 },
  { label: 'Manufacturing', x: 14, y: 38 },
  { label: 'Regulatory', x: 50, y: 34 },
  { label: 'Supply', x: 64, y: 60 },
];

export function IntelligenceGap() {
  return (
    <Section id="gap" tone="soft" className="py-28 lg:py-36">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>03 · The Intelligence Gap</Eyebrow>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="mt-6 text-h2 font-semibold text-ink-900 text-balance">
            Every commercial decision depends on many signals, read&nbsp;together.
          </Reveal>
          <Reveal delay={0.12} as="p" className="mt-6 text-lead text-ink-500 text-pretty max-w-[520px]">
            Pricing sits beside competition. Competition sits beside manufacturing. Manufacturing
            sits beside regulatory and supply. None of these dimensions tell the full story in
            isolation. The decision lives in the connection.
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
            {DIMENSIONS.map((d) => (
              <motion.div
                key={d.label}
                variants={staggerChild}
                className="flex items-center gap-2.5 text-sm text-ink-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {d.label}
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        <div className="lg:col-span-7">
          <Parallax distance={-18}>
            <DimensionDiagram coords={DIMENSIONS} />
          </Parallax>
        </div>
      </div>
    </Section>
  );
}

function DimensionDiagram({
  coords,
}: {
  coords: { label: string; x: number; y: number }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-22% 0px' });
  const center = { x: 50, y: 56 };

  return (
    <div
      ref={ref}
      className="relative h-[clamp(380px,48vw,520px)] w-full overflow-hidden rounded-4xl border border-ink-300/30 bg-canvas shadow-card"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F9D74" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0F9D74" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.circle
          cx={center.x}
          cy={center.y}
          r="22"
          fill="url(#center-glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {coords.map((c, i) => {
          const dx = c.x - center.x;
          const dy = c.y - center.y;
          return (
            <g key={c.label}>
              <motion.line
                x1={center.x}
                y1={center.y}
                x2={center.x + dx}
                y2={center.y + dy}
                stroke="#0B1B2B"
                strokeWidth="0.18"
                strokeOpacity="0.32"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.1, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
              />
            </g>
          );
        })}
      </svg>

      {coords.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            transform: 'translate(-50%,-50%)',
          }}
          className="absolute whitespace-nowrap rounded-full bg-white/85 px-3 py-1.5 text-[0.72rem] font-medium text-ink-800 ring-1 ring-ink-300/40 shadow-lift backdrop-blur-sm"
        >
          {c.label}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ left: `${center.x}%`, top: `${center.y}%`, transform: 'translate(-50%,-50%)' }}
        className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-ink-900 text-white shadow-glow"
      >
        <span className="text-[0.62rem] font-semibold tracking-wide">Decision</span>
      </motion.div>
    </div>
  );
}