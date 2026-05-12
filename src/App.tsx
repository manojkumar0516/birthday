import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import MainContent from './components/MainContent';

export default function App() {
  const [hasCutCake, setHasCutCake] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans">
      {/* Global Background Image with Black & Gold Overlay */}
      <div className="fixed inset-0 z-[-2] w-full h-full">
        {/* Replace the URL below with your actual uploaded image URL if needed! */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: "url('https://cdn.corenexis.com/files/c/5112122720.jpg')" }} 
        />
        {/* Dark elegant overlay to blend smoothly while keeping image visible */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <FloatingHearts />
      <AudioPlayer />
      
      <AnimatePresence mode="wait">
        {!hasCutCake ? (
          <Hero key="hero" onCut={() => setHasCutCake(true)} />
        ) : (
          <MainContent key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}
