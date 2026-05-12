import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // We use a beautiful royalty-free romantic piano track
  // Due to browser autoplay policies, we start muted or ask for interaction
  const audioUrl = "https://www.image2url.com/r2/default/audio/1778495659563-ae1a2f60-8c36-43a8-a972-1a16dc50ecc0.mp3";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt autoplay, but fail gracefully
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay was prevented by browser
          setIsPlaying(false);
        });
      }
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} loop src={audioUrl} />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={togglePlay}
        className="fixed top-6 right-6 z-50 p-3 rounded-full glass-panel text-divine-gold hover:text-white hover:bg-black/80 transition-colors duration-300 border border-divine-gold/40"
        aria-label="Toggle music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  );
}
