import { motion } from 'framer-motion';
import { assets } from '../config/assets';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-32">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={assets.hero} 
          alt="Luxury automobile" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xs tracking-[0.3em] uppercase mb-8 text-gray-300"
          >
            L'excellence automobile redéfinie
          </motion.p>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wider leading-none mb-6"
          >
            BLONDA
            <span className="block text-3xl md:text-4xl lg:text-5xl font-thin tracking-[0.3em] mt-4">
              AUTOMOBILE
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez une collection exceptionnelle de véhicules 
            sélectionnés pour leur excellence et leur raffinement
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#vehicules"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase font-light overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Explorer la collection</span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explorer la collection
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border border-white text-white text-sm tracking-[0.2em] uppercase font-light hover:bg-white hover:text-black transition-all duration-300"
            >
              Prendre rendez-vous
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Luxury Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full"
        >
          <div className="flex justify-center items-center space-x-16 text-center">
            <div className="hidden md:block">
              <div className="text-3xl font-extralight tracking-wider">15+</div>
              <div className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-2">Années d'excellence</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <div className="hidden md:block">
              <div className="text-3xl font-extralight tracking-wider">500+</div>
              <div className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-2">Clients privilégiés</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <div className="hidden md:block">
              <div className="text-3xl font-extralight tracking-wider">100%</div>
              <div className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-2">Satisfaction garantie</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Défiler</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 hidden lg:block"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
          Concessionnaire Premium • Montréal
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;