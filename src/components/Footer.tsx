import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Collection', href: '#vehicules' },
        { label: 'Services Exclusifs', href: '#services' },
        { label: 'Notre Histoire', href: '#apropos' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Sélection Exclusive', href: '#selection' },
        { label: 'Service Mécanique', href: '#mecanique' },
        { label: 'Conciergerie Automobile', href: '#conciergerie' },
        { label: 'Garantie Privilège', href: '#garantie' }
      ]
    },
    {
      title: 'Information',
      links: [
        { label: 'Politique de Confidentialité', href: '#privacy' },
        { label: 'Conditions Générales', href: '#terms' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Carrières', href: '#careers' }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-extralight tracking-[0.3em] mb-2">
                  BLANDA
                </h3>
                <span className="text-sm tracking-[0.4em] font-light text-gray-400">
                  AUTOMOBILE
                </span>
              </div>
              
              <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-md">
                Depuis 2009, nous redéfinissons l'excellence dans l'univers de 
                l'automobile d'exception. Chaque véhicule est une invitation 
                à l'émotion et au raffinement.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Showroom</p>
                  <p className="text-gray-300 font-light">123 Boulevard Saint-Laurent</p>
                  <p className="text-gray-300 font-light">Montréal, QC H2X 2S6</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-2">Réservation</p>
                  <a href="tel:5141234567" className="text-gray-300 hover:text-white transition-colors font-light">
                    +1 (514) 123-4567
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-xl font-light tracking-wide mb-6">
                Restez Informé
              </h4>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Recevez en exclusivité nos dernières acquisitions et 
                invitations à nos événements privés.
              </p>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Votre adresse courriel"
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-black text-xs tracking-[0.2em] uppercase font-light hover:bg-gray-100 transition-colors duration-300"
                >
                  S'abonner
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <h5 className="text-sm tracking-[0.2em] uppercase text-gray-400 mb-6">
                  {section.title}
                </h5>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
                © {currentYear} Blanda Auto • Tous droits réservés
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
                Suivez-nous
              </span>
              <div className="flex space-x-6">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 border border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-300 group"
                  >
                    <span className="text-xs text-gray-600 group-hover:text-white transition-colors duration-300">
                      {social.charAt(0)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;