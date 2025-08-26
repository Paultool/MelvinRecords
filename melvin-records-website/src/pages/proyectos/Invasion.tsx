import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Users, MapPin, Eye, ArrowRight, Play } from 'lucide-react'

const Invasion = () => {
  const fichatecnica = {
    titulo: 'Invasion',
    año: 2021,
    tipo: 'Instalación Transmedia',
    duracion: 'Variable (20-45 minutos)',
    genero: 'Arte Transmedia',
    concepto: 'Melvin Records',
    produccion: 'Melvin Records',
    pais: 'México',
    idioma: 'Español / Inglés',
    formato: 'Instalación + Performance'
  }

  const narrativaHistorica = [
    {
      periodo: 'Origen',
      evento: 'Lago de Texcoco',
      descripcion: 'El territorio ancestral lacustre como punto de partida de la transformación urbana.'
    },
    {
      periodo: '1900s',
      evento: 'Primer Vuelo Intercontinental',
      descripcion: 'El inicio de la conquista del aire y la transformación tecnológica del espacio.'
    },
    {
      periodo: '1940s',
      evento: 'Carrera Armamentista',
      descripcion: 'La militarización de la tecnología aeronáutica como herramienta de dominio.'
    },
    {
      periodo: '1945',
      evento: 'Bomba Atómica',
      descripción: 'El punto de inflexión: la tecnología como amenaza existencial para la humanidad.'
    },
    {
      periodo: '1960s',
      evento: 'Carrera Espacial',
      descripcion: 'La expansión humana más allá del planeta, la última frontera de invasión.'
    },
    {
      periodo: '2000s',
      evento: 'Invasión Redes Sociales',
      descripcion: 'La colonización digital del espacio mental y social contemporáneo.'
    }
  ]

  const conceptosCore = [
    {
      concepto: 'Humanidad como Invasora',
      descripcion: 'Exploración de cómo la especie humana ha actuado históricamente como una fuerza invasiva hacia su entorno, desde la conquista territorial hasta la dominación tecnológica.'
    },
    {
      concepto: 'Aeronáutica como Metáfora',
      descripcion: 'La historia de la aviación funciona como hilo conductor narrativo para entender la progresión destructiva de la relación humanidad-naturaleza.'
    },
    {
      concepto: 'Necesidad de Regeneración',
      descripcion: 'La urgencia de replantear nuestra relación con el medio ambiente y desarrollar nuevas formas de coexistencia no destructiva.'
    },
    {
      concepto: 'Transmedia como Resistencia',
      descripcion: 'El uso de múltiples medios (video, performance, sonido) para crear experiencias que resistan la narrativa dominante de progreso destructivo.'
    }
  ]

  const presentaciones = [
    { festival: 'Festival Internacional de la Imagen (FINI)', ubicacion: 'UAEH, México', año: 2022 },
    { festival: 'Festival de Cine Radical', ubicacion: 'La Paz, Bolivia', año: 2022 },
    { festival: 'Expanded Cinema vol.2: TECHNOLOGIA', ubicacion: 'Helsinki, Finlandia', año: 2022 },
    { festival: 'Bent and Broken - Circuit Bending Festival', ubicacion: 'Estados Unidos', año: 2021 },
    { festival: 'White Noise - Internationales Digitalkunst Festival', ubicacion: 'Stuttgart, Alemania', año: 2021 }
  ]

  return (
    <>
      <Helmet>
        <title>Invasion (2021) | Instalación Video-Performance | Melvin Records</title>
        <meta name="description" content="Invasion: instalación de video y performance sobre la relación destructiva humanidad-medio ambiente. De la aeronáutica a las redes sociales. Proyecto ATL transmedia." />
        <meta name="keywords" content="Invasion instalación, video performance, medio ambiente, aeronáutica, ATL transmedia, arte contemporáneo México, Melvin Records" />
        <link rel="canonical" href="https://melvinrecords.gt.tc/proyectos/invasion" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            "name": "Invasion",
            "creator": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "dateCreated": "2021",
            "artMedium": "Instalación de video digital y performance en vivo",
            "genre": "Arte transmedia",
            "description": "Instalación que explora la historia de la aeronáutica como hilo conductor de la relación destructiva humanidad-medio ambiente",
            "keywords": "instalación de video, arte transmedia, medio ambiente, aeronáutica, performance",
            "inLanguage": ["es-MX", "en"],
            "isPartOf": {
              "@type": "CreativeWorkSeries",
              "name": "ATL - Proyecto Transmedia"
            }
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <section className="py-8">
        <div className="section-container">
          <Link 
            to="/proyectos-artisticos" 
            className="inline-flex items-center text-melvin-accent-cyan hover:text-melvin-accent-magenta transition-colors duration-300 font-manrope font-medium uppercase tracking-wider text-sm"
          >
            <ArrowLeft className="mr-2" size={16} />
            Volver a Proyectos
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
                <span className="block text-gradient-cyan text-4xl lg:text-6xl font-manrope font-bold">
                  INVASION
                </span>
                <span className="block text-melvin-text-primary text-xl lg:text-2xl font-manrope font-medium mt-2">
                  Instalación
                </span>
              </h1>
              
              {/* Metadata */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center text-melvin-text-secondary">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{fichatecnica.año}</span>
                </div>
                <div className="flex items-center text-melvin-text-secondary">
                  <Users size={16} className="mr-2" />
                  <span className="text-sm">Arte Transmedia</span>
                </div>
                <div className="flex items-center text-melvin-text-secondary">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Instalación Itinerante</span>
                </div>
              </div>

              <p className="text-xl text-melvin-text-secondary mb-8 leading-relaxed">
                Una instalación de video y performance en vivo que explora la relación 
                destructiva de la humanidad con el medio ambiente, utilizando la historia 
                de la aeronáutica como hilo conductor narrativo desde el Lago de Texcoco 
                hasta la invasión de las redes sociales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary group">
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Ver Documentación
                </button>
                <Link to="/proyectos/atl-transmedia" className="btn-secondary">
                  Proyecto ATL Completo
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
                src="/images/video_art_installation_projections_dark_gallery.jpg"
                alt="Invasion - Instalación de video arte"
                className="w-full h-96 lg:h-[500px] object-cover card"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/70 to-transparent card" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-melvin-accent-cyan font-manrope font-bold text-lg mb-2">
                  Instalación Transmedia 2021
                </div>
                <div className="text-melvin-text-primary">
                  Performance + Video + Sonido Espacializado
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrativa Histórica */}
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
              <span className="text-gradient-cyan">Narrativa</span> Histórica
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Un recorrido temporal que conecta la transformación del territorio 
              con el desarrollo de tecnologías de dominación.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-melvin-accent-cyan/30"></div>
            
            <div className="space-y-12">
              {narrativaHistorica.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-melvin-accent-cyan rounded-full border-4 border-melvin-bg-primary"></div>
                  
                  {/* Content */}
                  <div className={`card p-6 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } md:w-5/12`}>
                    <div className="mb-2">
                      <span className="text-melvin-accent-cyan font-manrope font-bold text-lg">
                        {item.periodo}
                      </span>
                    </div>
                    <h3 className="text-xl font-manrope font-semibold text-melvin-text-primary mb-3">
                      {item.evento}
                    </h3>
                    <p className="text-melvin-text-secondary leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conceptos Core */}
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
              Conceptos <span className="text-gradient-cyan">Fundamentales</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Los ejes conceptuales que estructuran la experiencia inmersiva de la instalación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {conceptosCore.map((concepto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-start space-x-4">
                  <Eye className="text-melvin-accent-cyan mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-manrope font-bold text-melvin-text-primary mb-4">
                      {concepto.concepto}
                    </h3>
                    <p className="text-melvin-text-secondary leading-relaxed">
                      {concepto.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentaciones Internacionales */}
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
              Presentaciones <span className="text-gradient-cyan">Internacionales</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              La instalación ha viajado por festivales de arte digital y cine experimental 
              en México, Estados Unidos, Europa y Latinoamérica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {presentaciones.map((presentacion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="font-manrope font-bold text-melvin-text-primary text-lg mb-2">
                  {presentacion.festival}
                </h3>
                <div className="flex justify-between text-melvin-text-secondary">
                  <span>{presentacion.ubicacion}</span>
                  <span>{presentacion.año}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha Técnica */}
      <section className="py-20 bg-melvin-bg-secondary">
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
                Componentes de la Instalación
              </h2>
              
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-manrope font-semibold text-melvin-text-primary mb-3">
                    Video Instalación
                  </h3>
                  <p className="text-melvin-text-secondary">
                    Múltiples proyecciones que crean un ambiente inmersivo, 
                    combinando archivo histórico con imágenes contemporáneas.
                  </p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-manrope font-semibold text-melvin-text-primary mb-3">
                    Performance en Vivo
                  </h3>
                  <p className="text-melvin-text-secondary">
                    Intervención performativa que dialoga con las proyecciones, 
                    creando una experiencia única en cada presentación.
                  </p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-manrope font-semibold text-melvin-text-primary mb-3">
                    Diseño Sonoro
                  </h3>
                  <p className="text-melvin-text-secondary">
                    Paisaje sonoro espacializado que evoluciona durante la presentación, 
                    integrando sonidos históricos y composición original.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Experimenta <span className="text-gradient-cyan">Invasion</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              La instalación está disponible para presentaciones en galerías, 
              centros culturales y festivales internacionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contacto" className="btn-primary">
                Solicitar Presentación
              </Link>
              <Link to="/proyectos-artisticos" className="btn-secondary group">
                Ver Más Proyectos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Invasion
