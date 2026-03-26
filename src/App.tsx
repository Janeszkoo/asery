import { useState, useEffect } from 'react';
import './index.css';
import useLenis from './hooks/useLenis';
import { siteConfig } from './config';
import Hero from './sections/Hero';
import AlbumCube from './sections/AlbumCube';
import ParallaxGallery from './sections/ParallaxGallery';
import TourSchedule from './sections/TourSchedule';
import Footer from './sections/Footer';
import SetupDetails from './sections/SetupDetails';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'setup'>('home');
  
  // Initialize Lenis smooth scrolling
  useLenis();

  useEffect(() => {
    // Set page title from config
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }

    // Add viewport meta for better mobile experience
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'setup') {
    return <SetupDetails onBack={() => setCurrentPage('home')} />;
  }

  return (
    <main className="relative w-full min-h-screen bg-void-black overflow-x-hidden">
      {/* Hero Section - Immersive landing */}
      <Hero />

      {/* Album Cube Section - 3D showcase */}
      <AlbumCube />

      {/* Parallax Gallery Section */}
      <ParallaxGallery />

      {/* Tour Schedule Section */}
      <TourSchedule onSetupClick={() => setCurrentPage('setup')} />

      {/* Footer Section */}
      <Footer onSetupClick={() => setCurrentPage('setup')} />
    </main>
  );
}

export default App;
