import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "A IA fala igual ao atendimento da minha empresa ou fica com 'cara de robô'?",
      answer: "A IA é 100% personalizada: tom de voz, gírias, horário de atendimento, regras de negócio, catálogo, preços e políticas internas. Ela fala como você deseja — natural, educada e adaptada ao seu público."
    },
    {
      question: "Como funciona a loja virtual?",
      answer: "Montamos o seu e-commerce totalmente do zero e integramos no seu WhatsApp para você organizar os pedidos e suas vendas com um dashboard completo."
    },
    {
      question: "Eu preciso entender de tecnologia para usar?",
      answer: "Não! Você recebe tudo pronto, configurado e funcionando. E acompanha tudo por um dashboard simples e intuitivo, com métricas como atendimentos, vendas, agendamentos e tempo economizado."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você tem suporte direto via WhatsApp com a equipe Noxus. Fazemos ajustes, atualizações, melhorias e novas configurações sempre que precisar."
    },
    {
      question: "Preciso assinar contrato?",
      answer: "Não. A Noxus trabalha com mensalidade, sem fidelidade — você permanece porque tem resultado."
    },
    {
      question: "Vocês apenas colocam a IA no WhatsApp?",
      answer: "Não! Montamos todo o fluxo de atendimento, desde a primeira mensagem até o pós-venda. Automatizamos tudo com IA e ainda treinamos sua equipe para que o atendimento humano acompanhe o mesmo padrão profissional."
    },
    {
      question: "Vocês organizam o catálogo e os produtos do e-commerce?",
      answer: "Além de criar seu catálogo modelo e-commerce, nós cuidamos de tudo: organização do catálogo, adição de novos produtos, atualização de preços, variações como cor e tamanho, e até a estrutura das categorias. Seu e-commerce fica sempre atualizado e pronto pra vender."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#020811] to-[#449CE1]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-center text-sm md:text-base text-white">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-left text-sm md:text-base text-white leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { FAQ };