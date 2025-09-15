import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Users, Calendar, MapPin, Zap, Globe, Code } from 'lucide-react'

const Hacklab = () => {
  const equipamiento = [
    {
      category: 'Computación',
      items: ['Workstations para desarrollo', 'Servidores locales', 'Raspberry Pi clusters', 'Tarjetas de desarrollo IoT']
    },
    {
      category: 'Audio & Video',
      items: ['Interfaces de audio multipista', 'Cámaras 4K', 'Equipos de streaming', 'Monitores de referencia']
    },
    {
      category: 'Fabricación Digital',
      items: ['Impresora 3D LulzBot Mini', 'Cortadora láser', 'Soldadoras y herramientas electrónicas', 'Osciloscopios digitales']
    },
    {
      category: 'Redes & Infraestructura',
      items: ['Red mesh local', 'Servidores web locales', 'Sistema de respaldos distribuido', 'Laboratorio de pentesting']
    }
  ]

  const proyectosActivos = [
    {
      id: 'estilo-vida-graff',
      title: 'Estilo de Vida Graff',
      description: 'Videocast colaborativo sobre graffiti y cultura urbana, transmitido desde Hacklab La Resistencia. Presentado por Sid Videk y producido junto a Pablo Nieto, muestra el talento emergente del Estado de México a través de entrevistas y episodios documentales.',
      status: 'Activo',
      participants: 'Artistas urbanos invitados',
      link: 'hacklab/proyectos/estilo-vida-graff'
    },
    {
      title: 'Visionarios Creativos Live',
      description: 'Sesiones de música experimental en vivo transmitidas desde el hacklab',
      status: 'Activo',
      participants: '5-8 artistas',
      link: '/hacklab/proyectos/visionarios-creativos'
    },
    {
      title: 'Red Mesh Comunitaria',
      description: 'Desarrollo de infraestructura de comunicación descentralizada para el barrio',
      status: 'En desarrollo',
      participants: '12 vecinos',
      link: '/hacklab/proyectos/mesh-network'
    },
    {
      title: 'Archivo Digital Independiente',
      description: 'Sistema de preservación digital para colectivos culturales mexicanos',
      status: 'Investigación',
      participants: '6 organizaciones',
      link: '/hacklab/proyectos/archivo-digital'
    }
  ]

  const residencias = [
    {
      title: 'Residencia Arte + Tecnología',
      duration: '3 meses',
      description: 'Programa intensivo para artistas que desean integrar tecnología en su práctica creativa',
      nextCall: 'Marzo 2025',
      capacity: '4 residentes'
    },
    {
      title: 'Hackathon Memoria Urbana',
      duration: '48 horas',
      description: 'Encuentro para desarrollar herramientas digitales de preservación de memoria colectiva',
      nextCall: 'Enero 2025',
      capacity: '20 participantes'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Hacklab La Resistencia | Laboratorio Tecnológico y Residencias Artísticas | Melvin Records</title>
        <meta name="description" content="Hacklab La Resistencia: laboratorio de experimentación tecnológica, residencias artísticas y desarrollo de herramientas digitales en Tultitlán, México." />
        <meta name="keywords" content="hacklab México, laboratorio tecnológico, residencias artísticas, experimentación digital, La Resistencia, Melvin Records, Tultitlán" />
        <link rel="canonical" href="https://melvinrecords.gt.tc/hacklab" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "name": "Hacklab La Resistencia",
            "description": "Laboratorio de experimentación tecnológica y residencias artísticas",
            "author": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "location": {
              "@type": "Place",
              "name": "Tultitlán de Mariano Escobedo, Estado de México"
            },
            "about": ["Hacklab", "Tecnología", "Arte Digital", "Residencias Artísticas"]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="section-container">
          <div className="asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-8">
                <span className="block text-melvin-text-primary">HACKLAB</span>
                <span className="block text-gradient-cyan">LA RESISTENCIA</span>
              </h1>
              <p className="text-xl text-melvin-text-secondary mb-8 leading-relaxed">
                Laboratorio de experimentación tecnológica, desarrollo de herramientas digitales 
                y residencias artísticas. Un espacio para la intersección entre arte, 
                tecnología y transformación social.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/hacklab/residencias" className="btn-primary group">
                  <Users className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Residencias Artísticas
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
                <Link to="/contacto" className="btn-secondary">
                  Agendar Visita
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-manrope font-bold text-melvin-accent-cyan mb-2">2008</div>
                  <div className="text-sm text-melvin-text-secondary">Fundación</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-manrope font-bold text-melvin-accent-cyan mb-2">50+</div>
                  <div className="text-sm text-melvin-text-secondary">Proyectos</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/minimal-modern-technology-lab-workspace-setup.jpg"
                alt="Hacklab La Resistencia - Espacio de trabajo"
                className="w-full h-96 lg:h-[500px] object-cover card"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/50 to-transparent card" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-melvin-text-primary font-manrope font-medium text-lg">
                  Espacio colaborativo para la experimentación
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipamiento Section */}
      <section className="py-20 border-t border-melvin-text-secondary/20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-melvin-text-primary">
              <span className="text-gradient-cyan">Equipamiento</span> Especializado
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Hardware y software para desarrollo, prototipado, producción audiovisual 
              y experimentación en arte digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {equipamiento.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="text-melvin-accent-cyan mb-4 flex justify-center">
                  {category.category === 'Computación' && <Cpu size={32} />}
                  {category.category === 'Audio & Video' && <Zap size={32} />}
                  {category.category === 'Fabricación Digital' && <Code size={32} />}
                  {category.category === 'Redes & Infraestructura' && <Globe size={32} />}
                </div>
                <h3 className="text-lg font-manrope font-semibold text-melvin-text-primary mb-4 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-melvin-text-secondary flex items-start">
                      <div className="w-1 h-1 bg-melvin-accent-cyan mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/LulzBot-Mini-3D-Printer-Minimal-Tech-Equipment.jpg"
                alt="Impresora 3D LulzBot Mini en Hacklab La Resistencia"
                className="w-full max-w-2xl mx-auto h-64 object-cover card mb-8"
                loading="lazy"
              />
              <p className="text-melvin-text-secondary">
                <strong>Fabricación Digital:</strong> Impresora 3D LulzBot Mini para prototipado rápido 
                y producción de componentes para instalaciones artísticas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proyectos Activos */}
      <section className="py-20 bg-melvin-bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-melvin-text-primary">
              Proyectos <span className="text-gradient-cyan">Activos</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Iniciativas en desarrollo que combinan tecnología, arte y participación comunitaria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {proyectosActivos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="mb-4">
                  <span className={`text-xs font-manrope font-medium uppercase tracking-wider px-3 py-1 ${
                    proyecto.status === 'Activo' 
                      ? 'text-melvin-accent-cyan bg-melvin-accent-cyan/10' 
                      : proyecto.status === 'En desarrollo'
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-purple-400 bg-purple-400/10'
                  }`}>
                    {proyecto.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-manrope font-semibold text-melvin-text-primary mb-4">
                  {proyecto.title}
                </h3>
                
                <p className="text-melvin-text-secondary mb-6 leading-relaxed">
                  {proyecto.description}
                </p>
                
                <div className="flex items-center text-melvin-text-secondary mb-6">
                  <Users size={16} className="mr-2" />
                  <span className="text-sm">{proyecto.participants}</span>
                </div>

                <a 
                  href={proyecto.link}
                  className="text-melvin-accent-cyan hover:text-melvin-accent-magenta transition-colors duration-300 font-manrope font-medium uppercase tracking-wider text-sm group"
                >
                  Ver Proyecto
                  <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Residencias */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-melvin-text-primary">
              <span className="text-gradient-cyan">Residencias</span> Artísticas
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Programas de inmersión para artistas, desarrolladores y creativos 
              interesados en la intersección arte-tecnología.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {residencias.map((residencia, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-manrope font-semibold text-melvin-text-primary mb-4">
                  {residencia.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-melvin-text-secondary">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{residencia.duration}</span>
                  </div>
                  <div className="flex items-center text-melvin-text-secondary">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{residencia.capacity}</span>
                  </div>
                </div>
                
                <p className="text-melvin-text-secondary mb-6 leading-relaxed">
                  {residencia.description}
                </p>
                
                <div className="border-t border-melvin-text-secondary/20 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-melvin-text-secondary">Próxima convocatoria:</span>
                      <div className="text-melvin-accent-cyan font-manrope font-medium">
                        {residencia.nextCall}
                      </div>
                    </div>
                    <Link 
                      to="/contacto" 
                      className="text-melvin-accent-cyan hover:text-melvin-accent-magenta transition-colors duration-300 font-manrope font-medium uppercase tracking-wider text-sm group"
                    >
                      Aplicar
                      <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/electronics_hacklab_workbench_tools.jpg"
                alt="Mesa de trabajo con herramientas electrónicas en Hacklab La Resistencia"
                className="w-full max-w-4xl mx-auto h-64 object-cover card mb-8"
                loading="lazy"
              />
              <p className="text-melvin-text-secondary max-w-3xl mx-auto">
                <strong>Espacio de Trabajo Colaborativo:</strong> Mesa equipada con herramientas 
                especializadas para electrónica, prototipado y reparación de equipos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-melvin-bg-secondary">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-melvin-text-primary">
              Únete al <span className="text-gradient-cyan">Hacklab</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Participa en nuestros proyectos, asiste a talleres o solicita 
              una residencia artística para desarrollar tu práctica creativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/educacion/talleres" className="btn-primary">
                Ver Talleres Disponibles
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Solicitar Información
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hacklab
