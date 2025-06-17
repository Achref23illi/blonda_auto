import { useState } from 'react';
import { motion } from 'framer-motion';
import { cars } from '../data/cars';

const Inventory = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('price-asc');

  const brands = ['all', ...new Set(cars.map(car => car.brand))];
  const priceRanges = [
    { label: 'Tous les prix', value: 'all' },
    { label: 'Moins de 10 000$', value: '0-10000' },
    { label: '10 000$ - 15 000$', value: '10000-15000' },
    { label: 'Plus de 15 000$', value: '15000+' }
  ];

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

  const filteredCars = cars
    .filter(car => selectedBrand === 'all' || car.brand === selectedBrand)
    .filter(car => {
      if (selectedPriceRange === 'all') return true;
      const [min, max] = selectedPriceRange.split('-').map(v => parseInt(v) || Infinity);
      return car.price >= min && car.price <= max;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'mileage-asc':
          return a.mileage - b.mileage;
        case 'year-desc':
          return b.year - a.year;
        default:
          return 0;
      }
    });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre inventaire complet
          </h1>
          <p className="text-xl text-gray-600">
            {filteredCars.length} véhicules disponibles
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marque
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand === 'all' ? 'Toutes les marques' : brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trier par
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="mileage-asc">Kilométrage croissant</option>
                <option value="year-desc">Année décroissante</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Carousel */}
              <div className="relative h-64 bg-gray-200 overflow-hidden group">
                <div className="flex transition-transform duration-500 ease-in-out">
                  {car.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${car.brand} ${car.model} - ${idx + 1}`}
                      className="w-full h-64 object-cover flex-shrink-0"
                    />
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.status === 'available' ? 'Disponible' : 'Vendu'}
                </div>
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {car.images.map((_, idx) => (
                    <div
                      key={idx}
                      className="w-2 h-2 bg-white/50 rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {car.brand} {car.model}
                </h3>
                <p className="text-gray-600 mb-4">{car.year}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-sm">
                    <p className="text-gray-500">Kilométrage</p>
                    <p className="font-semibold text-gray-900">{formatMileage(car.mileage)}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Transmission</p>
                    <p className="font-semibold text-gray-900">{car.transmission}</p>
                  </div>
                </div>

                {/* Features list */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{car.features.length - 3} autres
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-red-600">
                    {formatPrice(car.price)}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200"
                  >
                    Détails
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600">
              Aucun véhicule ne correspond à vos critères de recherche.
            </p>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedPriceRange('all');
              }}
              className="mt-4 text-red-600 hover:text-red-700 font-medium"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Inventory;