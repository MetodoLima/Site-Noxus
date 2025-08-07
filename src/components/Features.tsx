import React, { useState } from 'react';
import { FeatureCard } from './ui/FeatureCard';

export const Features: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide(prev => prev + 1);
  };

  return (
    <section id="features" className="w-full h-[1086px] relative flex flex-col items-center bg-[#F1F3FB] pt-[78px] max-md:h-auto max-md:px-5 max-md:py-10">
      <header className="w-[991px] h-36 text-black text-center text-[50px] font-semibold mb-[17px] max-md:w-full max-md:text-4xl max-md:h-auto max-md:mb-10 max-sm:text-[28px] max-sm:px-5 max-sm:py-0">
        <h2>
          <div className="text-black font-bold">Dores Reais.</div>
          <div className="bg-clip-text font-bold">Soluções Inteligentes.</div>
        </h2>
      </header>
      
      <div className="w-[1392px] h-[680px] relative flex gap-8 max-md:w-full max-md:h-auto max-md:flex-col max-md:gap-5">
        <FeatureCard
          title={['Você está', 'perdendo clientes', 'por demora na resposta']}
          image="https://api.builder.io/api/v1/image/assets/TEMP/baf11b7ebcf44099e83851ce5c5bdd74f7492f55?width=1098"
          altText="Imagem representando perda de clientes por demora no atendimento"
          className="w-[680px] h-[680px] pt-[95px] max-md:w-full max-md:h-[500px] max-md:pt-10 max-sm:h-[400px] max-sm:pt-5"
          imageClassName="w-[549px] h-[442px] absolute left-[67px] bottom-[47px] max-md:w-4/5 max-md:h-auto max-md:left-[10%] max-md:bottom-5"
          titleClassName="w-[374px] h-[87px] text-[#1D1D1F] mb-[9px] max-md:w-[90%] max-md:text-[22px] max-md:h-auto max-sm:text-lg"
        />
        
        <div className="flex flex-col gap-[21px]">
          <FeatureCard
            title={['Não tenha mais', 'dor de cabeça', 'no atendimento']}
            image="https://api.builder.io/api/v1/image/assets/TEMP/cb2144733ab19603f5b9dc18d97a35922b3c4e8b?width=592"
            altText="Pessoa com dor de cabeça representando problemas no atendimento"
            className="w-[680px] h-[330px] pt-[34px] max-md:w-full max-md:h-[280px] max-md:pt-5 max-sm:h-60"
            imageClassName="w-[296px] h-[174px] absolute rounded-[34px] left-[196px] bottom-[35px] max-md:w-[200px] max-md:h-[120px] max-md:-translate-x-2/4 max-md:left-2/4 max-md:bottom-5 max-sm:w-[150px] max-sm:h-[90px]"
            titleClassName="w-[374px] h-[87px] text-[#1D1D1F] max-md:w-[90%] max-md:text-xl max-md:h-auto max-sm:text-base"
          />
          
          <FeatureCard
            title={['Tenha uma IA que trabalha por você', '24 horas por dia,', '7 dias por semana']}
            image="https://api.builder.io/api/v1/image/assets/TEMP/efa12d126724999b84850e1c7bb40f38e8eedd5f?width=1240"
            altText="Interface de IA trabalhando 24/7"
            className="w-[680px] h-[330px] pt-[34px] max-md:w-full max-md:h-[280px] max-md:pt-5 max-sm:h-60"
            imageClassName="w-[620px] h-[235px] absolute left-[30px] -bottom-3 max-md:w-[90%] max-md:h-auto max-md:left-[5%] max-md:bottom-2.5"
            titleClassName="w-[374px] h-[87px] text-[#1D1D1F] max-md:w-[90%] max-md:text-xl max-md:h-auto max-sm:text-base"
          />
        </div>
      </div>
      
      <nav className="flex w-[90px] justify-center items-start gap-[18px] absolute right-[351px] bottom-[123px] max-md:relative max-md:mt-5 max-md:right-auto max-md:bottom-auto" aria-label="Navegação de slides">
        <button
          onClick={handlePrevious}
          className="flex w-9 h-9 justify-center items-center cursor-pointer bg-[rgba(210,210,215,0.64)] rounded-[36px] hover:bg-[rgba(210,210,215,0.8)] transition-colors"
          aria-label="Slide anterior"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 25C19.6162 25 19.2324 24.8535 18.9395 24.5605L13.4395 19.0605C12.8536 18.4751 12.8536 17.5249 13.4395 16.9394L18.9395 11.4394C19.5254 10.8535 20.4747 10.8535 21.0606 11.4394C21.6465 12.0248 21.6465 12.975 21.0606 13.5605L16.6211 18L21.0606 22.4395C21.6465 23.0249 21.6465 23.9751 21.0606 24.5606C20.7676 24.8536 20.3837 25 20 25Z" fill="black" fillOpacity="0.56"/>
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="flex w-9 h-9 justify-center items-center cursor-pointer bg-[rgba(210,210,215,0.64)] rounded-[36px] hover:bg-[rgba(210,210,215,0.8)] transition-colors"
          aria-label="Próximo slide"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5597 16.9375L17.0521 11.4375C16.4667 10.8521 15.5198 10.855 14.9364 11.4414C14.3529 12.0283 14.3549 12.978 14.9403 13.5625L19.3841 18L14.9403 22.4375C14.3549 23.022 14.3529 23.9717 14.9364 24.5586C15.2286 24.853 15.6124 25 15.9962 25C16.378 25 16.7599 24.8545 17.0521 24.5625L22.5597 19.0625C22.8412 18.7813 23 18.3989 23 18C23 17.6011 22.8412 17.2188 22.5597 16.9375Z" fill="black" fillOpacity="0.56"/>
          </svg>
        </button>
      </nav>
    </section>
  );
};
