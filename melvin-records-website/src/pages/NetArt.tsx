import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Code, Zap, ExternalLink } from 'lucide-react'

const NetArt = () => {
  const proyectosNetArt = [
    {
      title: 'Glitch Memory CDMX',
      year: '2024',
      type: 'Instalación Web Interactiva',
      status: 'Activo',
      description: 'Exploración interactiva de la memoria digital de Ciudad de México a través de glitches algorítmicos que corrompen y regeneran imágenes históricas de la transformación urbana.',
      technologies: ['p5.js', 'WebGL', 'Machine Learning'],
      url: '/net-art/glitch-memory-cdmx',
      image: '/images/experimental_video_art_installation_dark_gallery.jpg'
    },
    {
      title: 'Sonic Web Spaces',
      year: '2023-2024',
      type: 'Ambiente Sonoro Digital',
      status: 'En desarrollo',
      description: 'Serie de espacios web que generan paisajes sonoros algorítmicos basados en datos de navegación, creando composiciones únicas para cada visitante.',
      technologies: ['Web Audio API', 'Node.js', 'WebRTC'],
      url: '/net-art/sonic-web-spaces',
      image: '/images/video_art_installation_projections_dark_gallery.jpg'
    },
    {
      title: 'Digital Archaeology MX',
      year: '2023',
      type: 'Archivo Web Experimental',
      status: 'Completado',
      description: 'Arqueología digital de sitios web mexicanos desaparecidos, reconstruyendo fragmentos de internet perdido como instalación web navegable.',
      technologies: ['Archive.org API', 'React', 'D3.js'],
      url: '/net-art/digital-archaeology',
      image: '/images/video_art_installation_screens_dark_gallery.jpg'
    },
    {
      title: 'Mesh Network Poetry',
      year: '2022',
      type: 'Red Mesh Poética',
      status: 'Archivo',
      description: 'Red mesh local que genera poesía colectiva en tiempo real, conectando dispositivos cercanos para crear textos colaborativos efímeros.',
      technologies: ['Mesh Networking', 'Python', 'Natural Language Processing'],
      url: '/net-art/mesh-poetry',
      image: '/images/immersive_van_gogh_starry_night_art_projection_installation.jpg'
    }
  ]

  const herramientas = [
    {
      category: 'Desarrollo Web Artístico',
      tools: ['p5.js', 'Three.js', 'WebGL', 'Web Audio API', 'WebRTC']
    },
    {
      category: 'Visualización de Datos',
      tools: ['D3.js', 'Observable', 'Processing', 'OpenFrameworks', 'Matplotlib']
    },
    {
      category: 'Inteligencia Artificial',
      tools: ['TensorFlow.js', 'ml5.js', 'RunwayML', 'Stable Diffusion', 'GPT APIs']
    },
    {
      category: 'Infraestructura',
      tools: ['Node.js', 'WebSockets', 'IPFS', 'Blockchain', 'Mesh Networks']
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo': return 'text-melvin-accent-cyan bg-melvin-accent-cyan/10'
      case 'En desarrollo': return 'text-yellow-400 bg-yellow-400/10'
      case 'Completado': return 'text-green-400 bg-green-400/10'
      case 'Archivo': return 'text-purple-400 bg-purple-400/10'
      default: return 'text-melvin-text-secondary bg-melvin-text-secondary/10'
    }
  }

  return (
    <>
      <Helmet>
        <title>Net Art | Arte Digital Web y Instalaciones Interactivas | Melvin Records</title>
        <meta name="description" content="Net art y arte digital: instalaciones web interactivas, espacios sonoros digitales, arqueología web. Proyectos de arte experimental en internet." />
        <meta name="keywords" content="net art México, arte digital web, instalaciones interactivas, p5.js, WebGL, arte experimental internet" />
        <link rel="canonical" href="https://melvinrecords.gt.tc/net-art" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWorkSeries",
            "name": "Net Art - Melvin Records",
            "description": "Arte digital web, instalaciones interactivas y exploración de tecnologías emergentes",
            "creator": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "about": ["Net Art", "Arte Digital", "Web Art", "Instalaciones Interactivas"]
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
                <span className="block text-melvin-text-primary">NET</span>
                <span className="block text-gradient-cyan">ART</span>
              </h1>
              <p className="text-xl text-melvin-text-secondary mb-8 leading-relaxed">
                Arte digital para la web, instalaciones interactivas y exploración 
                de tecnologías emergentes. Experimentos en la intersección entre 
                código, arte y experiencia digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/net-art/glitch-memory-cdmx"
                  className="btn-primary group"
                >
                  <Globe className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                  Explorar Instalación Activa
                  <ExternalLink className="ml-2" size={16} />
                </a>
                <Link to="/educacion/cursos" className="btn-secondary">
                  Aprender Net Art
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/experimental_video_art_installation_dark_gallery.jpg"
                alt="Net Art - Instalaciones digitales interactivas"
                className="w-full h-96 lg:h-[500px] object-cover card"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/50 to-transparent card" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-melvin-accent-cyan font-manrope font-medium text-lg">
                  Instalaciones web que exploran memoria digital
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              Proyectos <span className="text-gradient-cyan">Digitales</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Instalaciones web interactivas, experimentos algorítmicos 
              y exploraciones de tecnologías emergentes para arte digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {proyectosNetArt.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-interactive overflow-hidden group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={proyecto.image}
                      alt={proyecto.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-manrope font-medium uppercase tracking-wider text-melvin-accent-cyan bg-melvin-bg-primary/80 px-3 py-1">
                        {proyecto.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-manrope font-medium uppercase tracking-wider ${getStatusColor(proyecto.status)} px-3 py-1`}>
                        {proyecto.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center text-melvin-text-secondary mb-4">
                      <span className="text-sm">{proyecto.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-manrope font-bold text-melvin-text-primary mb-4 group-hover:text-melvin-accent-cyan transition-colors duration-300">
                      {proyecto.title}
                    </h3>
                    
                    <p className="text-melvin-text-secondary mb-6 leading-relaxed">
                      {proyecto.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-manrope font-semibold text-melvin-text-primary uppercase tracking-wider mb-3">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proyecto.technologies.map((tech, tIndex) => (
                          <span 
                            key={tIndex}
                            className="text-xs px-2 py-1 bg-melvin-accent-cyan/10 text-melvin-accent-cyan border border-melvin-accent-cyan/30 font-manrope font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a 
                        href={proyecto.url}
                        className="text-melvin-accent-cyan hover:text-melvin-accent-magenta transition-colors duration-300 font-manrope font-medium uppercase tracking-wider text-sm group"
                      >
                        {proyecto.status === 'Activo' ? 'Explorar' : 'Ver Proyecto'}
                        <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={16} />
                      </a>
                      
                      {proyecto.status === 'Activo' && (
                        <div className="flex items-center text-melvin-accent-cyan">
                          <div className="w-2 h-2 bg-melvin-accent-cyan rounded-full mr-2 animate-pulse"></div>
                          <span className="text-xs font-manrope font-medium uppercase tracking-wider">En Vivo</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
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
              <span className="text-gradient-cyan">Herramientas</span> y Tecnologías
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Stack tecnológico especializado para desarrollo de arte digital, 
              instalaciones web interactivas y experimentación con nuevas tecnologías.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {herramientas.map((categoria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="text-melvin-accent-cyan mb-4 flex justify-center">
                  {categoria.category === 'Desarrollo Web Artístico' && <Code size={32} />}
                  {categoria.category === 'Visualización de Datos' && <Globe size={32} />}
                  {categoria.category === 'Inteligencia Artificial' && <Zap size={32} />}
                  {categoria.category === 'Infraestructura' && <Globe size={32} />}
                </div>
                <h3 className="text-lg font-manrope font-semibold text-melvin-text-primary mb-4 text-center">
                  {categoria.category}
                </h3>
                <ul className="space-y-2">
                  {categoria.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="text-sm text-melvin-text-secondary flex items-center justify-center">
                      <div className="w-1 h-1 bg-melvin-accent-cyan mr-3 flex-shrink-0"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
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
              Filosofía <span className="text-gradient-cyan">Digital</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto mb-12">
              Nuestro enfoque del net art se basa en la exploración crítica 
              de la tecnología como medio artístico y herramienta de transformación social.
            </p>
          </motion.div>

          <div className="asymmetric-grid items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-manrope font-semibold text-melvin-accent-cyan mb-4">
                  Tecnología Apropiada
                </h3>
                <p className="text-melvin-text-secondary leading-relaxed">
                  Utilizamos tecnologías abiertas y accesibles, priorizando herramientas 
                  que pueden ser modificadas, estudiadas y distribuidas libremente.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-manrope font-semibold text-melvin-accent-cyan mb-4">
                  Memoria Digital
                </h3>
                <p className="text-melvin-text-secondary leading-relaxed">
                  Exploramos cómo la tecnología digital puede preservar, transformar 
                  y reinterpretar la memoria colectiva y personal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-manrope font-semibold text-melvin-accent-cyan mb-4">
                  Experimentación Algorítmica
                </h3>
                <p className="text-melvin-text-secondary leading-relaxed">
                  Desarrollamos algoritmos como herramientas creativas, explorando 
                  el comportamiento emergente y la colaboración humano-máquina.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/video_art_installation_screens_dark_gallery.jpg"
                alt="Instalación de net art experimental"
                className="w-full h-64 lg:h-80 object-cover card"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/50 to-transparent card" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-melvin-text-primary font-manrope font-medium">
                  Interfaces experimentales para la exploración digital
                </div>
              </div>
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
              Colabora en <span className="text-gradient-cyan">Net Art</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Invitamos a desarrolladores, artistas digitales y experimentadores 
              a participar en nuestros proyectos de net art colaborativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/educacion/cursos" className="btn-primary">
                Curso Arte Digital
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Proponer Colaboración
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NetArt
