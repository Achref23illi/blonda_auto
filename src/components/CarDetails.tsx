import { useState } from 'react';
import { motion } from 'framer-motion';
import { cars } from '../data/cars';

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  images: string[];
  features: string[];
  description: string;
  status: 'available' | 'sold' | 'reserved';
}

interface CarDetailsProps {
  carId?: string;
}

const CarDetails = ({ carId = '1' }: CarDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const car = cars.find(c => c.id === carId) || cars[0];

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

  // Detailed specifications based on research
  const getDetailedSpecs = (carId: string) => {
    const specs = {
      '1': { // Volkswagen Jetta 2013
        engine: '2.0L 4-cylindres',
        power: '115 HP / 166 lb-pi',
        transmission: 'Automatique 6 vitesses',
        drivetrain: 'Traction avant',
        fuelEconomy: '8.7L/100km ville, 6.7L/100km autoroute',
        dimensions: '4,6m L × 1,8m l × 1,5m H',
        weight: '1 385 kg',
        trunk: '440 litres',
        safety: ['10 coussins gonflables', 'ABS avec répartition électronique', 'Contrôle de stabilité', 'Freinage d\'urgence'],
        technology: ['Bluetooth', 'Système audio 6 haut-parleurs', 'Climatisation', 'Régulateur de vitesse'],
        interior: ['Sièges chauffants', 'Volant en cuir', 'Banquette 60/40', 'Console centrale'],
        warranty: '6 mois / 10 000 km',
        history: 'Véhicule inspecté 150 points • Un seul propriétaire • Entretien chez concessionnaire'
      },
      '2': { // Subaru Legacy 2013
        engine: '2.5L 4-cylindres SACT',
        power: '173 HP / 174 lb-pi',
        transmission: 'CVT automatique',
        drivetrain: 'Traction intégrale symétrique',
        fuelEconomy: '9.4L/100km ville, 7.4L/100km autoroute',
        dimensions: '4,8m L × 1,8m l × 1,5m H',
        weight: '1 555 kg',
        trunk: '416 litres',
        safety: ['Top Safety Pick IIHS', 'Traction intégrale standard', 'Contrôle de stabilité avancé', 'Système EyeSight disponible'],
        technology: ['Navigation GPS', 'Bluetooth streaming', 'Système Harman Kardon', 'Caméra de recul'],
        interior: ['Sièges en cuir', 'Sièges chauffants/ventilés', 'Toit ouvrant', 'Climatisation bizone'],
        warranty: '6 mois / 10 000 km',
        history: 'Certificat Subaru • Traction intégrale parfaite pour l\'hiver • Entretien complet'
      },
      '3': { // Dodge Journey 2010
        engine: '3.5L V6',
        power: '235 HP / 232 lb-pi',
        transmission: 'Automatique 6 vitesses',
        drivetrain: 'Traction avant',
        fuelEconomy: '11.2L/100km ville, 8.1L/100km autoroute',
        dimensions: '4,9m L × 1,9m l × 1,7m H',
        weight: '1 745 kg',
        trunk: '1 914 litres (sièges rabattus)',
        safety: ['Top Safety Pick IIHS', 'Contrôle de stabilité', 'Rideaux gonflables intégraux', 'Système de surveillance angle mort'],
        technology: ['DVD système arrière', 'Navigation touchscreen', 'Bluetooth', 'Climatisation tri-zone'],
        interior: ['7 places', 'Sièges Captain\'s chairs', 'Rangements multiples', 'Console réfrigérée'],
        warranty: '6 mois / 10 000 km',
        history: 'VUS familial spacieux • Historique d\'entretien complet • Idéal grandes familles'
      },
      '4': { // Chevrolet Cruze 2011
        engine: '1.8L 4-cylindres ECOTEC',
        power: '138 HP / 125 lb-pi',
        transmission: 'Automatique 6 vitesses',
        drivetrain: 'Traction avant',
        fuelEconomy: '8.7L/100km ville, 6.2L/100km autoroute',
        dimensions: '4,6m L × 1,8m l × 1,5m H',
        weight: '1 408 kg',
        trunk: '425 litres',
        safety: ['Top Safety Pick IIHS', '10 coussins gonflables', 'OnStar intégré', 'Contrôle de stabilité StabiliTrak'],
        technology: ['OnStar', 'Bluetooth', 'MyLink infotainment', 'USB/AUX'],
        interior: ['Matériaux premium', 'Sièges confortables', 'Espace généreux', 'Insonorisation avancée'],
        warranty: '6 mois / 10 000 km',
        history: 'Économique et fiable • Parfait premier véhicule • Entretien régulier'
      },
      '5': { // Subaru Outback 2013
        engine: '2.5L 4-cylindres DACT',
        power: '173 HP / 174 lb-pi',
        transmission: 'CVT Lineartronic',
        drivetrain: 'Traction intégrale symétrique',
        fuelEconomy: '9.8L/100km ville, 7.6L/100km autoroute',
        dimensions: '4,8m L × 1,8m l × 1,7m H',
        weight: '1 570 kg',
        trunk: '971 litres',
        safety: ['Top Safety Pick+ IIHS', 'Système EyeSight', 'Garde au sol 220mm', 'Traction intégrale standard'],
        technology: ['Navigation Starlink', 'Bluetooth', 'Système audio premium', 'Caméra de recul'],
        interior: ['Toit panoramique', 'Sièges chauffants', 'Matériaux hydrofuges', 'Rangements multiples'],
        warranty: '6 mois / 10 000 km',
        history: 'Aventure et polyvalence • Faible kilométrage • Capacité hors-route'
      }
    };
    return specs[carId as keyof typeof specs] || specs['1'];
  };

  const specs = getDetailedSpecs(car.id);

  const tabs = [
    { id: 'overview', label: 'Aperçu' },
    { id: 'specs', label: 'Spécifications' },
    { id: 'features', label: 'Équipements' },
    { id: 'history', label: 'Historique' }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="#" className="text-gray-500 hover:text-gray-700 tracking-wide">Accueil</a></li>
            <li><span className="text-gray-400">•</span></li>
            <li><a href="#vehicules" className="text-gray-500 hover:text-gray-700 tracking-wide">Collection</a></li>
            <li><span className="text-gray-400">•</span></li>
            <li className="text-gray-900 font-light tracking-wide">{car.brand} {car.model} {car.year}</li>
          </ol>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] overflow-hidden bg-gray-100">
                <img
                  src={car.images[currentImageIndex]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % car.images.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Thumbnail gallery */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {car.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-24 overflow-hidden transition-all duration-200 ${
                      currentImageIndex === idx ? 'ring-2 ring-gray-900' : 'ring-1 ring-gray-200 hover:ring-gray-400'
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
            </div>
          </motion.div>

          {/* Vehicle Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-extralight tracking-wide text-gray-900 mb-2">
                {car.brand}
              </h1>
              <p className="text-2xl text-gray-600 font-light tracking-wide mb-4">
                {car.model} • {car.year}
              </p>
              <div className="w-16 h-[1px] bg-gray-900 mb-6"></div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-4xl font-light text-gray-900 mb-2">
                {formatPrice(car.price)}
              </p>
              <p className="text-sm text-gray-500 tracking-wide">Taxes applicables</p>
            </div>

            {/* Key Specs */}
            <div className="bg-gray-50 p-6 mb-8">
              <h3 className="text-lg font-light tracking-wide text-gray-900 mb-6">
                Spécifications Principales
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Kilométrage</p>
                  <p className="font-light text-gray-900">{formatMileage(car.mileage)}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Transmission</p>
                  <p className="font-light text-gray-900">{specs.transmission}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Moteur</p>
                  <p className="font-light text-gray-900">{specs.engine}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Puissance</p>
                  <p className="font-light text-gray-900">{specs.power}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowContactForm(true)}
                className="flex-1 bg-gray-900 text-white px-8 py-4 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-800 transition-colors duration-200"
              >
                Réserver ce véhicule
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 border border-gray-900 text-gray-900 px-8 py-4 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Planifier essai routier
              </motion.button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 text-sm tracking-wide transition-colors border-b-2 ${
                      activeTab === tab.id
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-700 font-light leading-relaxed mb-6">
                    {car.description}
                  </p>
                  <h4 className="font-light text-gray-900 mb-4">Équipements principaux</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'specs' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-light text-gray-900 mb-3">Performance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Moteur</span>
                        <span className="text-gray-900 font-light">{specs.engine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Puissance</span>
                        <span className="text-gray-900 font-light">{specs.power}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transmission</span>
                        <span className="text-gray-900 font-light">{specs.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Traction</span>
                        <span className="text-gray-900 font-light">{specs.drivetrain}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-light text-gray-900 mb-3">Dimensions</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dimensions</span>
                        <span className="text-gray-900 font-light">{specs.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Poids</span>
                        <span className="text-gray-900 font-light">{specs.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coffre</span>
                        <span className="text-gray-900 font-light">{specs.trunk}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-light text-gray-900 mb-3">Consommation</h4>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Économie de carburant</span>
                      <span className="text-gray-900 font-light">{specs.fuelEconomy}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'features' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-light text-gray-900 mb-4">Sécurité</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {specs.safety.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-700 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-light text-gray-900 mb-4">Technologie</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {specs.technology.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-700 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-light text-gray-900 mb-4">Intérieur</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {specs.interior.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-700 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'history' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-light text-gray-900 mb-4">Historique du véhicule</h4>
                    <p className="text-gray-700 font-light leading-relaxed mb-6">
                      {specs.history}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-light text-gray-900 mb-4">Garantie incluse</h4>
                    <p className="text-gray-700 font-light">
                      {specs.warranty}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6">
                    <h4 className="font-light text-gray-900 mb-4">Services inclus</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-light">Inspection certifiée 150 points</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-light">Rapport d'historique CarFax</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-light">Financement personnalisé</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-light">Service après-vente premium</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-6">
                Réservation
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Véhicule: {car.brand} {car.model} {car.year}
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Courriel
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-gray-300 py-3 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-900 text-white py-4 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-800 transition-colors"
                >
                  Envoyer la demande
                </motion.button>
              </form>
              <button
                onClick={() => setShowContactForm(false)}
                className="mt-6 w-full text-center text-gray-600 hover:text-gray-900 text-sm tracking-wide"
              >
                Annuler
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CarDetails;