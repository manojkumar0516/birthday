import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, X, Gift } from 'lucide-react';

const gifts = [
  { name: "", image: "https://cdn.corenexis.com/files/c/2469872720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/4194151720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/5787261720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/4273588720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/7311986720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/7451985720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/4521937720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/6215861720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/8846869720.jpg" },
  { name: "", image: "https://cdn.corenexis.com/files/c/5579587720.jpg" },
];

// Floating Hearts component specifically for the surprise modal
const FloatingModalHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500/30"
          initial={{
            y: "100vh",
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{
            y: "-20vh",
            x: `${Math.random() * 100}vw`,
            opacity: [0, 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          <Heart size={30} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default function SurpriseSection() {
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    if (showSurprise) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSurprise]);

  const triggerSurprise = () => {
    setShowSurprise(true);
    
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    // Pink and Gold
    const colors = ['#ff4d91', '#ffb3d1', '#d4af37', '#ffffff', '#eab308'];

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 10000,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 10000,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <div className="flex flex-col items-center justify-center relative min-h-[30vh] px-4 w-full">
      <AnimatePresence>
        {!showSurprise && (
          <motion.div
            key="button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <button
              onClick={triggerSurprise}
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-divine-gold via-yellow-400 to-divine-gold rounded-2xl font-serif text-lg sm:text-2xl font-bold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 overflow-hidden border border-white/40 text-black flex items-center justify-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Gift className="group-hover:-rotate-12 transition-transform duration-300" size={28} />
                Open Special Surprise
                <Heart className="group-hover:scale-125 transition-transform duration-300 text-pink-600" fill="currentColor" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-divine-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-0" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSurprise && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center bg-gradient-to-b from-black via-[#1a0a10] to-[#2a0815] overflow-y-auto overflow-x-hidden min-h-screen pb-20"
          >
            <FloatingModalHearts />

            {/* Glowing Top Decoration */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-500/20 to-transparent pointer-events-none" />

            <button
              onClick={() => setShowSurprise(false)}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white transition-all backdrop-blur-md shadow-lg"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-16 sm:mt-24 mb-10 sm:mb-16 text-center w-full px-4 relative z-10"
            >
              <h2 className="font-cursive text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 drop-shadow-[0_0_15px_rgba(255,105,180,0.8)] pb-4 leading-tight mb-2">
                I Love You ❤️
              </h2>
              <p className="font-serif text-lg sm:text-2xl text-divine-gold font-medium tracking-[0.2em] uppercase glow-text">
                Your Special Gifts
              </p>
            </motion.div>

            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {gifts.map((gift, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1), duration: 0.6 }}
                    className="relative group perspective-1000"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-divine-gold/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(255,105,180,0.3)] transition-all duration-500 flex flex-col justify-end"
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                      
                      <img 
                        src={gift.image} 
                        alt={gift.name} 
                        className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-110" 
                      />

                      {/* Gift Name Overlay */}
                      <div className="relative z-20 w-full p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h4 className="text-center font-serif text-lg sm:text-xl md:text-2xl font-bold text-divine-gold tracking-wide drop-shadow-md">
                          {gift.name}
                        </h4>
                      </div>

                      <div className="absolute inset-0 ring-1 ring-inset ring-pink-500/30 rounded-2xl sm:rounded-3xl z-30 pointer-events-none" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-16 sm:mt-24 mb-10 text-center relative z-10 px-4"
            >
              <p className="font-serif italic text-pink-200/80 text-sm sm:text-base">
                "Every gift is a tiny piece of my endless love for you."
              </p>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

