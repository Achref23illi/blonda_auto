import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Header = ({ onNavigateToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Découvrir', href: '#decouvrir', section: 'accueil' },
    { label: 'Collection', href: '#vehicules', section: 'vehicules' },
    { label: 'Services Exclusifs', href: '#services', section: 'services' },
    { label: 'L\'Expérience Blonda', href: '#experience', section: 'apropos' },
    { label: 'Contact', href: '#contact', section: 'contact' },
  ];

  const handleNavClick = (section: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToSection) {
      onNavigateToSection(section);
    }
  };

  return (
    <>
      {/* Top Bar - Luxury Info */}
      <div className="bg-black text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8">
            <div className="flex items-center space-x-6">
              <span className="tracking-widest uppercase">Concessionnaire Premium</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="tel:5141234567" className="hover:text-gray-300 transition-colors tracking-wider">
                +1 (514) 123-4567
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:text-gray-300 transition-colors tracking-wider">
                Prendre Rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-8 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center"
            >
              <div className="flex flex-col">
                <h1 className={`text-3xl font-light tracking-[0.3em] transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  BLONDA
                </h1>
                <span className={`text-xs tracking-[0.4em] font-light transition-colors duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  AUTOMOBILE
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.section, e)}
                    className={`text-sm font-light tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      scrolled 
                        ? 'text-gray-700 hover:text-black' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                  <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-black' : 'bg-white'
                  }`}></span>
                </motion.div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-8">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`hidden md:block text-sm tracking-wider uppercase transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>

              {/* Luxury CTA Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden md:block px-8 py-3 text-xs tracking-widest uppercase font-light transition-all duration-300 ${
                  scrolled
                    ? 'bg-black text-white hover:bg-gray-900'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                Configurer
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
                aria-label="Menu"
              >
                <motion.div 
                  className="w-8 h-6 flex flex-col justify-between"
                  animate={isMenuOpen ? "open" : "closed"}
                >
                  <span className={`block w-full h-[1px] transition-all duration-300 origin-left ${
                    scrolled ? 'bg-gray-900' : 'bg-white'
                  } ${isMenuOpen ? 'rotate-45 translate-y-[1px]' : ''}`}></span>
                  <span className={`block w-full h-[1px] transition-all duration-300 ${
                    scrolled ? 'bg-gray-900' : 'bg-white'
                  } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-full h-[1px] transition-all duration-300 origin-left ${
                    scrolled ? 'bg-gray-900' : 'bg-white'
                  } ${isMenuOpen ? '-rotate-45 -translate-y-[1px]' : ''}`}></span>
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <nav className="px-4 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-sm tracking-widest uppercase text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      handleNavClick(item.section, e);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <button className="w-full bg-black text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-900 transition-colors duration-200">
                    Configurer votre véhicule
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-32"></div>
    </>
  );
};

export default Header;