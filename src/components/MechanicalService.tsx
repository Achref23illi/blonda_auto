import { motion } from 'framer-motion';

const MechanicalService = () => {
  const services = [
    {
      title: 'Entretien Préventif',
      description: 'Maintenance régulière pour préserver les performances et la fiabilité de votre véhicule.',
      features: ['Vidange d\'huile', 'Inspection multi-points', 'Remplacement filtres', 'Vérification freins']
    },
    {
      title: 'Diagnostic Électronique',
      description: 'Technologie de pointe pour identifier et résoudre les problèmes complexes.',
      features: ['Scan OBD-II', 'Test systèmes électroniques', 'Calibration capteurs', 'Mise à jour logiciels']
    },
    {
      title: 'Réparations Majeures',
      description: 'Expertise technique pour les interventions les plus complexes.',
      features: ['Moteur et transmission', 'Suspension et direction', 'Système de freinage', 'Climatisation']
    },
    {
      title: 'Pièces d\'Origine',
      description: 'Utilisation exclusive de pièces certifiées pour garantir la qualité.',
      features: ['Pièces OEM', 'Garantie constructeur', 'Traçabilité complète', 'Stock permanent']
    }
  ];

  const certifications = [
    'Techniciens ASE Certifiés',
    'Formation Continue Constructeurs',
    'Équipement Diagnostique Professionnel',
    'Garantie sur Toutes Interventions'
  ];

  return (
    <section id="mecanique" className="py-32 bg-white">
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
            Service Mécanique
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide text-gray-900 mb-6">
            Excellence Technique
            <span className="block text-2xl md:text-3xl font-thin tracking-[0.2em] mt-2 text-gray-600">
              et Savoir-Faire
            </span>
          </h2>
          <div className="w-24 h-[1px] bg-gray-900 mx-auto mt-8"></div>
          <p className="text-gray-600 font-light mt-8 max-w-2xl mx-auto leading-relaxed">
            Notre atelier équipé des dernières technologies et notre équipe de techniciens 
            certifiés assurent l'entretien et la réparation de votre véhicule selon les plus hauts standards.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="border border-gray-200 p-8 hover:border-gray-400 transition-colors duration-300">
                <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workshop Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative h-96 overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1200&h=400&fit=crop&q=80" 
              alt="Atelier mécanique professionnel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-extralight tracking-wider mb-4">
                  Atelier Moderne
                </h3>
                <p className="text-lg font-light tracking-wide">
                  Équipé des dernières technologies
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gray-50 p-12 text-center"
        >
          <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-8">
            Nos Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-light text-gray-700 leading-relaxed">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-6">
            Planifiez Votre Entretien
          </h3>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Prenez rendez-vous dès aujourd'hui pour un service professionnel 
            et une tranquillité d'esprit totale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gray-900 text-white text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-800 transition-colors duration-300"
            >
              Prendre Rendez-vous
            </motion.a>
            
            <motion.a
              href="tel:5141234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border border-gray-900 text-gray-900 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              +1 (514) 123-4567
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MechanicalService;