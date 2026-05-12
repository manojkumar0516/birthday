import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const milestones = [
  {
  date: "The First Glance",
  title: "A Moment Written by Destiny",
  description: "The very first time I saw you, my heart felt something unexplainable. Like the universe softly whispered that you were meant for me."
},

{
  date: "A Divine Connection",
  title: "Two Hearts, One Soul",
  description: "Just like Sivan and Parvathi, our bond feels sacred, powerful, and eternal. A love blessed beyond words and stronger than time."
},

{
  date: "Endless Conversations",
  title: "Late Nights & Infinite Smiles",
  description: "Every conversation with you became my favorite part of the day. Hours felt like minutes whenever I was lost in your words and laughter."
},

{
  date: "The Beautiful Journey",
  title: "Falling More Every Day",
  description: "With every memory we created, my love for you only grew deeper. You became my comfort, my happiness, and my peace."
},

{
  date: "Our Cosmic Love",
  title: "Written in the Stars",
  description: "Some love stories are temporary, but ours feels eternal. As if the stars themselves aligned to bring our hearts together forever."
},

{
  date: "My Safe Place",
  title: "Home is Wherever You Are",
  description: "No matter how chaotic life becomes, your presence calms my soul. In your love, I found the home my heart was always searching for."
},

{
  date: "Forever & Always",
  title: "A Promise of Eternal Love",
  description: "I promise to hold your hand through every joy and every storm. My love for you will remain endless in every lifetime."
},

{
  date: "16 May 2026",
  title: "The Queen Turns 22",
  description: "Today is not just your birthday, it is the celebration of the most beautiful soul who changed my world forever. Happy 22nd Birthday, my love."
},

{
  date: "Our Future Together",
  title: "Dreaming Beyond Forever",
  description: "I dream of a lifetime filled with your smile, your laughter, and endless moments together. Every future I imagine begins with you."
},

{
  date: "Pure Love",
  title: "You Are My Everything",
  description: "You are my moonlight in darkness, my strength in weakness, and the most beautiful chapter of my life story."
}
];

export default function Timeline() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <motion.h3 
        className="text-center font-serif text-3xl md:text-4xl mb-12 text-romantic-900 font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Eternal Journey
      </motion.h3>

      <div className="relative border-l-2 border-divine-gold/40 ml-4 md:ml-1/2 space-y-10 pb-8">
        
        {milestones.map((milestone, idx) => (
          <motion.div 
            key={idx}
            className={`relative w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:left-0 md:pl-0' : 'md:pl-12 md:-right-1/2'}`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Timeline Dot */}
            <div className={`absolute top-0 w-6 h-6 rounded-full bg-black border-4 border-romantic-400 shadow-sm flex items-center justify-center -left-[0.85rem] md:-auto ${idx % 2 === 0 ? 'md:-right-3' : 'md:-left-3'}`}>
            </div>

            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden shadow-md">
              <span className="inline-block font-sans text-xs sm:text-sm font-bold text-romantic-300 tracking-wider uppercase mb-1">
                {milestone.date}
              </span>
              <h4 className="font-serif text-lg sm:text-xl text-romantic-900 mb-2 font-semibold">
                {milestone.title}
              </h4>
              <p className="font-sans text-romantic-800 text-sm leading-relaxed opacity-90">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Ending line fade */}
        <div className="absolute bottom-0 left-[-2px] w-[2px] h-32 bg-gradient-to-b from-divine-gold/40 to-transparent" />
      </div>
    </div>
  );
}
