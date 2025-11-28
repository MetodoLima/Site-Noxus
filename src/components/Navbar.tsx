import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/20 bg-black/95 shadow-sm backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-3">
          <img src="/Figures/Nexus AI_TWO - Logotipo (1) 4.svg" alt="Noxus IA Logo" className="h-7 md:h-10 w-auto" />
          <span className="text-base md:text-xl font-bold text-white">Noxus IA</span>
        </a>

        <div className="flex items-center gap-4">
          <Button asChild className="bg-gradient-to-r from-[#82F9FF] to-[#1641AC] text-white font-bold hover:opacity-90 rounded-full px-3 py-2 text-sm md:px-4 md:py-2 md:text-base">
            <a href="https://wa.me/558596437539" target="_blank" rel="noopener noreferrer">Fale com Especialista</a>
          </Button>
        </div>
      </div>
    </header>
  );
};