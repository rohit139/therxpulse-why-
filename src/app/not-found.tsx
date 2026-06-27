import Link from 'next/link';
import { Button } from '@/components/primitives/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] items-center justify-center bg-canvas px-6">
      <div className="text-center">
        <p className="text-eyebrow text-emerald-600 uppercase">404</p>
        <h1 className="mt-5 text-h1 font-semibold text-ink-900 text-balance">
          This signal is still converging.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lead text-ink-500 text-pretty">
          The page you were looking for isn&apos;t here. Return to the story — there&apos;s
          more to see.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" size="lg">
            Return to TheRxPulse
          </Button>
        </div>
      </div>
    </main>
  );
}