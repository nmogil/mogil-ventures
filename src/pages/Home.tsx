import { useState } from 'react';
import HeroSection from '../sections/HeroSection';
import WhatWeDoSection from '../sections/WhatWeDoSection';
import WorkSection from '../sections/WorkSection';
import ThoughtsSection from '../sections/ThoughtsSection';
import Footer from '../sections/Footer';
import AboutModal from '../sections/AboutModal';

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="home">
      <HeroSection />
      <WhatWeDoSection />
      <WorkSection />
      <ThoughtsSection />
      <Footer />
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}

