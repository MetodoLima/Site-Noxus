"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


function AnimatedText() {
    const [currentText, setCurrentText] = useState(0);
    const texts = ["Inteligência Artificial", "tecnologia", "a Noxus"];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length);
        }, 2500);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <motion.span
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 block pb-3"
        >
            {texts[currentText]}
        </motion.span>
    );
}

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Automação com IA",
    title1 = "Transforme seu Negócio com",
    title2 = "Inteligência Artificial",
    description = "Automatize atendimento, aumente vendas e transforme a experiência dos seus clientes 24h por dia.",
    buttonText = "Quero vender mais",
    onButtonClick,
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.1] via-transparent to-indigo-600/[0.1] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={200}
                    height={60}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="left-[5%] md:left-[10%] top-[10%] md:top-[15%]"
                />
                <ElegantShape
                    delay={0.6}
                    width={300}
                    height={80}
                    rotate={10}
                    gradient="from-indigo-500/[0.15]"
                    className="right-[5%] md:right-[10%] top-[15%] md:top-[20%]"
                />
                <ElegantShape
                    delay={0.8}
                    width={250}
                    height={50}
                    rotate={-5}
                    gradient="from-green-500/[0.15]"
                    className="left-[15%] md:left-[20%] bottom-[10%] md:bottom-[15%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={350}
                    height={90}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[10%] md:right-[15%] bottom-[5%] md:bottom-[10%]"
                />
                <ElegantShape
                    delay={0.7}
                    width={180}
                    height={70}
                    rotate={-12}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-2 md:pl-24 flex flex-col md:flex-row items-center min-h-screen">
                {/* Left Content */}
                <div className="md:w-7/12 lg:w-1/2 text-center md:text-left pt-20 md:pt-0">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90 block pb-3">
                                Transforme seu <br className="md:hidden" /> Negócio com
                            </span>
                            <AnimatedText />
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-base sm:text-lg text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto md:mx-0 px-4 md:px-0">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
                    >
                        <button
                            onClick={onButtonClick}
                            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#82F9FF] to-[#1641AC] rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25 hover:opacity-90"
                        >
                            {buttonText}
                        </button>
                    </motion.div>
                </div>

                {/* Right Content - Image (Mobile) */}
                <div className="md:hidden w-full mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
                        className="relative w-full"
                    >
                        <img 
                            src="/lovable-uploads/f577ce39-fcd0-42db-a699-e405e596667d.png" 
                            alt="Smartphone with app"
                            className="w-full h-auto max-w-xs sm:max-w-sm mx-auto drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Right Content - Image (Desktop) */}
            <div className="hidden md:block absolute bottom-0 right-0 w-1/2 lg:w-5/12 z-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
                    className="relative w-full"
                >
                    <img 
                        src="/lovable-uploads/f577ce39-fcd0-42db-a699-e405e596667d.png" 
                        alt="Smartphone with app"
                        className="w-full h-auto drop-shadow-2xl pr-24"
                    />
                </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }