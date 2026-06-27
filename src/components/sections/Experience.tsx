'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/components/primitives/Section';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal } from '@/components/motion/Reveal';
import { Parallax } from '@/components/motion/Parallax';
import { ExperienceGlyph } from '@/components/visual/ExperienceGlyph';

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <Section id="experience" tone="light" className="py-28 lg:py-40">
      <div ref={ref} className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow tone="emerald">08 · Built on Experience</Eyebrow>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="mt-6 text-h1 font-semibold text-ink-900 text-balance">
            Experience first. Intelligence always.
          </Reveal>
          <Reveal delay={0.12} as="p" className="mt-7 text-lead text-ink-500 text-pretty max-w-[560px]">
            Every insight reflects decades of pharmaceutical market understanding. Intelligent
            automation continuously processes evolving market signals so that expertise scales with
            the pace of the industry.
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                h: 'Pharmaceutical-first',
                p: 'Built by strategists who lived inside the commercial decisions of the industry.',
              },
              {
                h: 'Continuous by design',
                p: 'Signals are read as they evolve — not as snapshots pulled on demand.',
              },
              {
                h: 'Expertise at scale',
                p: 'Automation lets senior judgment reach every molecule in the portfolio.',
              },
              {
                h: 'Trust by construction',
                p: 'Every output traceable to the signal, the weight, and the assumption behind it.',
              },
            ].map((item, i) => (
              <Reveal key={item.h} delay={0.18 + i * 0.06}>
                <div className="border-t border-ink-300/30 pt-5">
                  <p className="text-h4 font-medium text-ink-900">{item.h}</p>
                  <p className="mt-2 text-sm text-ink-500 text-pretty">{item.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <Parallax distance={28}>
            <motion.div style={{ rotate }} className="relative mx-auto flex h-[clamp(360px,46vw,500px)] w-full max-w-[480px] items-center justify-center">
              <ExperienceGlyph />
            </motion.div>
          </Parallax>
        </div>
      </div>
    </Section>
  );
}