'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  BarChart3,
  Handshake,
  Radar,
  Crown,
} from 'lucide-react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal, StaggerGroup, staggerChild } from '@/components/motion/Reveal';

const PERSONAS = [
  {
    icon: Briefcase,
    title: 'Portfolio Strategy',
    outcome: 'See which molecules deserve capital — and which no longer do.',
    metric: ['Allocation', 'Confidence up to 0.84'],
  },
  {
    icon: BarChart3,
    title: 'Commercial Excellence',
    outcome: 'Align pricing, mix, and access to the market that is — not the one that was.',
    metric: ['Margin Bridge', 'Risk held to −2 pts'],
  },
  {
    icon: Handshake,
    title: 'Business Development',
    outcome: 'Identify in-licensing and partnership windows before they close.',
    metric: ['Window Watch', '3 surfaced this week'],
  },
  {
    icon: Radar,
    title: 'Competitive Intelligence',
    outcome: 'Track every competitor that is moving the market — and the ones about to.',
    metric: ['Movers', '+1 in 24h'],
  },
  {
    icon: Crown,
    title: 'Executive Leadership',
    outcome: 'A single source of truth for what the organization should know, and do, this morning.',
    metric: ['Morning Brief', '07:00 sharp'],
  },
];

export function Leaders() {
  return (
    <Section id="leaders" tone="soft" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>09 · Designed for Leaders</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.06} as="h2" className="mt-6 text-h2 font-semibold text-ink-900 text-balance">
          Built for the people accountable for the decision.
        </Reveal>
        <Reveal delay={0.12} as="p" className="mt-6 text-lead text-ink-500 text-pretty">
          Each persona arrives at RxPulse with a different question, and leaves with the same
          outcome: a clearer decision, made earlier, with higher confidence.
        </Reveal>
      </div>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PERSONAS.map((p) => {
          const Icon = p.icon;
          return (
            <motion.article
              key={p.title}
              variants={staggerChild}
              className="group relative flex flex-col justify-between rounded-4xl border border-ink-300/30 bg-canvas p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-card"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-lift">
                  <Icon className="h-4 w-4 text-emerald-400" strokeWidth={1.5} />
                </span>
                <p className="mt-5 text-h4 font-medium text-ink-900">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 text-pretty">
                  {p.outcome}
                </p>
              </div>
              <div className="mt-7 flex items-center justify-between border-t border-ink-300/25 pt-4">
                <span className="text-[0.66rem] uppercase tracking-[0.16em] text-ink-400">
                  {p.metric[0]}
                </span>
                <span className="text-sm font-medium text-emerald-600">{p.metric[1]}</span>
              </div>
              <span className="pointer-events-none absolute inset-x-7 bottom-7 h-px origin-left scale-x-0 bg-emerald-400/60 transition-transform duration-500 ease-premium group-hover:scale-x-100" />
            </motion.article>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}