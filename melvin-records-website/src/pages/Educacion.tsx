import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Clock, Award, Calendar, ArrowRight } from 'lucide-react'

const Educacion = () => {
  const cursos = [
    {
      title: 'Producción Musical Experimental',
      duration: '8 semanas',
      level: 'Intermedio',
      modality: 'Presencial + Online',
      price: '$3,500 MXN',
      description: 'Exploración de técnicas de producción musical experimental, desde ambient hasta noise, utilizando hardware y software especializado.',
      topics: ['Síntesis modular', 'Field recording', 'Procesamiento granular', 'Espacialización sonora'],
      nextStart: 'Febrero 2025',
      image: '/images/dark_modern_music_studio_production.jpg'
    },
    {
      title: 'Arte Digital y Net Art',
      duration: '6 semanas',
      level: 'Principiante',
      modality: 'Online',
      price: '$2,800 MXN',
      description: 'Introducción al arte digital contemporáneo y net art, explorando herramientas, plataformas y conceptos fundamentales.',
      topics: ['Processing/p5.js', 'Web art', 'Arte generativo', 'Instalaciones interactivas'],
      nextStart: 'Marzo 2025',
      image: '/images/experimental_video_art_installation_dark_gallery.jpg'
    },
    {
      title: 'Documentales de Memoria',
      duration: '10 semanas',
      level: 'Intermedio',
      modality: 'Presencial',
      price: '$4,200 MXN',
      description: 'Metodología para documentales de memoria urbana y social, desde investigación hasta postproducción.',
      topics: ['Investigación archivística', 'Entrevistas en profundidad', 'Narrativa no lineal', 'Montaje experimental'],
      nextStart: 'Abril 2025',
      image: '/images/video_art_installation_projections_dark_gallery.jpg'
    },
    {
      title: 'Tecnologías Libres para Artistas',
      duration: '4 semanas',
      level: 'Principiante',
      modality: 'Hacklab',
      price: '$1,800 MXN',
      description: 'Introducción a herramientas de software libre para creación artística: audio, video, web y fabricación digital.',
      topics: ['Ardour/Reaper', 'Blender', 'Linux audio', 'Impresión 3D'],
      nextStart: 'Enero 2025',
      image: '/images/minimal-modern-technology-lab-workspace-setup.jpg'
    }
  ]

  const talleres = [
    {
      title: 'Taller Intensivo: Instalaciones Sonoras',
      duration: '2 días',
      date: '15-16 Enero 2025',
      instructor: 'Colectivo Melvin Records',
      description: 'Creación de instalaciones sonoras site-specific utilizando tecnología de bajo costo.'
    },
    {
      title: 'Hackathon: Memoria Digital',
      duration: '48 horas',
      date: '5-7 Febrero 2025',
      instructor: 'Hacklab La Resistencia',
      description: 'Desarrollo colaborativo de herramientas digitales para preservación de memoria comunitaria.'
    },
    {
      title: 'Masterclass: Producción Transmedia',
      duration: '1 día',
      date: '22 Febrero 2025',
      instructor: 'Pablo Nieto Mercado',
      description: 'Estrategias para desarrollar narrativas que se expanden a través de múltiples medios.'
    }
  ]

  const recursos = [
    {
      category: 'Manuales',
      items: ['Guía de grabación de campo', 'Manual de síntesis modular', 'Introducción a Linux Audio']
    },
    {
      category: 'Templates',
      items: ['Proyecto Ardour base', 'Setup Reaper experimental', 'Configuración OBS streaming']
    },
    {
      category: 'Samples',
      items: ['Biblioteca de field recordings CDMX', 'Samples modulares', 'Ambientes urbanos']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cursos y Educación Digital | Producción Musical y Arte Tecnológico | Melvin Records</title>
        <meta name="description" content="Cursos de producción musical experimental, arte digital y tecnologías audiovisuales. Educación especializada en Hacklab La Resistencia, México." />
        <meta name="keywords" content="cursos producción musical, educación digital México, arte tecnológico, talleres experimentales, Melvin Records educación" />
        <link rel="canonical" href="https://melvinrecords.gt.tc/educacion" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Melvin Records - Educación",
            "description": "Cursos y talleres de producción musical experimental, arte digital y tecnologías creativas",
            "provider": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "courseMode": ["Presencial", "Online", "Híbrido"],
            "subject": ["Producción Musical", "Arte Digital", "Documentales", "Tecnología Creativa"]
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
                <span className="block text-melvin-text-primary">EDUCACIÓN</span>
                <span className="block text-gradient-cyan">DIGITAL</span>
              </h1>
              <p className="text-xl text-melvin-text-secondary max-w-4xl mx-auto leading-relaxed">
                Cursos especializados en producción musical experimental, arte digital, 
                documentales de memoria y tecnologías creativas. Educación práctica 
                para artistas del siglo XXI.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: '150+', label: 'Estudiantes', detail: 'Desde 2020' },
              { number: '12', label: 'Cursos Activos', detail: 'Modalidades híbridas' },
              { number: '95%', label: 'Satisfacción', detail: 'Evaluación estudiantes' },
              { number: '4', label: 'Instructores', detail: 'Especialistas activos' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-manrope font-bold text-melvin-accent-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-melvin-text-primary font-manrope font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-melvin-text-secondary">
                  {stat.detail}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cursos Section */}
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
              <span className="text-gradient-cyan">Cursos</span> Especializados
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Programas intensivos diseñados para artistas, músicos, documentalistas 
              y creativos que buscan profundizar en tecnologías experimentales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cursos.map((curso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={curso.image}
                    alt={curso.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-manrope font-medium uppercase tracking-wider text-melvin-accent-cyan bg-melvin-bg-primary/80 px-3 py-1">
                      {curso.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-manrope font-medium uppercase tracking-wider text-melvin-text-primary bg-melvin-bg-primary/80 px-3 py-1">
                      {curso.modality}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-manrope font-bold text-melvin-text-primary mb-4">
                    {curso.title}
                  </h3>

                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-melvin-text-secondary">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm">{curso.duration}</span>
                    </div>
                    <div className="flex items-center text-melvin-text-secondary">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{curso.nextStart}</span>
                    </div>
                  </div>

                  <p className="text-melvin-text-secondary mb-6 leading-relaxed">
                    {curso.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="text-sm font-manrope font-semibold text-melvin-text-primary uppercase tracking-wider mb-3">
                      Temas Principales
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {curso.topics.map((topic, tIndex) => (
                        <span 
                          key={tIndex}
                          className="text-xs px-2 py-1 bg-melvin-accent-cyan/10 text-melvin-accent-cyan border border-melvin-accent-cyan/30 font-manrope font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="border-t border-melvin-text-secondary/20 pt-6 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-manrope font-bold text-melvin-accent-cyan">
                        {curso.price}
                      </span>
                    </div>
                    <Link 
                      to="/contacto" 
                      className="btn-primary"
                    >
                      Inscribirme
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talleres Section */}
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
              <span className="text-gradient-cyan">Talleres</span> y Eventos
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Actividades intensivas y encuentros especializados para 
              profundizar en temas específicos de arte y tecnología.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {talleres.map((taller, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="mb-4">
                  <span className="text-xs font-manrope font-medium uppercase tracking-wider text-melvin-accent-cyan bg-melvin-accent-cyan/10 px-3 py-1">
                    {taller.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-manrope font-semibold text-melvin-text-primary mb-4">
                  {taller.title}
                </h3>
                
                <div className="flex items-center text-melvin-text-secondary mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{taller.date}</span>
                </div>
                
                <div className="flex items-center text-melvin-text-secondary mb-6">
                  <Users size={16} className="mr-2" />
                  <span className="text-sm">{taller.instructor}</span>
                </div>
                
                <p className="text-melvin-text-secondary leading-relaxed mb-6">
                  {taller.description}
                </p>

                <Link 
                  to="/contacto" 
                  className="text-melvin-accent-cyan hover:text-melvin-accent-magenta transition-colors duration-300 font-manrope font-medium uppercase tracking-wider text-sm group"
                >
                  Registrarse
                  <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos Section */}
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
              <span className="text-gradient-cyan">Recursos</span> Educativos
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Material complementario gratuito para estudiantes y la comunidad 
              de artistas experimentales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recursos.map((categoria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="text-melvin-accent-cyan mb-4 flex justify-center">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-manrope font-semibold text-melvin-text-primary mb-6 text-center">
                  {categoria.category}
                </h3>
                <ul className="space-y-3">
                  {categoria.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-melvin-text-secondary flex items-start">
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
              <p className="text-melvin-text-secondary mb-8">
                <strong>Acceso Libre:</strong> Todos los recursos están disponibles 
                gratuitamente para estudiantes activos y alumni de nuestros programas.
              </p>
              <Link to="/contacto" className="btn-secondary">
                Solicitar Acceso a Recursos
              </Link>
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
              Comienza tu <span className="text-gradient-cyan">Formación</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Escribe para conocer más sobre nuestros programas educativos, 
              becas disponibles y modalidades de pago flexibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contacto" className="btn-primary">
                Solicitar Información
              </Link>
              <Link to="/hacklab/residencias" className="btn-secondary">
                Ver Residencias Artísticas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Educacion
