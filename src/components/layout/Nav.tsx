'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/sections';
import { Button } from '@/components/primitives/Button';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center"
    >
      <div
        className={[
          'mx-3 mt-3 flex w-full max-w-[1320px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ease-premium',
          scrolled
            ? 'glass shadow-card border-white/60'
            : 'border-transparent bg-transparent',
        ].join(' ')}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-2">
          <Logo />
          <span className="text-[0.95rem] font-semibold tracking-tight text-ink-900">
            TheRxPulse
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-3.5 py-1.5 text-[0.86rem] font-medium text-ink-500 transition-colors duration-300 hover:text-ink-900 hover:bg-surface-100/70"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://therxpulse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 border-l border-ink-300/40 pl-4 text-[0.86rem] font-medium text-ink-500 hover:text-ink-900"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
            therxpulse.com
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <Button href="#connect" size="sm" className="ml-2">
            Request Demo
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-ink-300/40 bg-white/60"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-ink-900 transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-ink-900 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-4 bg-ink-900 transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute inset-x-3 top-16 z-50 glass rounded-3xl p-3 shadow-card"
          id="mobile-menu"
          role="menu"
        >
          <div className="grid grid-cols-2 gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-surface-100"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between gap-2 border-t border-ink-300/30 pt-3">
            <a
              href="https://therxpulse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 text-xs text-ink-400 hover:text-ink-700"
            >
              therxpulse.com
            </a>
            <Button href="#connect" size="sm" onClick={() => setOpen(false)}>
              Request Demo
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Logo() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-ink-900 shadow-lift">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
        <path
          d="M4 14c2.5 0 3-3 5.5-3s3 3 5 3 3-3 5-3"
          stroke="#10A884"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="6" r="1.6" fill="#FFFFFF" />
      </svg>
    </span>
  );
}