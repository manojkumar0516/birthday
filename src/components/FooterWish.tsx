import { motion } from 'motion/react';
import { differenceInDays } from 'date-fns';

export default function FooterWish() {
  const birthdayDate = new Date("2026-05-16");
  const today = new Date();
  const daysUntil = differenceInDays(birthdayDate, today);
  
  const countdownText = daysUntil > 0 
    ? `Only ${daysUntil} days until your actual birthday! But let's celebrate today.` 
    : daysUntil === 0 
      ? "It's finally here!" 
      : "Hope you had the most amazing birthday!";

  return (
    <motion.footer 
      className="w-full text-center pb-16 pt-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-romantic-400 to-transparent" />
      
      <p className="font-sans text-romantic-600 font-medium text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
        {countdownText}
      </p>
      
      <motion.h2 
        className="font-serif text-3xl md:text-5xl text-romantic-900 font-bold"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        Happy Birthday My Love 💖
      </motion.h2>

      <div className="mt-8 text-2xl sm:text-3xl flex justify-center gap-4 opacity-80">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }}>🎈</motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>✨</motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}>🎂</motion.div>
      </div>
    </motion.footer>
  );
}
