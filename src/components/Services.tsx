import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Sélection Exclusive',
      description: 'Chaque véhicule est méticuleusement sélectionné selon des critères d\'excellence stricts.',
      features: ['Inspection 150 points', 'Historique complet vérifié', 'Certification premium']
    },
    {
      number: '02',
      title: 'Conciergerie Automobile',
      description: 'Un service de conciergerie exclusif pour une expérience sans compromis.',
      features: ['Livraison à domicile', 'Entretien VIP', 'Assistance 24/7']
    },
    {
      number: '03',
      title: 'Garantie Privilège',
      description: 'Protection complète avec notre programme de garantie étendue premium.',
      features: ['Couverture complète', 'Sans franchise', 'Véhicule de courtoisie']
    }
  ];

  return (
    <section id="services" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-6 text-gray-400">
            Services Exclusifs
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide mb-6">
            L'Art du Service
            <span className="block text-2xl md:text-3xl font-thin tracking-[0.2em] mt-2 text-gray-400">
              Personnalisé
            </span>
          </h2>
          <div className="w-24 h-[1px] bg-white mx-auto mt-8"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="flex items-start space-x-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl font-extralight text-gray-600 group-hover:text-white transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx + index * 0.2, duration: 0.6 }}
                        className="flex items-center space-x-3 text-sm"
                      >
                        <span className="w-4 h-[1px] bg-white"></span>
                        <span className="text-gray-300 font-light tracking-wide">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    className="mt-8"
                  >
                    <a
                      href="#"
                      className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors duration-300 group/link"
                    >
                      <span>En savoir plus</span>
                      <svg
                        className="w-4 h-4 ml-3 transform group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Découvrez comment nos services exclusifs transforment 
            l'acquisition de votre véhicule en une expérience inoubliable.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 border border-white text-white text-sm tracking-[0.2em] uppercase font-light hover:bg-white hover:text-black transition-all duration-300"
          >
            Contactez un conseiller
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;