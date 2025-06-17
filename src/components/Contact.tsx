import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Showroom',
      details: ['123 Boulevard Saint-Laurent', 'Montréal, QC H2X 2S6']
    },
    {
      title: 'Réservation',
      details: ['+1 (514) 123-4567', 'consultation@blondaauto.com']
    },
    {
      title: 'Heures d\'Ouverture',
      details: ['Lundi - Vendredi: 9h00 - 19h00', 'Samedi: 10h00 - 17h00', 'Dimanche: Sur rendez-vous']
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gray-900 text-white">
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
            Prenez Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide mb-6">
            Votre Conseiller
            <span className="block text-2xl md:text-3xl font-thin tracking-[0.2em] mt-2 text-gray-400">
              Personnel vous Attend
            </span>
          </h2>
          <div className="w-24 h-[1px] bg-white mx-auto mt-8"></div>
          <p className="text-gray-400 font-light mt-8 max-w-2xl mx-auto leading-relaxed">
            Débutez votre parcours automobile d'exception avec un accompagnement 
            personnalisé de nos experts passionnés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-light tracking-wide mb-12">
              Informations de Contact
            </h3>

            <div className="space-y-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group"
                >
                  <h4 className="text-sm tracking-[0.2em] uppercase text-gray-400 mb-4">
                    {info.title}
                  </h4>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-lg font-light text-gray-300 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-16 p-8 border border-gray-700"
            >
              <h4 className="text-lg font-light tracking-wide mb-4">
                Service de Conciergerie
              </h4>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Bénéficiez de notre service de conciergerie premium : présentation 
                à domicile, essais personnalisés et accompagnement sur mesure.
              </p>
              <motion.a
                href="tel:5141234567"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span>Réserver une consultation</span>
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <h3 className="text-2xl font-light tracking-wide mb-8">
                Demande de Consultation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Courriel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="votre@courriel.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="+1 (514) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
                    Intérêt
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:border-white focus:outline-none transition-colors duration-300"
                  >
                    <option value="" className="bg-gray-900">Sélectionner...</option>
                    <option value="achat" className="bg-gray-900">Achat de véhicule</option>
                    <option value="financement" className="bg-gray-900">Financement</option>
                    <option value="echange" className="bg-gray-900">Échange</option>
                    <option value="consultation" className="bg-gray-900">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Décrivez votre projet automobile..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-12 py-4 bg-white text-gray-900 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-100 transition-colors duration-300 mt-8"
              >
                Envoyer la Demande
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;