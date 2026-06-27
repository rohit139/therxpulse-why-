'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal } from '@/components/motion/Reveal';

const DECISIONS = [
  'Launch Opportunity',
  'Competitive Threat',
  'Pricing Pressure',
  'Growth Potential',
  'Supply Risk',
  'Portfolio Priority',
];

const SOURCES = [
  'Pricing',
  'Competition',
  'Manufacturing',
  'Regulatory',
  'Supply',
  'Market Behavior',
  'Portfolio',
];

export function Engine() {
  return (
    <Section id="engine" tone="light" className="py-28 lg:py-40">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow tone="emerald">04 · From Signals to Decisions</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.06} as="h2" className="mt-6 text-h2 font-semibold text-ink-900 text-balance">
          Fragments become a single, trustworthy picture.
        </Reveal>
        <Reveal delay={0.12} as="p" className="mt-6 text-lead text-ink-500 text-pretty">
          Thousands of disconnected signals flow into the RxPulse Intelligence Engine and emerge as
          commercial decisions — clear, contextual, ready for leadership.
        </Reveal>
      </div>

      <div className="mt-16">
        <EngineFlow />
      </div>
    </Section>
  );
}

function EngineFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-18% 0px' });

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch"
    >
      {/* Signals column */}
      <div className="space-y-3">
        <p className="text-eyebrow text-ink-400 uppercase">Signals</p>
        <div className="grid gap-2.5">
          {SOURCES.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 rounded-2xl border border-ink-300/30 bg-white px-3.5 py-2.5 shadow-lift"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
              <span className="text-sm text-ink-700">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flow line */}
      <div className="relative hidden w-16 lg:flex">
        <FlowLines inView={inView} />
      </div>

      {/* Engine core */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full bg-ink-900 text-white shadow-glow sm:h-52 sm:w-52"
        >
          <motion.span
            className="absolute inset-0 rounded-full ring-1 ring-emerald-400/40"
            animate={{ scale: [1, 1.16, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.span
            className="absolute inset-3 rounded-full ring-1 ring-emerald-400/25"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.6, ease: 'easeOut' }}
          />
          <svg viewBox="0 0 24 24" className="h-9 w-9 text-emerald-400" fill="none" aria-hidden>
            <path d="M4 14c2.5 0 3-3 5.5-3s3 3 5 3 3-3 5-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="mt-3 px-6 text-center text-[0.74rem] font-semibold leading-relaxed">
            RxPulse
            <br />
            Intelligence Engine
          </span>
        </motion.div>
      </div>

      {/* Flow line out */}
      <div className="relative hidden w-16 lg:flex">
        <FlowLines inView={inView} reverse />
      </div>

      {/* Decisions column */}
      <div className="space-y-3">
        <p className="text-eyebrow text-ink-400 uppercase">Commercial Decisions</p>
        <div className="grid gap-2.5">
          {DECISIONS.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 rounded-2xl bg-emerald-100/60 px-3.5 py-2.5 ring-1 ring-emerald-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="text-sm font-medium text-ink-800">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowLines({ inView, reverse = false }: { inView: boolean; reverse?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 200"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={reverse ? 'flow-out' : 'flow-in'}
          x1={reverse ? '0%' : '100%'}
          x2={reverse ? '100%' : '0%'}
          y1="0%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#0F9D74" stopOpacity="0" />
          <stop offset="50%" stopColor="#0F9D74" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0F9D74" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[40, 100, 160].map((y, i) => (
        <motion.line
          key={y}
          x1={reverse ? 0 : 64}
          y1={y}
          x2={reverse ? 0 : 64}
          y2={y}
          stroke={`url(#${reverse ? 'flow-out' : 'flow-in'})`}
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
}