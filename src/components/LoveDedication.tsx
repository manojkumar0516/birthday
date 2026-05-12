import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const quotes = [
  "You are the reason my world feels beautiful every single day.",
  "No matter where life takes me, my heart always belongs to you.",
  "You are the magic that turned my life into a love story.",
  "With you, every moment becomes a precious memory."
];

const TypewriterText = ({ text, delay }: { text: string; delay: number }) => {
  const letters = Array.from(text);
  
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
        hidden: {},
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function LoveDedication() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-12 sm:space-y-16">
      
      <div className="relative p-6 sm:p-10 glass-panel rounded-[2rem] w-full border-t border-divine-gold/50 shadow-lg">
        <Sparkles className="absolute -top-3 -left-3 text-divine-gold w-8 h-8 opacity-70" />
        <Sparkles className="absolute -bottom-3 -right-3 text-divine-gold w-8 h-8 opacity-70" />
        
        <motion.h3 
          className="font-cursive text-4xl sm:text-5xl md:text-7xl text-romantic-900 glow-text mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Dearest Divya,
        </motion.h3>
        
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-romantic-900 leading-relaxed max-w-3xl mx-auto opacity-90">
          <TypewriterText 
            text="Happy 22nd Birthday, my love. You are the dream I never want to wake up from. Every second spent with you feels like a blessing, and every memory we create becomes a beautiful chapter in our love story. I promise to stand beside you, love you endlessly, and make you smile every single day." 
            delay={0.3} 
          />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-10">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 + (i * 0.15) }}
          >
            <div className="absolute inset-0 bg-divine-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="font-sans text-base sm:text-lg md:text-xl font-medium italic text-romantic-800 relative z-10 leading-relaxed drop-shadow-sm">
              "{quote}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
