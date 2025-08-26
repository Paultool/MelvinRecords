import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin, Lightbulb, ExternalLink } from 'lucide-react'

const ProyectosArtisticos = () => {
  const proyectos = [
    {
      title: 'Invasion',
      subtitle: 'Instalación + Performance',
      year: '2024',
      status: 'Activo',
      category: 'Instalación Transmedia',
      description: 'Una instalación de video y performance en vivo que explora la relación destructiva de la humanidad con el medio ambiente, utilizando la historia de la aeronáutica como hilo conductor narrativo.',
      image: '/images/experimental_video_art_installation_dark_gallery.jpg',
      href: '/proyectos-artisticos/invasion',
      featured: true,
      themes: ['Medio Ambiente', 'Aeronáutica', 'Humanidad', 'Destrucción'],
      location: 'Instalación itinerante'
    },
    {
      title: 'ATL - Aerolínea Transmedia',
      subtitle: 'Proyecto Transmedia',
      year: '2023-2025',
      status: 'En desarrollo',
      category: 'Universo Narrativo',
      description: 'Proyecto transmedia que desarrolla un universo narrativo complejo conectando múltiples medios: instalaciones, documentales, música y experiencias interactivas.',
      image: '/images/video_art_installation_projections_dark_gallery.jpg',
      href: '/proyectos-artisticos/atl-transmedia',
      featured: true,
      themes: ['Transmedia', 'Narrativa', 'Universo Expandido'],
      location: 'Proyecto multiplataforma'
    },
    {
      title: 'Cuerpos de agua',
      subtitle: 'Cortometraje Experimental',
      director: 'Pablo Benjamín Nieto Mercado',
      year: '2024',
      status: 'Completado',
      category: 'Audiovisual',
      description: 'Exploración del ciclo microscópico de vida y agua, documentando la transformación de vida-energía a través de órganos con el agua como vehículo central.',
      image: '/images/video_art_installation_screens_dark_gallery.jpg',
      href: '/proyectos-artisticos/cuerpos-de-agua',
      featured: false,
      themes: ['Agua', 'Vida', 'Transformación', 'Microscópico'],
      duration: '12 minutos'
    },
    {
      title: 'Inundar la ciudad',
      subtitle: 'Proyecto Conceptual',
      year: '2024',
      status: 'Conceptualización',
      category: 'Intervención Urbana',
      description: 'Proyecto en desarrollo que explora la relación entre agua, ciudad y memoria colectiva a través de intervenciones sonoras y visuales en espacios urbanos.',
      image: '/images/immersive_van_gogh_starry_night_art_projection_installation.jpg',
      href: '/proyectos-artisticos/inundar-ciudad',
      featured: false,
      themes: ['Ciudad', 'Agua', 'Memoria', 'Intervención'],
      location: 'Ciudad de México'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo': return 'text-melvin-accent-cyan'
      case 'En desarrollo': return 'text-yellow-400'
      case 'Completado': return 'text-green-400'
      case 'Conceptualización': return 'text-purple-400'
      default: return 'text-melvin-text-secondary'
    }
  }

  const featuredProjects = proyectos.filter(p => p.featured)
  const otherProjects = proyectos.filter(p => !p.featured)

  return (
    <>
      <Helmet>
        <title>Proyectos Artísticos | Instalaciones Video-Arte y Transmedia | Melvin Records</title>
        <meta name="description" content="Instalaciones de video-arte, proyectos transmedia y exploraciones artísticas. Invasion, ATL, Cuerpos de agua. Arte experimental contemporáneo México." />
        <meta name="keywords" content="video arte México, instalaciones artísticas, arte transmedia, Invasion instalación, ATL proyecto, Pablo Benjamín Nieto Mercado" />
        <link rel="canonical" href="https://melvinrecords.com/proyectos-artisticos" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWorkSeries",
            "name": "Proyectos Artísticos Melvin Records",
            "description": "Instalaciones de video-arte, proyectos transmedia y exploraciones artísticas experimentales",
            "creator": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "about": ["Video Arte", "Instalaciones", "Arte Transmedia", "Arte Experimental"]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-8">
                <span className="block text-melvin-text-primary">PROYECTOS</span>
                <span className="block text-gradient-cyan">ARTÍSTICOS</span>
              </h1>
              <p className="text-xl text-melvin-text-secondary max-w-4xl mx-auto leading-relaxed">
                Instalaciones de video-arte, proyectos transmedia y exploraciones artísticas que 
                conectan tecnología, medio ambiente, memoria urbana y experiencia contemporánea.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-20">
        <div className="section-container">
          <div className="space-y-20">
            {featuredProjects.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`card overflow-hidden ${index % 2 === 0 ? '' : ''}`}>
                  <div className={index % 2 === 0 ? 'asymmetric-grid' : 'asymmetric-grid-reverse'}>
                    <div className="relative overflow-hidden aspect-video lg:aspect-[4/3]">
                      <img
                        src={proyecto.image}
                        alt={proyecto.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/70 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="text-xs font-manrope font-medium uppercase tracking-wider text-melvin-accent-cyan bg-melvin-bg-primary/80 px-3 py-2">
                          {proyecto.category}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6">
                        <span className={`text-xs font-manrope font-medium uppercase tracking-wider ${getStatusColor(proyecto.status)} bg-melvin-bg-primary/80 px-3 py-2`}>
                          {proyecto.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12">
                      <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-melvin-text-primary mb-4">
                        {proyecto.title}
                      </h2>
                      <h3 className="text-xl text-melvin-accent-cyan mb-6 font-manrope font-medium">
                        {proyecto.subtitle}
                      </h3>

                      {/* Metadata */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-melvin-text-secondary">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{proyecto.year}</span>
                        </div>
                        {proyecto.location && (
                          <div className="flex items-center text-melvin-text-secondary">
                            <MapPin size={16} className="mr-2" />
                            <span className="text-sm">{proyecto.location}</span>
                          </div>
                        )}
                        {proyecto.director && (
                          <div className="flex items-center text-melvin-text-secondary col-span-full">
                            <span className="text-sm">Dirigido por {proyecto.director}</span>
                          </div>
                        )}
                        {proyecto.duration && (
                          <div className="flex items-center text-melvin-text-secondary">
                            <span className="text-sm">Duración: {proyecto.duration}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-melvin-text-secondary mb-8 leading-relaxed">
                        {proyecto.description}
                      </p>

                      {/* Themes */}
                      <div className="mb-8">
                        <h4 className="text-sm font-manrope font-semibold text-melvin-text-primary uppercase tracking-wider mb-3">
                          Temas Principales
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {proyecto.themes.map((tema, tIndex) => (
                            <span 
                              key={tIndex}
                              className="text-xs px-3 py-1 bg-melvin-accent-cyan/10 text-melvin-accent-cyan border border-melvin-accent-cyan/30 font-manrope font-medium uppercase tracking-wider"
                            >
                              {tema}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link to={proyecto.href} className="btn-primary group">
                        Explorar Proyecto
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
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
              Otros <span className="text-gradient-cyan">Proyectos</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Exploraciones artísticas complementarias que amplían nuestro 
              universo creativo multidisciplinario.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherProjects.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={proyecto.href} className="card-interactive block overflow-hidden group">
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
                        {proyecto.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-manrope font-medium uppercase tracking-wider ${getStatusColor(proyecto.status)} bg-melvin-bg-primary/80 px-3 py-1`}>
                        {proyecto.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-melvin-text-secondary mb-4 gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span className="text-sm">{proyecto.year}</span>
                      </div>
                      {proyecto.location && (
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span className="text-sm">{proyecto.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-manrope font-bold text-melvin-text-primary mb-2 group-hover:text-melvin-accent-cyan transition-colors duration-300">
                      {proyecto.title}
                    </h3>
                    
                    <h4 className="text-melvin-accent-cyan font-manrope font-medium mb-4">
                      {proyecto.subtitle}
                    </h4>
                    
                    {proyecto.director && (
                      <p className="text-sm text-melvin-text-secondary mb-4">
                        Dirigido por {proyecto.director}
                      </p>
                    )}
                    
                    <p className="text-melvin-text-secondary leading-relaxed mb-4">
                      {proyecto.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {proyecto.themes.slice(0, 3).map((tema, tIndex) => (
                        <span 
                          key={tIndex}
                          className="text-xs px-2 py-1 bg-melvin-accent-cyan/10 text-melvin-accent-cyan border border-melvin-accent-cyan/30 font-manrope font-medium uppercase tracking-wider"
                        >
                          {tema}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Approach */}
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
              Proceso <span className="text-gradient-cyan">Creativo</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Metodología experimental que combina investigación, tecnología 
              y narrativa para crear experiencias artísticas multisensoriales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb size={32} />,
                title: 'Conceptualización',
                description: 'Investigación profunda de temas sociales, ambientales y tecnológicos como punto de partida creativo.'
              },
              {
                icon: <ExternalLink size={32} />,
                title: 'Desarrollo Transmedia',
                description: 'Expansión de conceptos a través de múltiples medios: video, audio, instalaciones y experiencias interactivas.'
              },
              {
                icon: <MapPin size={32} />,
                title: 'Implementación',
                description: 'Materialización de proyectos en espacios específicos, considerando contexto social y físico.'
              }
            ].map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-melvin-accent-cyan mb-6 flex justify-center">
                  {paso.icon}
                </div>
                <h3 className="text-xl font-manrope font-semibold text-melvin-text-primary mb-4">
                  {paso.title}
                </h3>
                <p className="text-melvin-text-secondary leading-relaxed">
                  {paso.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-melvin-text-primary">
              Colabora en <span className="text-gradient-cyan">Nuevos Proyectos</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Invitamos a artistas, tecnólogos y creativos a participar 
              en residencias y colaboraciones para desarrollar nuevas exploraciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/hacklab/residencias" className="btn-primary">
                Conocer Residencias
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

export default ProyectosArtisticos
