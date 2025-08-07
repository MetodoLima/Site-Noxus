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
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O prazo varia de acordo com a complexidade do projeto. Sites simples podem ser entregues em 1-2 semanas, enquanto projetos mais complexos podem levar de 4-8 semanas. Durante a consulta inicial, fornecemos um cronograma detalhado."
    },
    {
      question: "Vocês fazem manutenção após a entrega?",
      answer: "Sim! Oferecemos pacotes de manutenção mensal que incluem atualizações de segurança, backup, monitoramento e suporte técnico. Também fornecemos 30 dias de suporte gratuito após a entrega."
    },
    {
      question: "O site será responsivo para mobile?",
      answer: "Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em dispositivos móveis, tablets e desktops. O mobile-first é nossa prioridade."
    },
    {
      question: "Posso fazer alterações no conteúdo depois?",
      answer: "Sim! Desenvolvemos sites com painéis administrativos intuitivos que permitem que você atualize textos, imagens e outros conteúdos facilmente. Também oferecemos treinamento para uso da plataforma."
    },
    {
      question: "Vocês trabalham com SEO?",
      answer: "Sim! Todos os nossos sites são otimizados para mecanismos de busca desde o desenvolvimento. Implementamos estrutura adequada, meta tags, velocidade de carregamento e outras práticas de SEO técnico."
    },
    {
      question: "Qual é o investimento para um site?",
      answer: "Os valores variam conforme as funcionalidades e complexidade do projeto. Oferecemos orçamentos personalizados após entender suas necessidades. Entre em contato para receber uma proposta detalhada."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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