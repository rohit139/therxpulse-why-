'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, TrendingUp, AlertTriangle, Scale, Compass, Sun } from 'lucide-react';
import { useState } from 'react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal } from '@/components/motion/Reveal';
import { MiniDashboard } from '@/components/visual/MiniDashboard';

const QUESTIONS = [
  {
    id: 'invest',
    icon: TrendingUp,
    question: 'Should we invest in this molecule?',
    note: 'Evaluate opportunity, risk, and timing before capital is committed.',
    dashboard: 'opportunity',
  },
  {
    id: 'competitors',
    icon: AlertTriangle,
    question: 'Which competitors are changing the market?',
    note: 'Identify movers early — across launches, pricing, access, and positioning.',
    dashboard: 'competition',
  },
  {
    id: 'margins',
    icon: Scale,
    question: 'Where are margins under pressure?',
    note: 'Isolate the forces — pricing, supply, mix — compressing profitability.',
    dashboard: 'margins',
  },
  {
    id: 'opportunities',
    icon: Compass,
    question: 'Which opportunities are emerging?',
    note: 'Surface early signals of growth before they become obvious to everyone.',
    dashboard: 'growth',
  },
  {
    id: 'morning',
    icon: Sun,
    question: 'What should leadership know this morning?',
    note: 'A daily briefing of what changed, what matters, and what to act on.',
    dashboard: 'briefing',
  },
] as const;

type DashKey = (typeof QUESTIONS)[number]['dashboard'];

export function Questions() {
  const [active, setActive] = useState<string | null>('invest');

  return (
    <Section id="questions" tone="soft" className="py-28 lg:py-36">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>05 · Questions Every Executive Asks</Eyebrow>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="mt-6 text-h2 font-semibold text-ink-900 text-balance">
            Decisions begin with the right question.
          </Reveal>
          <Reveal delay={0.12} as="p" className="mt-6 text-lead text-ink-500 text-pretty">
            RxPulse is built around the questions leaders actually ask — not the data sources they
            happen to own. Open any one to glimpse the dashboard beneath.
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-3">
            {QUESTIONS.map((q) => {
              const open = active === q.id;
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12% 0px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={[
                    'overflow-hidden rounded-4xl border bg-canvas transition-colors duration-500 ease-premium',
                    open ? 'border-emerald-200 shadow-card' : 'border-ink-300/30',
                  ].join(' ')}
                >
                  <h3 id={`${q.id}-title`} className="sr-only">
                    {q.question}
                  </h3>
                  <button
                    onClick={() => setActive(open ? null : q.id)}
                    aria-expanded={open}
                    aria-controls={`${q.id}-panel`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-surface-100 ring-1 ring-ink-300/30">
                        <Icon className="h-4 w-4 text-ink-700" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-h4 font-medium text-ink-900 text-balance">{q.question}</p>
                        <p className="mt-1 text-sm text-ink-400 text-pretty">{q.note}</p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 ring-ink-300/40"
                    >
                      <ChevronDown className="h-4 w-4 text-ink-700" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`${q.id}-panel`}
                        role="region"
                        aria-labelledby={`${q.id}-title`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-ink-300/20 px-5 pb-6 pt-5 sm:px-7">
                          <MiniDashboard variant={q.dashboard as DashKey} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}