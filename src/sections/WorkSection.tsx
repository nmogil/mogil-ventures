import CircularGallery from '@/components/CircularGallery';
import { portfolioItems } from '@/data/portfolioItems';

interface WorkSectionProps {
  onAboutClick: () => void;
}

export default function WorkSection({ onAboutClick }: WorkSectionProps) {
  return (
    <section className="relative min-h-screen bg-black py-16 px-4">
      {/* Contact Button */}
      <div className="absolute top-8 right-8 z-10">
        <button
          onClick={onAboutClick}
          className="px-6 py-3 border border-white/20 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
        >
          Contact
        </button>
      </div>

      {/* Gallery */}
      <div className="w-full h-[600px]">
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
