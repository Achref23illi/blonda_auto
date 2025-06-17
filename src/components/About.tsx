import { motion } from 'framer-motion';
import { assets } from '../config/assets';

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'Chaque véhicule répond aux standards les plus exigeants de qualité et de performance.'
    },
    {
      title: 'Expertise',
      description: 'Notre équipe de spécialistes vous accompagne avec passion et professionnalisme.'
    },
    {
      title: 'Confiance',
      description: 'Une relation de confiance bâtie sur la transparence et l\'authenticité depuis 15 ans.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Années d\'Excellence' },
    { number: '500+', label: 'Clients Privilégiés' },
    { number: '100%', label: 'Satisfaction Garantie' },
    { number: '150', label: 'Points de Contrôle' }
  ];

  return (
    <section id="apropos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase mb-6 text-gray-500">
                Notre Histoire
              </p>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-gray-900 mb-6">
                L'Art de l'Automobile
                <span className="block text-2xl md:text-3xl font-thin tracking-[0.2em] mt-2 text-gray-600">
                  depuis 2009
                </span>
              </h2>
              <div className="w-24 h-[1px] bg-gray-900 mb-8"></div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Blonda Auto incarne l'excellence dans l'univers de l'automobile d'exception. 
                Depuis notre création, nous cultivons l'art de sélectionner et présenter 
                des véhicules qui transcendent le simple transport.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Notre philosophie repose sur une approche artisanale : chaque véhicule 
                est minutieusement choisi, inspecté et préparé pour offrir une expérience 
                d'acquisition unique et mémorable.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-8">
              <h3 className="text-xl font-light tracking-wide text-gray-900 mb-6">
                Nos Valeurs
              </h3>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-1 h-12 bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300"></div>
                    <div>
                      <h4 className="font-light text-gray-900 mb-2 tracking-wide">{value.title}</h4>
                      <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Video */}
            <div className="relative h-[600px] overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://videos.pexels.com/video-files/5992516/5992516-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                {/* Fallback image in case video doesn't load */}
                <img 
                  src={assets.showroom} 
                  alt="Showroom Blonda Auto"
                  className="w-full h-full object-cover"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-extralight tracking-wider mb-2">Excellence</p>
                <p className="text-sm tracking-[0.2em] uppercase text-gray-300">Depuis 2009</p>
              </div>
            </div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-12 -left-8 bg-white shadow-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-extralight tracking-wider text-gray-900 mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-xs tracking-[0.2em] uppercase text-gray-500">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;