'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal } from '@/components/motion/Reveal';
import { EcosystemMap } from '@/components/visual/EcosystemMap';

export function Ecosystem() {
  return (
    <Section id="ecosystem" tone="soft" className="overflow-hidden py-28 lg:py-40">
      <div className="absolute inset-0 shell-aurora opacity-70" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative">
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow tone="emerald">07 · The Bigger Picture</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="mt-6 text-h2 font-semibold text-ink-900 text-balance">
            No single signal tells the story. The connections do.
          </Reveal>
          <Reveal delay={0.12} as="p" className="mt-6 text-lead text-ink-500 text-pretty">
            Products live within organizations. Organizations sit in markets. Markets move with
            manufacturing, supply, competition, and pricing. RxPulse keeps the whole picture in
            view — and connected — at all times.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <EcosystemMap />
        </Reveal>
        <p className="mt-8 text-center text-sm text-ink-400">
          Products · Organizations · Manufacturing · Competition · Supply · Pricing · Market
        </p>
      </div>
    </Section>
  );
}