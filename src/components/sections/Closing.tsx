'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/primitives/Button';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { Reveal } from '@/components/motion/Reveal';
import { ClosingFieldBg } from '@/components/visual/ClosingFieldBg';

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end center'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -20]);

  return (
    <section
      ref={ref}
      id="connect"
      className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-ink-900 text-white"
    >
      <ClosingFieldBg />
      <motion.div style={{ y }} className="container-wide relative z-10">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow tone="emerald">10 · Closing</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="mt-7 text-display font-semibold text-white text-balance">
            See what others miss.
          </Reveal>
          <Reveal delay={0.12} as="p" className="mx-auto mt-6 max-w-[560px] text-lead text-ink-300/80 text-pretty">
            The best commercial decisions begin with better intelligence. Let us walk you through
            what that looks like for your portfolio — in a personalized demonstration.
          </Reveal>
          <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="https://www.therxpulse.com/" variant="on-dark" size="lg">
              Schedule a Personalized Demonstration
            </Button>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 rounded-full px-5 py-3.5 text-sm font-medium text-white/80 ring-1 ring-white/15 transition-colors hover:text-white hover:ring-white/30"
            >
              Revisit the Story
            </a>
          </Reveal>
          <Reveal delay={0.24} className="mt-14 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.24em] text-white/40">
            Better decisions
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            Earlier insights
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            Higher confidence
          </Reveal>
        </div>
      </motion.div>
      <a
        href="#connect"
        className="pointer-events-none absolute right-8 top-10 hidden items-center gap-1 text-xs text-white/40 lg:flex"
      >
        why.therxpulse.com
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </section>
  );
}