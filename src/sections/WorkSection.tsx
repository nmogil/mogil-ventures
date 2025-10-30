import CircularGallery from '@/components/CircularGallery';
import { portfolioItems } from '@/data/portfolioItems';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function WorkSection() {
  return (
    <section className="relative min-h-screen bg-black py-8 sm:py-12 md:py-16 px-4">
      {/* Contact Button */}
      {/* <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
        <button
          onClick={onAboutClick}
          className="min-h-[44px] min-w-[44px] px-4 py-2 sm:px-6 sm:py-3 border border-white/20 bg-black/50 backdrop-blur-md rounded-full text-white text-sm sm:text-base hover:bg-white/10 hover:border-white/40 transition-all duration-300 touch-manipulation"
          aria-label="Contact us"
        >
          Contact
        </button>
      </div> */}

      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-sm font-medium text-white/60 tracking-wide uppercase"
          variants={fadeUp}
        >
          PROJECTS
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-white mt-2"
          variants={fadeUp}
        >
          PROJECTS
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Explore the products and experiences we've built
        </motion.p>
      </motion.div>

      {/* Gallery */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <CircularGallery
          items={portfolioItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          scrollSpeed={2}
          font="bold 30px system-ui, -apple-system, sans-serif"
        />
      </div>
    </section>
  );
}
