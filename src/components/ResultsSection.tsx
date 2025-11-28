import React from 'react';


const MetricItem = ({ 
  number, 
  title, 
  description, 
  isLast = false 
}: { 
  number: string; 
  title: string; 
  description: string; 
  isLast?: boolean; 
}) => {
  return (
    <div className="relative pl-12 pb-12 last:pb-0">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-slate-200"></div>
      )}
      
      {/* Dot Indicator */}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-4 border-white bg-gradient-to-r from-cyan-400 to-blue-600 shadow-md z-10"></div>
      
      {/* Content */}
      <div className="relative -top-2">
        <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-2">
          {number}
        </h4>
        <h5 className="text-lg font-bold text-slate-900 mb-3">
          {title}
        </h5>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};


export const ResultsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-slate-900 leading-tight">
            O Que a IA Está Fazendo Pelos <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Nossos Clientes Em 30 Dias</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image with Overlay Card */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 h-[600px] w-full group">
              <img 
                src="/Figures/CapaResults.svg" 
                alt="Resultados da IA para nossos clientes" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay Gradient for better contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>


              {/* Floating Card - Similar to inspiration */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#020617] p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm bg-opacity-95">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                      Case de Sucesso
                    </span>
                    <h3 className="text-white text-lg font-bold leading-tight">
                      Eficiência Operacional
                    </h3>
                    <p className="text-slate-400 text-sm mt-2">
                      Resultados consolidados em menos de 30 dias de implementação da Noxus.
                    </p>
                  </div>
                  <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                </div>
              </div>
            </div>


            {/* Decorative Background Blob behind image */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-cyan-50 rounded-[2.5rem] transform -rotate-3"></div>
          </div>


          {/* Right Column: Content & Metrics */}
          <div className="order-1 lg:order-2">
            

            {/* Timeline Metrics */}
            <div className="mt-8">
              <MetricItem 
                number="+500"
                title="Atendimentos realizados com IA"
                description="A automação assume grande parte do fluxo, garantindo agilidade, organização e disponibilidade 24/7."
              />
              
              <MetricItem 
                number="+70%"
                title="Dos atendimentos resolvidos automaticamente"
                description="A IA resolve a maioria das demandas sem intervenção humana, liberando tempo da equipe para tarefas realmente importantes."
              />
              
              <MetricItem 
                number="+20 Horas"
                title="Economizadas no atendimento manual"
                description="Atendimentos repetitivos são eliminados, reduzindo carga operacional e aumentando a produtividade geral."
                isLast={true}
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
