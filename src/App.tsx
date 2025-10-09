import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import WorkSection from './sections/WorkSection';
import AboutModal from './sections/AboutModal';

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="app">
      <HeroSection />
      <WorkSection onAboutClick={() => setIsAboutOpen(true)} />
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}

export default App;
