import { cn } from '@/lib/utils';

export function Eyebrow({
  children,
  className,
  tone = 'ink',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'ink' | 'emerald';
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          'h-px w-8',
          tone === 'emerald' ? 'bg-emerald-500' : 'bg-ink-300',
        )}
      />
      <span
        className={cn(
          'text-eyebrow font-medium uppercase tracking-[0.22em]',
          tone === 'emerald' ? 'text-emerald-600' : 'text-ink-400',
          className,
        )}
      >
        {children}
      </span>
    </div>
  );
}