import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/images/vintage_experimental_music_studio_industrial.jpg',
    '/images/experimental_video_art_installation_dark_gallery.jpg',
    '/images/dark_modern_music_studio_production.jpg'
  ]

  const featuredProjects = [
    {
      title: 'La cuenca de los ríos de piedra',
      category: 'Documental',
      description: 'Transformación urbana de CDMX a través de 4 testimonios de memoria del agua',
      image: '/images/experimental_video_art_installation_dark_gallery.jpg',
      href: '/proyectos/la-cuenca-de-los-rios-de-piedra'
    },
    {
      title: 'Invasion',
      category: 'Instalación / Performance',
      description: 'Exploración de la relación destructiva humanidad-medio ambiente',
      image: '/images/video_art_installation_projections_dark_gallery.jpg',
      href: '/proyectos/invasion'
    },
    {
      title: 'Lechones Sangrientos',
      category: 'Catálogo Musical',
      description: '14 releases de música experimental y underground mexicana',
      image: '/images/overlapping_vinyl_records_dark_background.jpg',
      href: '/musica/artistas/lechones-sangrientos'
    },
    {
      title: 'Hacklab La Resistencia',
      category: 'Laboratorio Tecnológico',
      description: 'Espacio de experimentación, residencias artísticas y educación digital',
      image: '/images/minimal-modern-technology-lab-workspace-setup.jpg',
      href: '/hacklab'
    }
  ]

  const statistics = [
    { number: '26', label: 'Releases Musicales', detail: 'Catálogo experimental' },
    { number: '2', label: 'Documentales', detail: 'Memoria urbana CDMX' },
    { number: '4+', label: 'Instalaciones', detail: 'Arte transmedia' },
    { number: '2008', label: 'Fundación', detail: 'Laboratorio activo' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <>
      <Helmet>
        <title>Melvin Records | Laboratorio Experimental Multidisciplinario | Música, Arte y Documentales México</title>
        <meta name="description" content="Melvin Records: Laboratorio cultural experimental en Tultitlán, Estado de México. 26 releases musicales, documentales, instalaciones de video-arte, hacklab tecnológico y cursos especializados." />
        <link rel="canonical" href="https://melvinrecords.gt.tc/" />
        
        {/* Structured Data for Home Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Melvin Records - Inicio",
            "description": "Laboratorio experimental multidisciplinario en México",
            "url": "https://melvinrecords.gt.tc/",
            "mainEntity": {
              "@type": ["MusicGroup", "Organization"],
              "name": "Melvin Records"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 0.3 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-melvin-bg-primary/70" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 leading-tight">
              <span className="block text-melvin-text-primary">LABORATORIO</span>
              <span className="block text-gradient-cyan">EXPERIMENTAL</span>
              <span className="block text-melvin-text-primary">MULTIDISCIPLINARIO</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-melvin-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Un espacio abierto en continuo movimiento orientado al desarrollo de herramientas, 
              gestión y producción musical y audiovisual en México.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/musica" className="btn-primary group">
                Explorar Catálogo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <a 
                href="https://melvinrecords.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Escuchar en Bandcamp
                <ExternalLink className="ml-2" size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-melvin-accent-cyan"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="rotate-90" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 border-b border-melvin-text-secondary/20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-manrope font-bold text-melvin-accent-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-melvin-text-primary font-manrope font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-melvin-text-secondary">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-6 text-melvin-text-primary">
              Proyectos <span className="text-gradient-cyan">Destacados</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Exploraciones multidisciplinarias que conectan música experimental, 
              documentales de memoria urbana, instalaciones de video-arte y tecnología.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={project.href} className="card-interactive block p-0 overflow-hidden group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-manrope font-medium uppercase tracking-wider text-melvin-accent-cyan bg-melvin-bg-primary/80 px-3 py-1">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-melvin-text-primary group-hover:text-melvin-accent-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-melvin-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center text-melvin-accent-cyan font-manrope font-medium uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Explorar Proyecto
                      <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Únete al <span className="text-gradient-cyan">Laboratorio</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Participa en nuestros cursos, colabora en residencias artísticas 
              o contrata nuestros servicios de producción musical y audiovisual.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/educacion" className="btn-primary">
                Ver Cursos Disponibles
              </Link>
              <Link to="/servicios" className="btn-secondary">
                Conocer Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
