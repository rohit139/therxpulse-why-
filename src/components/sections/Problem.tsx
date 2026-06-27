'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal } from '@/components/motion/Reveal';
import { Parallax } from '@/components/motion/Parallax';

const SIGNALS = [
  'Pricing shifts',
  'Patent cliffs',
  'Manufacturing alerts',
  'Regulatory filings',
  'Supply disruption',
  'Competitor launches',
  'Market access moves',
  'Pipeline reads',
  'Channel behavior',
  'Tender results',
  'Lifecycle events',
  'Therapeutic demand',
];

export function Problem() {
  return (
    <Section id="problem" tone="light" className="py-28 lg:py-36">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow tone="emerald">02 · The Reality</Eyebrow>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="mt-6 text-h2 font-semibold text-ink-900 text-balance">
            The industry doesn&apos;t need more&nbsp;data.
          </Reveal>
          <Reveal delay={0.12} as="p" className="mt-6 text-lead text-ink-500 text-pretty max-w-[520px]">
            Pharmaceutical organizations already move within an ocean of information. The
            challenge is not access — it is interpretation. Understanding what changed, why it
            matters, and what to do next.
          </Reveal>

          <div className="mt-10 space-y-5">
            {[
              { q: 'What changed?', note: 'And which change is signal, not noise.' },
              { q: 'Why it matters?', note: 'For the molecule, the portfolio, the quarter.' },
              { q: 'What to do next?', note: 'With confidence and on time.' },
            ].map((item, i) => (
              <Reveal key={item.q} delay={0.18 + i * 0.08}>
                <div className="flex items-start gap-4 border-t border-ink-300/25 pt-4">
                  <span className="mt-1 font-mono text-xs text-emerald-600">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-h4 font-medium text-ink-900">{item.q}</p>
                    <p className="mt-1 text-sm text-ink-400">{item.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Parallax distance={24} className="relative">
            <ConvergenceViz />
          </Parallax>
        </div>
      </div>
    </Section>
  );
}

function ConvergenceViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  const points = SIGNALS.map((_, i) => {
    const angle = (i / SIGNALS.length) * Math.PI * 2;
    const r = 36;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  });

  return (
    <div
      ref={ref}
      className="relative h-[clamp(420px,52vw,560px)] w-full overflow-hidden rounded-4xl border border-ink-300/30 bg-surface-50 shadow-card"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 shell-aurora" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {points.map((p, i) => (
          <motion.line
            key={`line-${i}`}
            x1={50}
            y1={50}
            x2={p.x}
            y2={p.y}
            stroke="#0F9D74"
            strokeWidth={0.18}
            strokeOpacity={0.3}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
            transition={{ duration: 1.1, delay: 0.35 + i * 0.06, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {SIGNALS.map((s, i) => {
        const { x, y } = points[i];
        return (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: [0, 1, 0.62, 1], scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{
              duration: 1.4,
              delay: 0.5 + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ left: `${x}%`, top: `${y}%`, x: '-50%', y: '-50%' }}
            className="absolute whitespace-nowrap rounded-full bg-white/85 px-2.5 py-1 text-[0.68rem] font-medium text-ink-600 ring-1 ring-ink-300/40 shadow-lift backdrop-blur-sm"
          >
            {s}
          </motion.span>
        );
      })}

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
        className="absolute flex flex-col items-center"
      >
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-ink-900 text-white shadow-glow">
          <motion.div
            className="absolute inset-0 rounded-full ring-2 ring-emerald-400/40"
            animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
          />
          <span className="text-center text-[0.62rem] font-medium tracking-wide opacity-80">
            Fragmented
            <br />
            signals
          </span>
        </div>
        <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
          Converging into confusion
        </p>
      </motion.div>
    </div>
  );
}