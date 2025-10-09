import CircularGallery from '@/components/CircularGallery';
import { portfolioItems } from '@/data/portfolioItems';

interface WorkSectionProps {
  onAboutClick: () => void;
}

export default function WorkSection({ onAboutClick }: WorkSectionProps) {
  return (
    <section className="relative min-h-screen bg-black py-8 sm:py-12 md:py-16 px-4">
      {/* Contact Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
        <button
          onClick={onAboutClick}
          className="min-h-[44px] min-w-[44px] px-4 py-2 sm:px-6 sm:py-3 border border-white/20 bg-black/50 backdrop-blur-md rounded-full text-white text-sm sm:text-base hover:bg-white/10 hover:border-white/40 transition-all duration-300 touch-manipulation"
          aria-label="Contact us"
        >
          Contact
        </button>
      </div>

      {/* Gallery */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <CircularGallery
          items={portfolioItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          scrollSpeed={2}
        />
      </div>
    </section>
  );
}
