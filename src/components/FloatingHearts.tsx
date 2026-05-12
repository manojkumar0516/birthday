import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [elements, setElements] = useState<{ id: number; left: number; delay: number; duration: number; size: number; isStar: boolean }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 15 + Math.random() * 10,
      size: 10 + Math.random() * 15,
      isStar: Math.random() > 0.5,
    }));
    setElements(newElements);

    const interval = setInterval(() => {
      setElements(current => {
        const next = [...current];
        const replaceIdx = Math.floor(Math.random() * next.length);
        next[replaceIdx] = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          delay: 0,
          duration: 15 + Math.random() * 10,
          size: 10 + Math.random() * 15,
          isStar: Math.random() > 0.5,
        };
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute bottom-[-100px] ${el.isStar ? 'text-divine-gold/40' : 'text-romantic-400/30'}`}
          initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: -window.innerHeight - 100,
            x: Math.sin(el.id) * 50,
            opacity: [0, 0.4, 0.4, 0],
            rotate: 180,
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${el.left}%` }}
        >
          {el.isStar ? (
            <Star size={el.size} fill="currentColor" />
          ) : (
            <Heart size={el.size} fill="currentColor" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
