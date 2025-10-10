import { useState, useEffect } from 'react';
import FuzzyText from '@/components/FuzzyText';
import Dither from '@/components/Dither';

export default function HeroSection() {
  // Initialize with proper mobile detection to avoid flash of wrong size
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Calculate explicit font size for mobile to avoid Safari clamp() issues
  const [mobileFontSize, setMobileFontSize] = useState<string>('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);

      // Calculate explicit font size for Safari mobile
      if (window.innerWidth < 768) {
        const vwSize = window.innerWidth * 0.25; // 25vw
        const minSize = 72; // 4.5rem
        const maxSize = 128; // 8rem
        const calculatedSize = Math.max(minSize, Math.min(vwSize, maxSize));
        setMobileFontSize(`${calculatedSize}px`);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-6 sm:px-8 md:px-12 pointer-events-none">
        <div className="w-full md:w-auto flex justify-center items-center overflow-hidden md:overflow-visible pointer-events-auto">
          <div style={isMobile ? { filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,0,0,0.6))' } : {}}>
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
              fontSize={isMobile && mobileFontSize ? mobileFontSize : (isMobile ? "clamp(4.5rem, 25vw, 8rem)" : "clamp(3rem, 12vw, 8rem)")}
              fontWeight={900}
              color="#fff"
            >
              MOGIL VENTURES
            </FuzzyText>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white text-xs sm:text-sm font-medium">
        <div className="animate-smooth-float flex flex-col items-center gap-1 sm:gap-2">
          <span className="hidden sm:inline">Scroll to explore</span>
          <span className="sm:hidden">Scroll</span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Scroll down"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
