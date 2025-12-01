import CircularGallery from '@/components/CircularGallery';
import { portfolioItems } from '@/data/portfolioItems';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { useEffect, useState } from 'react';
import FuzzyText from '@/components/FuzzyText';

export default function WorkSection() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative bg-black py-8 sm:py-12 md:py-16 px-4">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex justify-center mb-4">
          <FuzzyText
            baseIntensity={0}
            hoverIntensity={0.05}
            enableHover={true}
            fontSize="clamp(2rem, 4vw, 3.5rem)"
            fontWeight={900}
            color="#fff"
          >
            PROJECTS
          </FuzzyText>
        </div>

        <motion.p
          className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Explore the products and experiences we've built
        </motion.p>
      </motion.div>

      {/* Gallery - Responsive adjustments passed via props */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <CircularGallery
          items={portfolioItems}
          bend={isMobile ? 1 : 3}
          borderRadius={0.05}
          scrollEase={isMobile ? 0.1 : 0.02} // Snappier on mobile
          scrollSpeed={isMobile ? 3 : 2} // Faster scroll on mobile
        />
      </div>
    </section>
  );
}
