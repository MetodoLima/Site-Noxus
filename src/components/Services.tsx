import React from 'react';
import { ServiceCard } from './ui/ServiceCard';

export const Services: React.FC = () => {
  const handleScheduleDemo = () => {
    // Handle demo scheduling - could open a modal or navigate to a form
    window.open('https://wa.me/558596437539', '_blank');
  };

  const handleLearnMore = () => {
    // Handle learn more action
    window.open('https://wa.me/558596437539', '_blank');
  };

  const handleAutomate = () => {
    // Abre o WhatsApp em uma nova aba ('_blank')
    window.open('https://wa.me/558596437539', '_blank');
  };

  

  return (
    <section id="services" className="w-full relative bg-[#020811] py-16">
            <header className="text-center mb-8">
        <p className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide mb-2">
          Futuro mais perto de você
        </p>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium w-80 md:w-1/2 mx-auto">
                    A <span className="bg-gradient-to-r from-[#82F9FF] to-[#1641AC] text-transparent bg-clip-text pb-2">Noxus</span> Tem a Solução Perfeita Para o <span className="bg-gradient-to-r from-[#82F9FF] to-[#1641AC] text-transparent bg-clip-text pb-2">Seu Negócio</span>
        </h2>
      </header>

      <article>
        <ServiceCard
          title="Tenha uma Loja Virtual ou Site"
          description="Criamos sua loja virtual ou site integrada com uma IA inteligente e personalizada para o seu negócio. Ela atende seus clientes 24h por dia com respostas rápidas, automáticas e eficientes."
          buttonText="Agende uma Demonstração"
          image="https://api.builder.io/api/v1/image/assets/TEMP/967f186ba4270b324b298d2f79afa30c581afe30?width=1322"
          altText="Demonstração de loja virtual com IA no iPhone"
          onButtonClick={handleScheduleDemo}
        />
      </article>

      <article>
        <ServiceCard
          title="Atendimento e Vendas com IA 24/7"
          description="Implemente uma IA treinada para conversar, vender e solucionar dúvidas dos seus clientes em tempo real. Automatize o atendimento e aumente suas conversões."
          buttonText="Saiba mais"
          image="https://api.builder.io/api/v1/image/assets/TEMP/7bb73676a93219a5fa569a785de835647601440d?width=1322"
          altText="Interface de atendimento com IA 24/7"
          onButtonClick={handleLearnMore}
          reverse={true}
        />
      </article>

      <article>
        <ServiceCard
          title="IA para Agendamento Automático de Pacientes"
          description="Ideal para dentistas, nutricionistas e outros profissionais da saúde, ela conversa com seus pacientes, marca horários e organiza sua agenda 24h por dia, sem esforço."
          buttonText="Quero Automatizar"
          image="/Figures/IA-Agendamento.svg"
          altText="Sistema de agendamento automático para profissionais da saúde"
          onButtonClick={handleAutomate}
        />
      </article>
    </section>
  );
};
