import { motion } from 'motion/react';
import { Sparkles, Stars } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  onCut: () => void;
  key?: string;
}

export default function Hero({ onCut }: HeroProps) {
  const [isCutting, setIsCutting] = useState(false);

  // Elegant, realistic birthday cake with candles and soft icing
  const cakeImageUrl = "https://cdn.corenexis.com/files/c/5398889720.png";

  const handleCut = () => {
    setIsCutting(true);
    setTimeout(() => {
      onCut();
    }, 1200);
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center relative z-10 px-4 py-12"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-10 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-2 text-divine-gold"
        >
          <Stars size={18} />
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase font-semibold text-romantic-800">16 May 2026 • 22nd Birthday</span>
          <Stars size={18} />
        </motion.div>

        <motion.h1 
          className="font-cursive text-5xl sm:text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-divine-gold via-romantic-400 to-divine-gold glow-text leading-tight mb-2 drop-shadow-sm pb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Happiee Birthday
        </motion.h1>
        
        <motion.h2
          className="font-serif text-5xl md:text-7xl font-bold text-romantic-900 tracking-widest glow-text mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          DIVYA <span className="text-romantic-300 inline-block drop-shadow-sm">❤️</span>
        </motion.h2>
      </div>

      <motion.div 
        className="relative cursor-pointer group mt-4 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        onClick={handleCut}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Soft glow effect behind cake */}
        <div className="absolute inset-0 bg-divine-gold/40 blur-2xl rounded-full transition-all duration-500 group-hover:bg-divine-gold/70 group-hover:blur-3xl" />
        
        <motion.div 
          className="relative w-full h-full rounded-full p-2 bg-gradient-to-br from-black/80 to-black/40 glass-panel shadow-xl hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-shadow duration-500 border border-divine-gold/50"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.img 
            src={cakeImageUrl} 
            alt="Beautiful Birthday Cake" 
            className="w-full h-full object-cover rounded-full shadow-lg"
            initial={{ scale: 1.15 }}
            animate={isCutting ? {
              scale: [1, 1.1, 0.9],
              opacity: [1, 0.8, 0],
            } : {
              scale: 1,
            }}
            transition={isCutting ? { duration: 1.2 } : { duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Floating Sparkles (Reduced for mobile) */}
        {!isCutting && (
          <>
            <motion.div 
              className="absolute -top-1 -right-1 text-divine-gold"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={24} />
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-2 text-divine-gold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles size={20} />
            </motion.div>
          </>
        )}

        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-romantic-800 font-bold tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-sm"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tap the cake to cut ✨
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
