import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User, Play, ExternalLink, Monitor } from 'lucide-react'

const Cibertrip = () => {
  const fichatecnica = {
    titulo: 'Cibertrip',
    año: 2020,
    tipo: 'Corto Documental',
    duracion: '20 minutos',
    genero: 'Documental',
    director: 'Pablo Nieto Mercado',
    produccion: 'Melvin Records / RetoDocsMX',
    pais: 'México',
    idioma: 'Español',
    formato: 'Digital HD'
  }

  const conceptos = [
    {
      tema: 'Experiencia Digital Contemporánea',
      descripcion: 'Exploración de cómo la digitalización ha transformado la percepción de la realidad y las relaciones humanas en el México del siglo XXI.'
    },
    {
      tema: 'Navegación Entre Realidades',
      descripcion: 'El documental navega entre espacios virtuales y físicos, cuestionando los límites tradicionales de ambos mundos.'
    },
    {
      tema: 'Identidad en la Era Digital',
      descripción: 'Reflexión sobre la construcción de identidad personal y colectiva en contextos digitales y su impacto en la vida cotidiana mexicana.'
    },
    {
      tema: 'Tecnología como Paisaje Cultural',
      descripcion: 'La tecnología no solo como herramienta, sino como elemento constitutivo del paisaje cultural contemporáneo en México.'
    }
  ]

  const procesocreativo = [
    {
      fase: 'Investigación Digital',
      descripcion: 'Exploración de plataformas digitales, redes sociales y espacios virtuales como territorios de investigación etnográfica.'
    },
    {
      fase: 'Documentación Inmersiva',
      descripcion: 'Registro de experiencias digitales desde una perspectiva subjetiva, creando una narrativa personal del ciberespacio.'
    },
    {
      fase: 'Montaje Experimental',
      descripcion: 'Post-producción que refleja la estética digital: glitches, superposiciones, transiciones no lineales que emulan la navegación web.'
    }
  ]

  const premiosReconocimientos = [
    { festival: 'RetoDocsMX - Selección Oficial', año: 2020, tipo: 'Selección' },
    { festival: 'FECIBA - Festival de Cine de Barrancas', año: 2021, tipo: 'Selección' },
    { festival: 'Festival de Cine Digital Independiente', año: 2021, tipo: 'Mención Especial' }
  ]

  return (
    <>
      <Helmet>
        <title>Cibertrip (2020) | Documental Digital | Pablo Nieto Mercado | Melvin Records</title>
        <meta name="description" content="Cibertrip: documental digital experimental dirigido por Pablo Nieto Mercado. Exploración audiovisual de la experiencia digital contemporánea en México." />
        <meta name="keywords" content="Cibertrip, Pablo Nieto Mercado, documental digital, experiencia digital, realidad virtual, México, Melvin Records" />
        <link rel="canonical" href="https://melvinrecords.gt.tc/proyectos/cibertrip" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": "Cibertrip",
            "description": "Documental digital experimental sobre la experiencia digital contemporánea en México",
            "dateCreated": "2020",
            "director": {
              "@type": "Person",
              "name": "Pablo Nieto Mercado"
            },
            "duration": "PT20M",
            "genre": "Documentary",
            "countryOfOrigin": "MX",
            "inLanguage": "es",
            "productionCompany": [
              {"@type": "Organization", "name": "Melvin Records"},
              {"@type": "Organization", "name": "RetoDocsMX"}
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
                <span className="block text-gradient-cyan text-4xl lg:text-6xl font-manrope font-bold">
                  CIBERTRIP
                </span>
                <span className="block text-melvin-text-primary text-xl lg:text-2xl font-manrope font-medium mt-2">
                  Documental Digital Experimental
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
                  <User size={16} className="mr-2" />
                  <span className="text-sm">{fichatecnica.director}</span>
                </div>
                <div className="flex items-center text-melvin-text-secondary">
                  <Monitor size={16} className="mr-2" />
                  <span className="text-sm">Digital</span>
                </div>
              </div>

              <p className="text-xl text-melvin-text-secondary mb-8 leading-relaxed">
                Una exploración audiovisual de la experiencia digital contemporánea, 
                navegando entre realidades virtuales y físicas en el México del siglo XXI. 
                Un viaje inmersivo por los territorios digitales que habitamos cotidianamente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary group">
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Ver Documental
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
                src="/images/video_art_installation_screens_dark_gallery.jpg"
                alt="Cibertrip - Documental digital experimental"
                className="w-full h-96 lg:h-[500px] object-cover card"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/70 to-transparent card" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-melvin-accent-cyan font-manrope font-bold text-lg mb-2">
                  RetoDocsMX 2020
                </div>
                <div className="text-melvin-text-primary">
                  Dirigido por Pablo Nieto Mercado
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conceptos Centrales */}
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
              <span className="text-gradient-cyan">Conceptos</span> Centrales
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Los temas que estructuran esta exploración de la experiencia digital mexicana contemporánea.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {conceptos.map((concepto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-xl font-manrope font-bold text-melvin-text-primary mb-4">
                  {concepto.tema}
                </h3>
                <p className="text-melvin-text-secondary leading-relaxed">
                  {concepto.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Creativo */}
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
              Metodología experimental que refleja la experiencia de navegación digital 
              en la construcción narrativa del documental.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {procesocreativo.map((proceso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-manrope font-bold text-melvin-accent-cyan/20 mb-4">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-manrope font-semibold text-melvin-text-primary mb-4">
                  {proceso.fase}
                </h3>
                <p className="text-melvin-text-secondary leading-relaxed">
                  {proceso.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="py-20">
        <div className="section-container">
          <div className="asymmetric-grid items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-manrope font-bold text-melvin-text-primary mb-6">
                <span className="text-gradient-cyan">Pablo Nieto Mercado</span>
              </h2>
              <h3 className="text-xl text-melvin-text-secondary mb-6">
                Director y Realizador
              </h3>
              
              <div className="space-y-4 text-melvin-text-secondary leading-relaxed">
                <p>
                  Cineasta y artista visual especializado en documentales experimentales 
                  y proyectos transmedia. Su trabajo se enfoca en la intersección entre 
                  tecnología, memoria y experiencia contemporánea en México.
                </p>
                <p>
                  Como parte del colectivo Melvin Records desde 2015, ha dirigido múltiples 
                  proyectos que exploran nuevas formas de narrativa audiovisual, combinando 
                  técnicas documentales con experimentación estética.
                </p>
                <p>
                  "Cibertrip" representa su exploración más personal del impacto de la 
                  digitalización en la subjetividad contemporánea mexicana.
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
              <div className="card p-8">
                <h3 className="text-xl font-manrope font-semibold text-melvin-text-primary mb-6">
                  Otros Trabajos de Pablo Nieto Mercado
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-melvin-text-secondary/20 pb-4">
                    <Link 
                      to="/proyectos-artisticos/cuerpos-de-agua"
                      className="text-melvin-accent-cyan hover:text-melvin-accent-magenta transition-colors duration-300 font-manrope font-medium"
                    >
                      Cuerpos de agua (2024)
                    </Link>
                    <p className="text-sm text-melvin-text-secondary">Cortometraje experimental</p>
                  </div>
                  <div className="border-b border-melvin-text-secondary/20 pb-4">
                    <span className="text-melvin-text-primary font-manrope font-medium">
                      Corpo (2018)
                    </span>
                    <p className="text-sm text-melvin-text-secondary">Corto experimental</p>
                  </div>
                  <div>
                    <span className="text-melvin-text-primary font-manrope font-medium">
                      Colaboraciones en ATL
                    </span>
                    <p className="text-sm text-melvin-text-secondary">Proyecto transmedia (2021-2025)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selecciones y Premios */}
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
              <span className="text-gradient-cyan">Selecciones</span> y Reconocimientos
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              Reconocimiento en festivales especializados en documental digital y cine experimental.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {premiosReconocimientos.map((premio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <h3 className="font-manrope font-bold text-melvin-text-primary text-lg mb-2">
                  {premio.festival}
                </h3>
                <div className="text-melvin-accent-cyan font-manrope font-medium mb-2">
                  {premio.tipo}
                </div>
                <div className="text-melvin-text-secondary">
                  {premio.año}
                </div>
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
                Contexto de Producción
              </h2>
              
              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-manrope font-semibold text-melvin-text-primary mb-3">
                    RetoDocsMX 2020
                  </h3>
                  <p className="text-melvin-text-secondary">
                    Producido en el contexto del RetoDocsMX, iniciativa que promovía 
                    la creación de documentales experimentales durante la pandemia de 2020.
                  </p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-manrope font-semibold text-melvin-text-primary mb-3">
                    Contexto Pandémico
                  </h3>
                  <p className="text-melvin-text-secondary">
                    La experiencia de confinamiento intensificó la reflexión sobre 
                    los espacios digitales como territorios de vida social y cultural.
                  </p>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-manrope font-semibold text-melvin-text-primary mb-3">
                    Metodología Híbrida
                  </h3>
                  <p className="text-melvin-text-secondary">
                    Combinación de registros digitales, navegación web en tiempo real 
                    y reflexión ensayística sobre la experiencia digital contemporánea.
                  </p>
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
              Ver <span className="text-gradient-cyan">Cibertrip</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Disponible para proyecciones educativas y festivales especializados 
              en documental experimental y arte digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contacto" className="btn-primary">
                Solicitar Proyección
              </Link>
              <Link to="/audiovisual" className="btn-secondary">
                Ver Más Documentales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Cibertrip
