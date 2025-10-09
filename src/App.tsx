import { useState, useEffect } from 'react'
import Dither from './components/Dither'
import FuzzyText from './components/FuzzyText'
import CircularGallery from './components/CircularGallery'
import ProfileCard from './components/ProfileCard'
import { portfolioItems } from './data/portfolioItems'
import { profileData } from './data/profileData'
import { Dialog, DialogContent } from './components/ui/dialog'

function App() {
  const [showGallery, setShowGallery] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showProfileCard, setShowProfileCard] = useState(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!showGallery && e.deltaY > 0) {
        handleTransition()
      }
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [showGallery])

  const handleTransition = () => {
    if (isTransitioning || showGallery) return
    setIsTransitioning(true)
    setTimeout(() => {
      setShowGallery(true)
      setIsTransitioning(false)
    }, 800)
  }

  const handleBackToHome = () => {
    if (isTransitioning || !showGallery) return
    setIsTransitioning(true)
    setTimeout(() => {
      setShowGallery(false)
      setIsTransitioning(false)
    }, 800)
  }

  const handleContact = () => {
    window.location.href = `mailto:${profileData.contactEmail}`
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Intro Page */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: showGallery ? 0 : 1,
          pointerEvents: showGallery ? 'none' : 'auto',
          transition: 'opacity 0.8s ease-in-out',
          zIndex: showGallery ? 0 : 2
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
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
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4rem'
          }}
        >
          <div
            style={{ cursor: 'pointer' }}
            onClick={handleTransition}
          >
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
            >
              MOGIL VENTURES
            </FuzzyText>
          </div>

          {/* Scroll Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: 0.6,
              animation: 'bounce 2s infinite'
            }}
          >
            <style>{`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>
            <span style={{ color: '#fff', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              SCROLL OR CLICK
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: '#fff' }}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Gallery Page */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: showGallery ? 1 : 0,
          pointerEvents: showGallery ? 'auto' : 'none',
          transition: 'opacity 0.8s ease-in-out',
          backgroundColor: '#000',
          padding: '2rem',
          zIndex: showGallery ? 2 : 0
        }}
      >
        {/* Back to Home Button */}
        <div
          onClick={handleBackToHome}
          style={{
            position: 'absolute',
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%) scale(0.4)',
            transformOrigin: 'center top',
            cursor: 'pointer',
            zIndex: 10,
            opacity: 0.7,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
        >
          <FuzzyText
            baseIntensity={0.15}
            hoverIntensity={0.4}
            enableHover={true}
          >
            MOGIL VENTURES
          </FuzzyText>
        </div>

        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', height: '600px' }}>
            {showGallery && (
              <CircularGallery
                items={portfolioItems}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            )}
          </div>
        </div>
      </div>

      {/* ProfileCard Dialog (for testing) */}
      <Dialog open={showProfileCard} onOpenChange={setShowProfileCard}>
        <DialogContent className="max-w-fit p-0 border-0 bg-transparent" hideCloseButton>
          <ProfileCard
            {...profileData}
            onContactClick={handleContact}
            enableTilt={true}
            enableMobileTilt={false}
            showUserInfo={true}
          />
        </DialogContent>
      </Dialog>

      {/* Optional: Button to open ProfileCard for testing */}
      <button
        onClick={() => setShowProfileCard(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          padding: '12px 24px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          zIndex: 100,
          fontSize: '14px',
          fontWeight: 500,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
        }}
      >
        View Profile Card
      </button>
    </div>
  )
}

export default App
