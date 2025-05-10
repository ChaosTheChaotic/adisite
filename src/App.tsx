import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      {/* Parallax Layers */}
      <div ref={parallaxRef} className="parallax-layer absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/src/assets/grid.svg')] bg-repeat opacity-30" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <header className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-6 mb-8 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
	<img src="/assets/Adiman.png" className="h-24 w-24 glow-logo" alt="Adiman Logo" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent glow-text">
              Adiman
            </h1>
          </div>
          <p className="text-xl text-purple-100 mb-8 font-light">
            Modern Music Experience for Linux
          </p>
        </header>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          <FeatureCard
            icon="🎵"
            title="Dynamic UI"
            description="Adaptive interface that reacts to your music's artwork colors"
            color="purple"
          />
          <FeatureCard
            icon="🌀"
            title="Informative UI"
            description="UI which provides all needed info about your songs"
            color="pink"
          />
          <FeatureCard
            icon="🚀"
            title="Rust Backend"
            description="Blazingly fast performance powered by Flutter-Rust-Bridge"
            color="indigo"
          />
        </div>

        {/* Download Section */}
        <div className="max-w-2xl mx-auto text-center p-8 bg-black/30 backdrop-blur-lg rounded-3xl border border-white/10 animate-float">
          <h2 className="text-3xl font-bold text-white mb-4">Get Started</h2>
          <p className="text-purple-200 mb-6">Available for Linux (AppImage)</p>
          <a 
            href="https://github.com/ChaosTheChaotic/Adiman/releases/latest" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium 
                      transform transition-all hover:scale-105 hover:shadow-glow active:scale-95"
          >
            Download Latest Release
          </a>
        </div>

        {/* Screenshots Carousel */}
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-8">
  	  <ScreenshotCard src="/assets/music-player.png" />
  	  <ScreenshotCard src="/assets/main-screen-2.png" />
	  <ScreenshotCard src="/assets/settings.png" />
	  <ScreenshotCard src="/assets/playlists.png" />
	  <ScreenshotCard src="/assets/download.png" />
	  <ScreenshotCard src="/assets/multi-select.png"/>
        </div>
      </main>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <GlowParticle key={i} index={i} />
        ))}
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, description, color }: { icon: string, title: string, description: string, color: string }) => (
  <div className={`p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 transition-transform hover:scale-102 hover:border-${color}-400/30`}>
    <div className={`text-4xl mb-4 animate-float`}>{icon}</div>
    <h3 className={`text-2xl font-semibold text-${color}-300 mb-2`}>{title}</h3>
    <p className="text-purple-200 font-light">{description}</p>
  </div>
)

const ScreenshotCard = ({ src }: { src: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-3xl transform group-hover:opacity-50 transition-opacity" />
    <img 
      src={src} 
      className="relative z-10 rounded-2xl shadow-2xl transform transition-transform group-hover:scale-[1.02] cursor-pointer" 
      alt="App Screenshot" 
    />
  </div>
)

const GlowParticle = ({ index }: { index: number }) => {
  const style = {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${index * 0.2}s`,
  }

  return (
    <div 
      className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-glow-particle"
      style={style}
    />
  )
}

export default App
