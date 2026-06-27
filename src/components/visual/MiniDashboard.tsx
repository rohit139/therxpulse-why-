'use client';

import { motion, useInView } from 'framer-motion';
import { Activity, ArrowUpRight, TrendingDown, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

type DashKey = 'opportunity' | 'competition' | 'margins' | 'growth' | 'briefing';

export function MiniDashboard({ variant }: { variant: DashKey }) {
  switch (variant) {
    case 'opportunity':
      return <OpportunityDash />;
    case 'competition':
      return <CompetitionDash />;
    case 'margins':
      return <MarginsDash />;
    case 'growth':
      return <GrowthDash />;
    case 'briefing':
      return <BriefingDash />;
  }
}

function Tile({ title, value, delta, tone = 'up' }: { title: string; value: string; delta?: string; tone?: 'up' | 'down' | 'neutral' }) {
  const color = tone === 'up' ? 'text-emerald-600' : tone === 'down' ? 'text-ember-500' : 'text-ink-500';
  return (
    <div className="rounded-2xl border border-ink-300/25 bg-surface-50 px-4 py-3.5">
      <div className="text-[0.66rem] uppercase tracking-[0.16em] text-ink-400">{title}</div>
      <div className="mt-1.5 flex items-end justify-between">
        <span className="text-2xl font-semibold tracking-tight text-ink-900">{value}</span>
        {delta && <span className={`flex items-center gap-1 text-xs font-medium ${color}`}>{delta}</span>}
      </div>
    </div>
  );
}

function OpportunityDash() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-ink-300/25 bg-canvas p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-ink-700">Opportunity Score</p>
          <span className="flex items-center gap-1 rounded-full bg-emerald-100/60 px-2.5 py-1 text-xs font-medium text-emerald-700">
            <TrendingUp className="h-3 w-3" /> +18%
          </span>
        </div>
        <div className="mt-4 flex items-end gap-1.5" style={{ height: 120 }}>
          {[40, 58, 49, 72, 80, 91, 96].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              animate={inView ? { height: `${h}%`, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-200 to-emerald-500"
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[0.66rem] text-ink-400">
          {['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3'].map((q) => (
            <span key={q}>{q}</span>
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        <Tile title="Launch Readiness" value="0.84" delta="+6 pts" />
        <Tile title="Time to Window" value="14 mo" delta="-2 mo" tone="up" />
        <Tile title="Risk Weighting" value="Low" tone="up" />
      </div>
    </div>
  );
}

function CompetitionDash() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const rivals = [
    { name: 'Competitor A', share: 38, momentum: 'Leader' },
    { name: 'Competitor B', share: 24, momentum: 'Mover' },
    { name: 'Competitor C', share: 19, momentum: 'Static' },
    { name: 'Competitor D', share: 11, momentum: 'New' },
  ];
  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-3xl border border-ink-300/25 bg-canvas p-5">
        <p className="text-sm font-medium text-ink-700">Competitive Pressure Index</p>
        <div className="mt-5 space-y-3">
          {rivals.map((r, i) => (
            <div key={r.name}>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-600">{r.name}</span>
                <span className="text-ink-400">{r.momentum}</span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-surface-200">
                <motion.span
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${r.share}%` } : {}}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`block h-full rounded-full ${r.momentum === 'Mover' ? 'bg-ember-500' : 'bg-ink-700'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        <Tile title="Market Share" value="24%" delta="+3.1 pts" />
        <Tile title="Share Trend" value="Expanding" tone="up" />
        <Tile title="Threat Level" value="Elevated" tone="down" />
      </div>
    </div>
  );
}

function MarginsDash() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const series = [62, 60, 57, 55, 53, 51, 49, 51];
  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-3xl border border-ink-300/25 bg-canvas p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-ink-700">Margin Trend (8 quarters)</p>
          <span className="flex items-center gap-1 rounded-full bg-ember-200/40 px-2.5 py-1 text-xs font-medium text-ember-500">
            <TrendingDown className="h-3 w-3" /> −12 pts
          </span>
        </div>
        <svg viewBox="0 0 200 90" className="mt-4 h-28 w-full">
          <defs>
            <linearGradient id="margin-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E87A3E" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#E87A3E" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.polyline
            points={series.map((v, i) => `${(i / (series.length - 1)) * 196 + 2},${82 - (v - 45) * 3.2}`).join(' ')}
            fill="none"
            stroke="#E87A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
          <motion.polygon
            points={
              `${series.map((v, i) => `${(i / (series.length - 1)) * 196 + 2},${82 - (v - 45) * 3.2}`).join(' ')} 198,88 2,88`
            }
            fill="url(#margin-fill)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </svg>
      </div>
      <div className="grid gap-3">
        <Tile title="Gross Margin" value="49%" delta="−4 pts" tone="down" />
        <Tile title="Pressure Driver" value="Supply mix" tone="down" />
        <Tile title="At Risk SKUs" value="11" tone="down" />
      </div>
    </div>
  );
}

function GrowthDash() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const bubbles = [
    { x: 22, y: 60, r: 8, name: 'Therapy A' },
    { x: 40, y: 30, r: 14, name: 'Therapy B' },
    { x: 62, y: 52, r: 10, name: 'Therapy C' },
    { x: 78, y: 36, r: 18, name: 'Therapy D' },
    { x: 50, y: 70, r: 7, name: 'Therapy E' },
  ];
  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
      <div className="relative rounded-3xl border border-ink-300/25 bg-canvas p-5">
        <p className="text-sm font-medium text-ink-700">Emerging Opportunity Map</p>
        <svg viewBox="0 0 100 80" className="mt-3 h-32 w-full">
          {bubbles.map((b, i) => (
            <motion.g
              key={b.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <circle cx={b.x} cy={b.y} r={b.r} fill="#0F9D74" fillOpacity="0.18" stroke="#0F9D74" strokeWidth="0.4" />
            </motion.g>
          ))}
          {bubbles.map((b) => (
            <text key={`t-${b.name}`} x={b.x} y={b.y + b.r + 4} fontSize="2.6" textAnchor="middle" fill="#5C7396">
              {b.name}
            </text>
          ))}
        </svg>
      </div>
      <div className="grid gap-3">
        <Tile title="Growth Index" value="1.42" delta="+0.18" />
        <Tile title="Breakout Signals" value="3" tone="up" />
        <Tile title="Watch Window" value="30 days" tone="neutral" />
      </div>
    </div>
  );
}

function BriefingDash() {
  const items = [
    { tag: 'Pricing', text: 'Net price declined 4% in EU tender — flow-through risk.', tone: 'ember' as const },
    { tag: 'Pipeline', text: 'Competitor P3 readout moved forward by one quarter.', tone: 'emerald' as const },
    { tag: 'Supply', text: 'API disruption flagged for 2 SKUs in Tier 1.', tone: 'ember' as const },
    { tag: 'Access', text: 'Reimbursement approval expanded to 3 markets.', tone: 'emerald' as const },
  ];
  return (
    <div className="rounded-3xl border border-ink-300/25 bg-canvas p-5">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-medium text-ink-700">
          <Activity className="h-4 w-4 text-emerald-600" /> Morning Briefing
        </p>
        <span className="text-xs text-ink-400">07:00 · Updated live</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {items.map((it) => (
          <motion.div
            key={it.text}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-3 rounded-2xl bg-surface-50 px-3.5 py-3"
          >
            <span
              className={`mt-1 flex h-1.5 w-1.5 rounded-full ${it.tone === 'emerald' ? 'bg-emerald-500' : 'bg-ember-500'}`}
            />
            <div>
              <div className={`text-[0.62rem] uppercase tracking-[0.16em] ${it.tone === 'emerald' ? 'text-emerald-600' : 'text-ember-500'}`}>{it.tag}</div>
              <p className="text-sm text-ink-700 text-pretty">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <a href="#connect" className="group mt-4 inline-flex items-center gap-1 text-xs font-medium text-ink-500 hover:text-ink-900">
        View full briefing
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}