//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-layer bg-opacity-20" 
           style={{ backgroundImage: "url('/src/assets/grid.svg')", transform: "translateZ(-1px) scale(2)" }} />
      
      <main className="relative z-10 container mx-auto px-4 py-16">
        <header className="mb-16 text-center animate-float">
          <h1 className="text-6xl font-bold text-white mb-4 glow-text">
            Adiman
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Modern Cross-Platform Music Player
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 animate-glow">
              <img 
                src="/src/assets/player-preview.png" 
                className="rounded-2xl shadow-2xl transform transition hover:scale-105"
                alt="Player Preview"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-white">Features</h2>
              <ul className="space-y-4 text-purple-50">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <MusicNoteIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>Smart Music Library Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <PaintBrushIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>Dynamic Theme System</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <CloudArrowDownIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>Integrated Music Downloader</span>
                </li>
              </ul>
              
              <div className="mt-8 flex gap-4">
                <a href="#download" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105">
                  Download Now
                </a>
                <a href="#features" className="border border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-xl font-medium transition-all">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Helper icons
function MusicNoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  )
}

function PaintBrushIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.4.4-.1 1.1.5 1.1H22l-4-4h-3.5c-.6 0-.9-.7-.5-1.1l1.4-1.4z" />
    </svg>
  )
}

function CloudArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 13v5.585l1.293-1.292.707.707-2.707 2.707-2.707-2.707.707-.707L11 18.585V13h2z" />
      <path d="M18.944 10.113C18.485 6.434 15.419 3.5 11.5 3.5c-4.142 0-7.5 3.358-7.5 7.5 0 2.254 1.067 4.35 2.779 5.717A3.505 3.505 0 0 0 6.5 21h12c2.481 0 4.5-2.019 4.5-4.5 0-2.344-1.844-4.244-4.056-4.387zM18.5 19h-12C5.019 19 3 16.981 3 14.5c0-3.584 3.916-6.5 7.5-6.5 3.015 0 5.681 2.118 6.42 5.018.143.434.519.75.973.75.564 0 1.027-.45 1.047-1.012.049-1.367-.485-2.696-1.42-3.756H19c2.757 0 5 2.243 5 5s-2.243 5-5 5z" />
    </svg>
  )
}

export default App
