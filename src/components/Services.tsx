import React from 'react';
import { ServiceCard } from './ui/ServiceCard';

export const Services: React.FC = () => {
  const handleScheduleDemo = () => {
    // Handle demo scheduling - could open a modal or navigate to a form
    alert('Funcionalidade de agendamento de demonstração será implementada');
  };

  const handleLearnMore = () => {
    // Handle learn more action
    alert('Mais informações sobre atendimento com IA');
  };

  const handleAutomate = () => {
    // Handle automation request
    alert('Solicitar automação de agendamento');
  };

  return (
    <section id="services" className="w-full relative pt-[85px] pb-0 px-0 max-md:px-5 max-md:py-10">
      <header className="text-center mb-[220px] max-md:mb-[60px]">
        <p className="w-[435px] h-[55px] text-[#06C] text-center text-3xl font-semibold leading-[84px] tracking-[1px] mt-0 mb-[11px] mx-auto max-md:w-full max-md:text-2xl max-md:h-auto max-md:leading-[1.2] max-sm:text-xl">
          Futuro mais perto de você
        </p>
        
        <h2 className="w-[1090px] h-[220px] text-black text-center text-[55px] font-semibold mt-0 mx-auto max-md:w-full max-md:text-4xl max-md:h-auto max-sm:text-[28px] max-sm:px-5 max-sm:py-0">
          <div className="text-black font-bold">A</div>
          <div className="bg-clip-text font-bold">Noxus</div>
          <div className="text-black font-bold">Tem a Solução Perfeita Para o</div>
          <div className="bg-clip-text font-bold">Seu Negócio</div>
        </h2>
      </header>

      <article>
        <ServiceCard
          title="Tenha uma Loja Virtual ou Site com IA"
          description="Criamos sua loja virtual ou site com uma IA inteligente e personalizada para o seu negócio. Ela atende seus clientes 24h por dia com respostas rápidas, automáticas e eficientes."
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
          image="https://api.builder.io/api/v1/image/assets/TEMP/520b125e199c69994f6ce169cf534345031589b6?width=1322"
          altText="Sistema de agendamento automático para profissionais da saúde"
          onButtonClick={handleAutomate}
        />
      </article>
    </section>
  );
};
