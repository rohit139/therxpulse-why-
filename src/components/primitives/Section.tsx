import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

export function Section({
  id,
  children,
  className,
  tone = 'light',
  width = 'wide',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'light' | 'soft' | 'dark';
  width?: 'wide' | 'prose';
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24',
        tone === 'light' && 'bg-canvas',
        tone === 'soft' && 'bg-surface-50',
        tone === 'dark' && 'bg-ink-900 text-white',
        className,
      )}
    >
      <div
        className={cn(
          'relative',
          width === 'wide' ? 'container-wide' : 'container-prose',
        )}
      >
        {children}
      </div>
    </section>
  );
}