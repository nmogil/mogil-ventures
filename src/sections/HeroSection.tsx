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
        // "MOGIL VENTURES" is approx 14 chars.
        // To fit within screen width with padding:
        // Width ≈ fontSize * 0.7 * 14 chars
        // Target Width ≈ 85vw (to leave buffer)
        // fontSize ≈ 85vw / (0.7 * 14) ≈ 8.6vw
        const vwSize = window.innerWidth * 0.085; // 8.5vw
        const minSize = 24; // 1.5rem - Reduced minimum further for small screens
        const maxSize = 60; // 3.75rem
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
        {/* Gradient overlay to ensure scroll text visibility */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-8 md:px-12 pointer-events-none">
        <div className="w-full md:w-auto flex justify-center items-center overflow-hidden md:overflow-visible pointer-events-auto max-w-[95vw] md:max-w-none mx-auto">
          <div style={isMobile ? { filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3)) drop-shadow(0 0 30px rgba(255,255,255,0.2)) drop-shadow(0 0 10px rgba(0,0,0,0.8))' } : { filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}>
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
              fontSize={isMobile && mobileFontSize ? mobileFontSize : (isMobile ? "clamp(1.5rem, 8.5vw, 3.75rem)" : "clamp(3.5rem, 13vw, 9rem)")}
              fontWeight={900}
              color="#fff"
            >
              MOGIL VENTURES
            </FuzzyText>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white text-xs sm:text-sm font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
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
