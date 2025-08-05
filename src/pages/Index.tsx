import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-[1936px] relative mx-auto my-0 pt-16">
        <Hero />
        <Features />
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default Index;
