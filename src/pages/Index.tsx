import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ResultsSection } from '@/components/ResultsSection';
import { Features } from '@/components/Features';
import { Services } from '@/components/Services';

import { CallToAction } from '@/components/CallToAction';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-[1936px] relative mx-auto my-0 pt-16">
        <Hero />
        <ResultsSection />
        <Features />
        <Services />
      </main>
      
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
};

export default Index;
