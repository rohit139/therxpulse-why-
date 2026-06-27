'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Plus } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/primitives/Button';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { SignalConstellationBg } from '@/components/visual/SignalConstellationBg';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-canvas"
    >
      <motion.div style={{ scale, willChange: 'transform' }} className="absolute inset-0 shell-aurora" />
      <div className="absolute inset-0 bg-grid opacity-70" />
      <SignalConstellationBg />

      <motion.div
        style={{ y, opacity, willChange: 'transform, opacity' }}
        className="container-wide relative z-10 grid grid-cols-1 gap-10 pt-24 lg:grid-cols-12 lg:pt-28"
      >
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <Eyebrow tone="emerald">Commercial Intelligence · Pharmaceutical</Eyebrow>
          </motion.div>

          <h1 className="mt-7 font-sans text-display font-semibold text-ink-900 text-balance">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            >
              Commercial Intelligence
            </motion.span>
            <motion.span
              className="block text-gradient"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
            >
              for Pharmaceutical Leaders
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.58 }}
            className="mt-7 max-w-[640px] text-lead font-normal text-ink-500 text-pretty"
          >
            Transform fragmented market signals into strategic decisions through decades of
            pharmaceutical expertise enhanced by intelligent automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#connect" size="lg">
              Request Demo
            </Button>
            <Button href="#problem" variant="secondary" size="lg" icon={null}>
              Explore the Story
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.86 }}
            className="mt-12 grid max-w-[640px] grid-cols-3 gap-6 border-t border-ink-300/30 pt-6"
          >
            <Pillar label="Better decisions" />
            <Pillar label="Earlier insights" />
            <Pillar label="Higher confidence" />
          </motion.div>
        </div>

        <div className="hidden lg:col-span-4 lg:flex">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="glass relative w-full rounded-4xl p-6 shadow-glass"
          >
            <div className="flex items-center justify-between">
              <span className="text-eyebrow text-ink-400 uppercase">Signal Flow</span>
              <span className="flex h-2 w-2 items-center justify-center">
                <Plus className="h-3.5 w-3.5 text-ink-400" />
              </span>
            </div>
            <div className="mt-6 space-y-3">
              {['Pricing', 'Competition', 'Regulatory', 'Supply'].map((s, i) => (
                <SignalRow key={s} label={s} value={84 - i * 9} delay={0.9 + i * 0.12} />
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-ink-900 px-4 py-3 text-white">
              <span className="text-xs font-medium tracking-wide opacity-80">
                Convergence
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: 1.4 }}
                className="text-sm font-semibold text-emerald-400"
              >
                +12.4%
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <a
        href="#problem"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-ink-400 transition-colors hover:text-ink-900"
        aria-label="Scroll to story"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-eyebrow uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  );
}

function Pillar({ label }: { label: string }) {
  return (
    <div>
      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      <span className="mt-2 block text-sm font-medium text-ink-700">{label}</span>
    </div>
  );
}

function SignalRow({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-ink-500">{label}</span>
        <span className="font-medium text-ink-700">{value}%</span>
      </div>
      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-surface-200">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
          className="block h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
        />
      </div>
    </div>
  );
}