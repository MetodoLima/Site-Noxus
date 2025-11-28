import React from 'react';
import { HeroGeometric } from './ui/shape-landing-hero';

export const Hero: React.FC = () => {
  const handleGetStarted = () => {
    window.open('https://wa.me/558596437539', '_blank', 'noopener,noreferrer');
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
