'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { forwardRef, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-dark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-900 text-white hover:bg-ink-800 shadow-[0_1px_2px_rgba(11,27,43,0.18),0_14px_32px_-14px_rgba(11,27,43,0.45)]',
  secondary:
    'bg-white text-ink-900 ring-1 ring-inset ring-ink-300/60 hover:ring-ink-300 hover:bg-surface-50',
  ghost: 'bg-transparent text-ink-700 hover:bg-surface-100/70',
  'on-dark':
    'bg-white text-ink-900 hover:bg-surface-50 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_18px_40px_-16px_rgba(0,0,0,0.4)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-full',
  md: 'h-11 px-5 text-[0.95rem] rounded-full',
  lg: 'h-12 px-7 py-3.5 text-base rounded-full',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', href, children, className = '', icon, ...rest },
    ref,
  ) {
    const cls = `group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${variants[variant]} ${sizes[size]} ${className}`;

    const inner = (
      <>
        <span className="relative z-10">{children}</span>
        {icon ?? (variant === 'primary' || variant === 'on-dark' ? (
          <ArrowRight
            className="relative z-10 h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        ) : null)}
        <motion.span
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          aria-hidden
        >
          <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 ease-premium group-hover:translate-y-0" />
        </motion.span>
      </>
    );

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
          whileTap={{ scale: 0.98 }}
          {...(rest as HTMLMotionProps<'a'>)}
        >
          {inner}
        </motion.a>
      );
    }
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        whileTap={{ scale: 0.98 }}
        {...rest}
      >
        {inner}
      </motion.button>
    );
  },
);