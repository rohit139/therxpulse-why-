import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-ink-300/30 bg-surface-50">
      <div className="container-wide py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-ink-900">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                  <path d="M4 14c2.5 0 3-3 5.5-3s3 3 5 3 3-3 5-3" stroke="#10A884" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="12" cy="6" r="1.6" fill="#FFFFFF" />
                </svg>
              </span>
              <span className="text-[0.95rem] font-semibold tracking-tight">TheRxPulse</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 text-pretty">
              Commercial Intelligence for Pharmaceutical Leaders. Better decisions. Earlier
              insights. Higher confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="Explore"
              items={[
                ['The Gap', '#problem'],
                ['Signals to Decisions', '#engine'],
                ['Decision Intelligence', '#intelligence'],
                ['For Leaders', '#leaders'],
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                ['Request Demo', '#connect'],
                ['why.therxpulse.com', '#top'],
              ]}
            />
            <div>
              <div className="text-eyebrow text-ink-400 uppercase">Status</div>
              <div className="mt-3 flex items-center gap-2 text-sm text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                Intelligence Live
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-300/30 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} TheRxPulse. All rights reserved.</span>
          <a href="#top" className="group inline-flex items-center gap-1 font-medium hover:text-ink-700">
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-eyebrow text-ink-400 uppercase">{title}</div>
      <ul className="mt-3 space-y-2">
        {items.map(([label, href]) => (
          <li key={href + label}>
            <a href={href} className="text-sm text-ink-600 transition-colors hover:text-ink-900">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}