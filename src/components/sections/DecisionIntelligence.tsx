'use client';

import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal, StaggerGroup, staggerChild } from '@/components/motion/Reveal';

const KPIS = [
  { label: 'Opportunity Score', value: 0.84, suffix: '', format: 'pct', note: 'Across active molecules' },
  { label: 'Competitive Pressure', value: 6.2, suffix: '/10', format: 'plain', note: 'Live index, market-weighted' },
  { label: 'Growth Index', value: 142, suffix: '', format: 'idx', note: '3-quarter momentum' },
  { label: 'Launch Readiness', value: 78, suffix: '%', format: 'plain', note: 'Portfolio composite' },
  { label: 'Portfolio Health', value: 0.91, suffix: '', format: 'pct', note: 'Composite vitality score' },
  { label: 'Market Momentum', value: 12.4, suffix: '%', format: 'plain', note: 'Trailing 90-day movement' },
];

export function DecisionIntelligence() {
  return (
    <Section id="intelligence" tone="light" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow tone="emerald">06 · Decision Intelligence</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.06} as="h2" className="mt-6 text-h2 font-semibold text-ink-900 text-balance">
          We don&apos;t show features. We show the decisions you make.
        </Reveal>
        <Reveal delay={0.12} as="p" className="mt-6 text-lead text-ink-500 text-pretty">
          The platform reads continuously across the market and distills it into a small set of
          executive-grade signals — the metrics leadership actually acts on.
        </Reveal>
      </div>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {KPIS.map((k) => (
          <motion.div
            key={k.label}
            variants={staggerChild}
            className="group relative overflow-hidden rounded-4xl border border-ink-300/25 bg-surface-50 p-6 transition-shadow duration-500 ease-premium hover:shadow-card"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="text-eyebrow text-ink-400 uppercase">{k.label}</p>
            <div className="mt-4 flex items-baseline gap-1">
              <Counter value={k.value} format={k.format as 'plain' | 'pct' | 'idx'} />
              <span className="text-2xl font-medium text-ink-500">{k.suffix}</span>
            </div>
            <p className="mt-3 text-sm text-ink-400 text-pretty">{k.note}</p>
            <Sparkline className="mt-5" />
          </motion.div>
        ))}
      </StaggerGroup>
    </Section>
  );
}

function Counter({ value, format }: { value: number; format: 'plain' | 'pct' | 'idx' }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => formatter(v, format));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, mv, value]);

  return (
    <motion.span ref={ref} className="text-[2.6rem] font-semibold tracking-tight text-ink-900 tabular-nums">
      {rounded}
    </motion.span>
  );;
}

function formatter(v: number, format: 'plain' | 'pct' | 'idx') {
  if (format === 'pct') return `${Math.round(v * 100)}%`;
  if (format === 'idx') return `${Math.round(v)}`;
  return `${v.toFixed(v % 1 === 0 ? 0 : 1)}`;
}

function Sparkline({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const pts = [12, 18, 14, 22, 28, 24, 33, 39];
  const W = 100;
  const H = 28;
  const path = pts
    .map((p, i) => `${(i / (pts.length - 1)) * W},${H - (p / 40) * H}`)
    .join(' ');
  return (
    <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className={`h-7 w-full ${className}`} preserveAspectRatio="none">
      <motion.polyline
        points={path}
        fill="none"
        stroke="#10A884"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
    </svg>
  );
}