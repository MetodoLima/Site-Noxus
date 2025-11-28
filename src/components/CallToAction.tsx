import React from 'react';


export const CallToAction: React.FC = () => {
  return (
    <section className="py-6 bg-white px-2 sm:px-2 lg:px-2">
      <div className="max-w-6xl mx-auto">
        
        {/* Dark Card Container */}
        <div className="relative rounded-3xl overflow-hidden px-6 py-20 md:py-28 text-center shadow-2xl shadow-slate-200" 
             style={{
               backgroundImage: 'url("/Figures/CapaCTANoxus.svg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}>
          
          {/* Overlay escuro para melhorar a legibilidade */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Glow Effect at the bottom - similar to inspiration */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-gradient-to-t from-blue-600/60 via-purple-600/40 to-transparent blur-[80px] opacity-80 pointer-events-none"></div>
          
          {/* Subtle top sheen */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>


          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              Pronto para vender mais e <br className="hidden md:block" />
              atender sem esforço?
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-10 font-medium">
              Sua IA pode estar funcionando ainda hoje.
            </p>


            <a href="https://wa.me/558596437539" className="bg-white text-slate-900 font-medium text-base py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)] active:scale-95">
              Fale com um especialista agora
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};
