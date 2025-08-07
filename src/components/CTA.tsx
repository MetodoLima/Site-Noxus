import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Pronto para transformar sua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-primary-foreground/80">
                  presença digital?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco hoje mesmo e descubra como podemos levar seu negócio para o próximo nível com soluções digitais inovadoras.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3 text-lg group"
              >
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };