import React, { useState } from 'react';
import { FeatureCard } from './ui/FeatureCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export const Features: React.FC = () => {
  const features = [
    {
      title: ['Você está', 'perdendo clientes', 'por demora na resposta'],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/baf11b7ebcf44099e83851ce5c5bdd74f7492f55?width=1098",
      altText: "Imagem representando perda de clientes por demora no atendimento",
      className: "flex-1 min-h-[500px] pt-8 lg:pt-16",
      imageClassName: "w-4/5 h-auto absolute left-[10%] bottom-5 lg:w-[549px] lg:h-[442px] lg:left-[67px] lg:bottom-[47px]",
      titleClassName: "w-[90%] text-xl lg:text-[27px] h-auto mb-4"
    },
    {
      title: ['Não tenha mais', 'dor de cabeça', 'no atendimento'],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cb2144733ab19603f5b9dc18d97a35922b3c4e8b?width=592",
      altText: "Pessoa com dor de cabeça representando problemas no atendimento",
      className: "flex-1 min-h-[280px] pt-6 lg:pt-8",
      imageClassName: "w-[200px] h-[120px] absolute left-1/2 -translate-x-1/2 bottom-5 rounded-[34px] lg:w-[296px] lg:h-[174px] lg:left-[196px] lg:bottom-[35px] lg:translate-x-0",
      titleClassName: "w-[90%] text-lg lg:text-[27px] h-auto"
    },
    {
      title: ['Tenha uma IA que trabalha por você', '24 horas por dia,', '7 dias por semana'],
      image: "https://api.builder.io/api/v1/image/assets/TEMP/efa12d126724999b84850e1c7bb40f38e8eedd5f?width=1240",
      altText: "Interface de IA trabalhando 24/7",
      className: "flex-1 min-h-[280px] pt-6 lg:pt-8",
      imageClassName: "w-[90%] h-auto absolute left-[5%] bottom-2.5 lg:w-[620px] lg:h-[235px] lg:left-[30px] lg:-bottom-3",
      titleClassName: "w-[90%] text-lg lg:text-[27px] h-auto"
    }
  ];

  return (
    <section id="features" className="w-full min-h-screen relative flex flex-col items-center bg-[#F1F3FB] py-16 lg:py-20">
      <header className="max-w-4xl w-full text-center mb-12 lg:mb-16 px-5">
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          <div className="text-black font-bold mb-2">Dores Reais.</div>
          <div className="bg-clip-text font-bold text-primary">Soluções Inteligentes.</div>
        </h2>
      </header>
      
      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-7xl w-full gap-6 px-6">
        <FeatureCard
          title={features[0].title}
          image={features[0].image}
          altText={features[0].altText}
          className={`${features[0].className} w-1/2 max-w-[600px] h-[600px]`}
          imageClassName={features[0].imageClassName}
          titleClassName={features[0].titleClassName}
        />
        
        <div className="flex flex-col gap-6 w-1/2 max-w-[600px]">
          <FeatureCard
            title={features[1].title}
            image={features[1].image}
            altText={features[1].altText}
            className={`${features[1].className} h-[285px]`}
            imageClassName={features[1].imageClassName}
            titleClassName={features[1].titleClassName}
          />
          
          <FeatureCard
            title={features[2].title}
            image={features[2].image}
            altText={features[2].altText}
            className={`${features[2].className} h-[285px]`}
            imageClassName={features[2].imageClassName}
            titleClassName={features[2].titleClassName}
          />
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden w-full px-4">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-[75%]">
                <FeatureCard
                  title={feature.title}
                  image={feature.image}
                  altText={feature.altText}
                  className={`${feature.className} w-full`}
                  imageClassName={feature.imageClassName}
                  titleClassName={feature.titleClassName}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
