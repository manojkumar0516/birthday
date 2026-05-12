import { motion } from 'motion/react';
import LoveDedication from './LoveDedication';
import ImageGallery from './ImageGallery';
import Timeline from './Timeline';
import SurpriseSection from './SurpriseSection';
import FooterWish from './FooterWish';

export default function MainContent() {
  return (
    <motion.div
      className="relative z-10 w-full min-h-screen flex flex-col items-center pt-24 pb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <LoveDedication />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 my-16">
        <Timeline />
        <ImageGallery />
        <SurpriseSection />
      </div>
      <FooterWish />
    </motion.div>
  );
}
