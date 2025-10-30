import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import WhatWeDoSection from './sections/WhatWeDoSection';
import WorkSection from './sections/WorkSection';
import Footer from './sections/Footer';
import AboutModal from './sections/AboutModal';

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="app">
      <HeroSection />
      <WhatWeDoSection />
      <WorkSection />
      <Footer />
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}

export default App;
