# AGENTS.md — TheRxPulse Microsite

## Project
Premium executive storytelling microsite for TheRxPulse (hosted at why.therxpulse.com).
Single-page Next.js app targeting static export suitable for GitHub Pages.

## Tech
- Next.js 14.2.x (App Router) · React 18 · TypeScript strict
- Tailwind CSS · Framer Motion · Lucide Icons · Lenis smooth scroll

## Commands
- `npm run dev`   — local dev server
- `npm run build` — static export to `out/`
- `npm run lint`   — `next lint`
- `npm run typecheck` — `tsc --noEmit`

ALWAYS run `npm run typecheck` and `npm run lint` after editing code, then `npm run build` to
verify the static export succeeds before declaring a task complete.

## Architecture
- `src/app/` — App Router (layout, page, globals).
- `src/components/layout/` — Nav, Footer.
- `src/components/sections/` — One file per story section (Hero, Problem, ...).
- `src/components/visual/` — Custom SVG illustrations, animated diagrams, dashboard widgets.
- `src/components/motion/` — Reveal, Parallax, SmoothScrollProvider (Lenis).
- `src/components/primitives/` — Button, Eyebrow, Section (design-system atoms).
- `src/lib/` — utils (cn), sections registry, copy constants.

## Design System
- White canvas, soft gray surfaces, dark navy ink (#0B1B2B), emerald accent (#0F9D74),
  minimal ember (orange) highlights. Whitespace-forward, glassmorphism only where appropriate.
- Type scale: `text-display/h1/h2/h3/h4`, `eyebrow`, `lead`. Use `text-balance`/`text-pretty`.

## Brief (locked copy direction)
See `Prompt.txt` for the full creative brief. Every line of copy must sound like McKinsey:
confident, executive, no buzzwords. AI is silent; never the headline. Reinforce:
"Better decisions. Earlier insights. Higher confidence."

## Motion
Every section uses Reveal/StaggerGroup/Parallax wrappers. Motion communicates clarity
emerging from complexity. Respect `prefers-reduced-motion` (globals.css handles the global kill).

## Imagery
Custom SVG only — never stock. Molecules, network graphs, glass panels, data constellations,
topology maps, flowing particles. Design original dashboard components — no real screenshots.