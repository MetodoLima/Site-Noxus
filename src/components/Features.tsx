import React from 'react';
import { FeatureCard } from './ui/FeatureCard';
import { Clock, Target, Cpu } from 'lucide-react';

const featuresData = [
  {
    title: 'Atendimento Rápido',
    subtitle: 'Você está perdendo clientes por demora na resposta',
    icon: <Clock size={48} className="text-cyan-400" />,
  },
  {
    title: 'Solução Personalizada',
    subtitle: 'Não tenha mais dor de cabeça no atendimento',
    icon: <Target size={48} className="text-cyan-400" />,
  },
  {
    title: 'Inteligência Artificial',
    subtitle: 'Tenha uma IA que trabalha por você 24 horas por dia, 7 dias por semana',
    icon: <Cpu size={48} className="text-cyan-400" />,
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="w-full bg-[#020811] py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium">
            <span className="block text-white">Dores Reais.</span>
            <span className="block bg-gradient-to-r from-white to-[#0066CC] text-transparent bg-clip-text pb-3">Soluções Inteligentes.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-12">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://wa.me/558596437539" className="bg-gradient-to-r from-[#82F9FF] to-[#1641AC] text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out">
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
};
