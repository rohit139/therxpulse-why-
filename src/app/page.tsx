import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { IntelligenceGap } from '@/components/sections/IntelligenceGap';
import { Engine } from '@/components/sections/Engine';
import { Questions } from '@/components/sections/Questions';
import { DecisionIntelligence } from '@/components/sections/DecisionIntelligence';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { Experience } from '@/components/sections/Experience';
import { Leaders } from '@/components/sections/Leaders';
import { Closing } from '@/components/sections/Closing';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <IntelligenceGap />
        <Engine />
        <Questions />
        <DecisionIntelligence />
        <Ecosystem />
        <Experience />
        <Leaders />
        <Closing />
      </main>
      <Footer />
    </>
  );
}