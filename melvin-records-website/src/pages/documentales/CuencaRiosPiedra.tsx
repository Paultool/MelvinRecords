import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Award, Users, ExternalLink, Play } from 'lucide-react'

const CuencaRiosPiedra = () => {
  const fichatecnica = {
    titulo: 'La cuenca de los ríos de piedra',
    año: 2019,
    duracion: '75 minutos',
    genero: 'Documental de memoria urbana',
    director: 'Melvin Records',
    produccion: 'Melvin Records - FONCA - IMCINE',
    pais: 'México',
    idioma: 'Español',
    formato: 'Digital 4K'
  }

  const personajes = [
    {
      nombre: 'Alma',
      edad: '94 años',
      ubicacion: 'Río de la Piedad / Viaducto',
      historia: 'Testigo de la transformación del Río de la Piedad en el Viaducto Miguel Alemán. Su memoria abraza décadas de cambio urbano en una de las arterias más importantes de Ciudad de México.'
    },
    {
      nombre: 'Facundo',
      edad: '91 años',
      ubicacion: 'Lago de Texcoco / Peñón de los Baños',
      historia: 'Habitante del área que una vez fue el gran Lago de Texcoco. Su testimonio recorre la desecación del lago y el crecimiento urbano que transformó el paisaje lacustre en una metrópoli.'
    },
    {
      nombre: 'Amalia',
      edad: '83 años',
      ubicacion: 'Canales de Xochimilco',
      historia: 'Guardiana de la memoria de los canales de Xochimilco, ha visto la reducción gradual del sistema lacustre y la lucha constante por preservar este patrimonio mundial.'
    },
    {
      nombre: 'Ignacio Olvera',
      edad: '90 años',
      ubicacion: 'Chimalhuacán / Migración por sequía',
      historia: 'Su experiencia personal refleja las grandes migraciones internas causadas por la sequía y los cambios climáticos, llegando a la periferia de la gran ciudad en busca de agua y oportunidades.'
    }
  ]

  const premios = [
    {
      premio: 'Primer Lugar - Video Documental Profesional',
      festival: 'Festival Internacional de la Imagen (FINI)',
      año: 2022,
      pais: 'México',
      categoria: 'Premio Principal'
    },
    {
      premio: 'Social Impact Award',
      festival: 'International Documentary Association',
      año: 2022,
      pais: 'Estados Unidos',
      categoria: 'Impacto Social'
    },
    {
      premio: 'Apoyo a la Distribución',
      festival: 'Música México - Secretaría de Cultura',
      año: 2022,
      pais: 'México',
      categoria: 'Apoyo Gubernamental'
    },
    {
      premio: 'Mención Honorífica',
      festival: 'Festival Miradas Locales',
      año: 2020,
      pais: 'México',
      categoria: 'Reconocimiento'
    },
    {
      premio: 'Mención Honorífica',
      festival: 'FICAA - Festival Internacional de Cine Animal y Ambiental',
      año: 2021,
      pais: 'México',
      categoria: 'Cine Ambiental'
    }
  ]

  const festivales = [
    { nombre: 'Korea International Ethnographic Film Festival (KIEFF)', pais: 'Corea del Sur', año: 2022 },
    { nombre: 'Steve Aronson International Film Festival', pais: 'Estados Unidos', año: 2022 },
    { nombre: 'Festival Latinoamericano de Cine de Quito', pais: 'Ecuador', año: 2021 },
    { nombre: 'VI Festival de Cine Etnográfico de Ecuador', pais: 'Ecuador', año: 2021 },
    { nombre: 'FECIBA - Festival de Cine de Barrancas', pais: 'México', año: 2021 },
    { nombre: 'Festival Internacional de Cine de Barranquilla', pais: 'Colombia', año: 2018 },
    { nombre: 'BoliviaLab - Festival Internacional', pais: 'Bolivia', año: 2016 }
  ]

  return (
    <>
      <Helmet>
        <title>La cuenca de los ríos de piedra (2019) | Documental | Melvin Records</title>
        <meta name="description" content="Documental premiado sobre la transformación de ríos y lagos de Ciudad de México. 4 testimonios de memoria del agua urbana. Primer lugar FINI 2022, Social Impact Award USA 2022." />
        <meta name="keywords" content="La cuenca de los ríos de piedra, documental CDMX, memoria agua Ciudad México, ríos entubados, Lago Texcoco, Melvin Records, FINI 2022" />
        <link rel="canonical" href="https://melvinrecords.com/audiovisual/documentales/cuenca-rios-piedra" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": "La cuenca de los ríos de piedra",
            "description": "Documental sobre la transformación urbana de Ciudad de México a través de testimonios de memoria del agua",
            "dateCreated": "2019",
            "director": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "duration": "PT75M",
            "genre": "Documentary",
            "countryOfOrigin": "MX",
            "inLanguage": "es",
            "productionCompany": [
              {"@type": "Organization", "name": "Melvin Records"},
              {"@type": "Organization", "name": "FONCA"},
              {"@type": "Organization", "name": "IMCINE"}
            ],
            "award": [
              "Primer Lugar Video Documental Profesional - FINI 2022",
              "Social Impact Award - USA 2022",
              "Mención Honorífica - Festival Miradas Locales 2020",
              "Mención Honorífica - FICAA 2021"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <section className="py-8">
        <div className="section-container">
          <Link 
            to="/audiovisual" 
            className="inline-flex items-center text-melvin-accent-cyan hover:text-melvin-accent-magenta transition-colors duration-300 font-manrope font-medium uppercase tracking-wider text-sm"
          >
            <ArrowLeft className="mr-2" size={16} />
            Volver a Audiovisual
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="section-container">
          <div className="asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6">
                <span className="block text-melvin-text-primary text-3xl lg:text-5xl font-manrope font-bold">
                  LA CUENCA DE LOS
                </span>
                <span className="block text-gradient-cyan text-3xl lg:text-5xl font-manrope font-bold">
                  RÍOS DE PIEDRA
                </span>
              </h1>
              
              {/* Metadata */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center text-melvin-text-secondary">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{fichatecnica.año}</span>
                </div>
                <div className="flex items-center text-melvin-text-secondary">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{fichatecnica.duracion}</span>
                </div>
                <div className="flex items-center text-melvin-text-secondary">
                  <Users size={16} className="mr-2" />
                  <span className="text-sm">{personajes.length} personajes</span>
                </div>
                <div className="flex items-center text-melvin-text-secondary">
                  <Award size={16} className="mr-2" />
                  <span className="text-sm">{premios.length} premios</span>
                </div>
              </div>

              <p className="text-xl text-melvin-text-secondary mb-8 leading-relaxed">
                Un viaje por la transformación urbana de la Ciudad de México a través 
                de cuatro testimonios extraordinarios de quienes vivieron la desaparición 
                del agua: ríos entubados, lagos desecados y canales que se convirtieron en calles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary group">
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Ver Tráiler
                </button>
                <Link to="/contacto" className="btn-secondary">
                  Solicitar Proyección
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
                alt="La cuenca de los ríos de piedra - Fotograma del documental"
                className="w-full h-96 lg:h-[500px] object-cover card"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/70 to-transparent card" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-melvin-accent-cyan font-manrope font-bold text-lg mb-2">
                  Documental Premiado 2019
                </div>
                <div className="text-melvin-text-primary">
                  Memoria íntima de la desaparición del agua en CDMX
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premios y Reconocimientos */}
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
              <span className="text-gradient-cyan">Premios</span> y Reconocimientos
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Reconocimiento internacional por su impacto social y calidad cinematográfica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {premios.map((premio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <Award className="text-melvin-accent-cyan mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-manrope font-bold text-melvin-text-primary text-lg mb-2">
                      {premio.premio}
                    </h3>
                    <p className="text-melvin-text-secondary mb-2">
                      {premio.festival}
                    </p>
                    <div className="flex items-center justify-between text-sm text-melvin-text-secondary">
                      <span>{premio.año}</span>
                      <span>{premio.pais}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personajes */}
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
              Los <span className="text-gradient-cyan">Testimonios</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Cuatro voces que han vivido la transformación del agua en Ciudad de México.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {personajes.map((personaje, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-manrope font-bold text-melvin-text-primary">
                    {personaje.nombre}
                  </h3>
                  <div className="text-melvin-accent-cyan font-manrope font-medium text-lg">
                    {personaje.edad}
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-manrope font-semibold text-melvin-text-primary uppercase tracking-wider">
                    Ubicación:
                  </span>
                  <p className="text-melvin-text-secondary">
                    {personaje.ubicacion}
                  </p>
                </div>
                
                <p className="text-melvin-text-secondary leading-relaxed">
                  {personaje.historia}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha Técnica */}
      <section className="py-20">
        <div className="section-container">
          <div className="asymmetric-grid items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-manrope font-bold text-melvin-text-primary mb-8">
                Ficha Técnica
              </h2>
              
              <div className="space-y-4">
                {Object.entries(fichatecnica).map(([key, value]) => (
                  <div key={key} className="flex border-b border-melvin-text-secondary/20 pb-2">
                    <span className="text-melvin-text-primary font-manrope font-medium capitalize w-32 flex-shrink-0">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                    </span>
                    <span className="text-melvin-text-secondary">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-manrope font-bold text-melvin-text-primary mb-8">
                Selecciones en Festivales
              </h2>
              
              <div className="space-y-4 max-h-80 overflow-y-auto scroll-hidden">
                {festivales.map((festival, index) => (
                  <div key={index} className="card p-4">
                    <h3 className="font-manrope font-semibold text-melvin-text-primary mb-1">
                      {festival.nombre}
                    </h3>
                    <div className="flex justify-between text-sm text-melvin-text-secondary">
                      <span>{festival.pais}</span>
                      <span>{festival.año}</span>
                    </div>
                  </div>
                ))}
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
              Proyecciones y <span className="text-gradient-cyan">Distribución</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Disponible para proyecciones en instituciones educativas, 
              centros culturales y festivales internacionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contacto" className="btn-primary">
                Solicitar Proyección
              </Link>
              <Link to="/servicios" className="btn-secondary">
                Servicios Audiovisuales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CuencaRiosPiedra
