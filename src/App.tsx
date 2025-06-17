import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedCars from './components/FeaturedCars';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CarDetails from './components/CarDetails';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'car-details'>('home');
  const [selectedCarId, setSelectedCarId] = useState<string>('1');

  const handleCarSelect = (carId: string) => {
    setSelectedCarId(carId);
    setCurrentView('car-details');
    // Scroll to top when opening car details
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    // Scroll to top when returning to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToSection = (sectionId: string) => {
    // If we're on car details page, go back to home first
    if (currentView === 'car-details') {
      setCurrentView('home');
      // Wait for the view to change, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (currentView === 'car-details') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigateToSection={handleNavigateToSection} />
        
        {/* Back Button */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.button
              onClick={handleBackToHome}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à la collection
            </motion.button>
          </div>
        </div>

        <CarDetails carId={selectedCarId} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateToSection={handleNavigateToSection} />
      
      <main>
        <Hero />
        <Services />
        <FeaturedCars onCarSelect={handleCarSelect} />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
