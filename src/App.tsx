import FuzzyText from './components/FuzzyText'

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        MOGIL VENTURES
      </FuzzyText>
    </div>
  )
}

export default App
