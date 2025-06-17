import { motion } from 'framer-motion';
import { cars } from '../data/cars';

interface FeaturedCarsProps {
  onCarSelect?: (carId: string) => void;
}

const FeaturedCars = ({ onCarSelect }: FeaturedCarsProps = {}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('fr-CA').format(mileage) + ' km';
  };

  return (
    <section id="vehicules" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-6 text-gray-500">
            Collection Exclusive
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-900 mb-6">
            Véhicules d'Exception
            <span className="block text-2xl md:text-3xl font-thin tracking-[0.2em] mt-2 text-gray-600">
              Sélectionnés avec Soin
            </span>
          </h2>
          <div className="w-24 h-[1px] bg-gray-900 mx-auto mt-8"></div>
          <p className="text-gray-600 font-light mt-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre collection soigneusement sélectionnée de véhicules d'exception, 
            chacun choisi pour son histoire, sa qualité et son caractère unique.
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <motion.img 
                    src={car.images[0]} 
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 text-xs tracking-[0.2em] uppercase font-light">
                      Disponible
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.button
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      onClick={() => onCarSelect && onCarSelect(car.id)}
                      className="bg-white text-black px-8 py-3 text-xs tracking-[0.2em] uppercase font-light hover:bg-gray-100 transition-colors duration-300"
                    >
                      Découvrir
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Brand & Model */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-1">
                      {car.brand}
                    </h3>
                    <p className="text-lg text-gray-600 font-extralight tracking-wider">
                      {car.model} • {car.year}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">Kilométrage</p>
                      <p className="text-sm font-light text-gray-700">{formatMileage(car.mileage)}</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">Transmission</p>
                      <p className="text-sm font-light text-gray-700">{car.transmission}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Équipements</p>
                    <div className="flex flex-wrap gap-2">
                      {car.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-600 border border-gray-200 px-3 py-1 font-light"
                        >
                          {feature}
                        </span>
                      ))}
                      {car.features.length > 2 && (
                        <span className="text-xs text-gray-400 font-light">
                          +{car.features.length - 2} autres
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">Prix</p>
                      <p className="text-2xl font-light text-gray-900">
                        {formatPrice(car.price)}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onCarSelect && onCarSelect(car.id)}
                      className="text-xs tracking-[0.2em] uppercase text-gray-600 hover:text-gray-900 transition-colors duration-300 border-b border-transparent hover:border-gray-900 pb-1"
                    >
                      Détails
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Chaque véhicule de notre collection a été sélectionné pour son excellence, 
            son histoire et son potentiel à créer de nouveaux souvenirs exceptionnels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#inventory"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gray-900 text-white text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-800 transition-colors duration-300"
            >
              Collection complète
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border border-gray-900 text-gray-900 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Conseiller personnel
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCars;