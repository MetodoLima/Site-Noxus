import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Services } from '@/components/Services';

const Index: React.FC = () => {
  return (
    <main className="w-full max-w-[1936px] relative mx-auto my-0">
      <Hero />
      <Features />
      <Services />
    </main>
  );
};

export default Index;
