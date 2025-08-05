import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const handleGetStarted = () => {
    // Scroll to features section or handle navigation
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-[1195px] relative flex flex-col items-center justify-start pt-[31px] max-md:h-auto max-md:p-5">
      <header className="w-[1463px] h-[490px] flex flex-col justify-center text-center text-[90px] font-semibold tracking-[0.196px] max-md:w-full max-md:text-6xl max-md:h-auto max-md:mb-10 max-sm:text-4xl max-sm:px-5 max-sm:py-0">
        <h1 className="bg-clip-text">
          <div>Transforme seu Negócio com</div>
          <div>Inteligência Artificial</div>
        </h1>
      </header>
      
      <div className="w-[1278px] h-[136px] relative flex justify-center items-center mb-[67px] max-md:w-full max-md:h-auto max-md:mb-10">
        <Button
          size="lg"
          onClick={handleGetStarted}
          className="text-white"
        >
          Comece Agora
        </Button>
      </div>
      
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f0d3d500ddc0f22316164e1c67406df8d79b1374?width=1478"
        alt="Mockup de iPhone mostrando aplicação de IA"
        className="w-[739px] h-[687px] absolute -translate-x-2/4 left-2/4 bottom-4 max-md:w-[500px] max-md:h-[465px] max-md:relative max-md:mt-5 max-sm:w-[300px] max-sm:h-[279px]"
      />
    </section>
  );
};
