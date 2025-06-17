import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car } from '../data/cars';

interface CarDetailProps {
  car: Car;
}

const CarDetail = ({ car }: CarDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Accueil</a></li>
              <li><span className="text-gray-400">/</span></li>
              <li><a href="#vehicules" className="text-gray-500 hover:text-gray-700">Véhicules</a></li>
              <li><span className="text-gray-400">/</span></li>
              <li className="text-gray-900 font-medium">{car.brand} {car.model} {car.year}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={car.images[currentImageIndex]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Navigation arrows */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % car.images.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Thumbnail gallery */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {car.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative h-24 rounded-lg overflow-hidden ${
                        currentImageIndex === idx ? 'ring-2 ring-red-600' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.brand} ${car.model} - ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Vehicle Details */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {car.brand} {car.model}
                </h1>
                <p className="text-2xl text-gray-600 mb-6">{car.year}</p>

                <div className="mb-8">
                  <p className="text-4xl font-bold text-red-600 mb-2">
                    {formatPrice(car.price)}
                  </p>
                  <p className="text-sm text-gray-500">Taxes en sus</p>
                </div>

                {/* Key Information */}
                <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Informations clés
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Kilométrage</p>
                      <p className="font-semibold text-gray-900">{formatMileage(car.mileage)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Transmission</p>
                      <p className="font-semibold text-gray-900">{car.transmission}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Carburant</p>
                      <p className="font-semibold text-gray-900">{car.fuel}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Statut</p>
                      <p className="font-semibold text-green-600">Disponible</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {car.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Caractéristiques
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowContactForm(true)}
                    className="flex-1 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 text-center"
                  >
                    Je suis intéressé
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
                  >
                    Planifier un essai
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form Modal */}
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowContactForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Demande d'information
                </h3>
                <p className="text-gray-600 mb-6">
                  Véhicule: {car.brand} {car.model} {car.year}
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Courriel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Message (optionnel)"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200"
                  >
                    Envoyer la demande
                  </button>
                </form>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="mt-4 w-full text-gray-600 hover:text-gray-800"
                >
                  Annuler
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CarDetail;