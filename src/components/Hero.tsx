import React from 'react';
import { HeroGeometric } from './ui/shape-landing-hero';

export const Hero: React.FC = () => {
  const handleGetStarted = () => {
    // Scroll to features section or handle navigation
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative">
      <HeroGeometric
        badge="Noxus AI"
        title1="Transforme seu Negócio com"
        title2="Inteligência Artificial"
        description="Criamos soluções inteligentes para automatizar seu atendimento, aumentar suas vendas e transformar a experiência dos seus clientes 24 horas por dia."
        buttonText="Comece Agora"
        onButtonClick={handleGetStarted}
      />
    </section>
  );
};
