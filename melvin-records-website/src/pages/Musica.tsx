import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ExternalLink, Play, Calendar, User } from 'lucide-react'
import { useState } from 'react'

const Musica = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')

    const releases = [
    // Lechones Sangrientos 
    { id: 1, title: 'Oculum Lentum Nobile', artist: 'Lechones Sangrientos', year: '2015', genre: 'Experimental', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/oculum-lentum-nobile' },
    { id: 2, title: 'Vitrinas-sanirtiV', artist: 'Lechones Sangrientos', year: '2018', genre: 'Experimental', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/vitrinas-sanirtiv' },
    { id: 3, title: 'Canciones para perros que viajan en metro', artist: 'Lechones Sangrientos', year: '2015', genre: 'Experimental', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/canciones-para-perros-que-viajan-en-metro' },
    { id: 4, title: 'La Quema', artist: 'Lechones Sangrientos', year: '2014', genre: 'Noise', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/la-quema' },
    { id: 5, title: 'Crónicas de un hombre barbado', artist: 'Lechones Sangrientos', year: '2014', genre: 'Experimental', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/cr-nicas-de-un-hombre-barbado' },
    { id: 6, title: 'Te quiero Mucho', artist: 'Lechones Sangrientos', year: '2012', genre: 'Experimental', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/te-quiero-mucho' },
    { id: 7, title: 'Piporama Live in Puebla', artist: 'Lechones Sangrientos', year: '2011', genre: 'Live Recording', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/piporama-live-in-puebla' },
    { id: 8, title: 'Jamon Sesion II', artist: 'Lechones Sangrientos', year: '2011', genre: 'Session', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/jamon-sesion-ii' },
    { id: 9, title: 'Kaseum', artist: 'Lechones Sangrientos', year: '2010', genre: 'Electronic', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/kaseum' },
    { id: 10, title: 'Jamon Session', artist: 'Lechones Sangrientos', year: '2009', genre: 'Session', category: 'lechones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/jamon-session' },
    { id: 11, title: 'Desayuno con Satanás', artist: 'Lechones Sangrientos', year: '2009', genre: 'Noise', category: 'lechones', bandcampUrl: 'https://archive.org/details/TFR61-LechonesSangrientos-DesayunoConSatanas' },
    // Colaboraciones Lechones
    { id: 12, title: 'Diploma', artist: 'Lechones Sangrientos & Vulgar Disease', year: '2013', genre: 'Collaboration', category: 'colaboraciones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/diploma' },
    { id: 13, title: 'Vida Yonqui', artist: 'Lechones Sangrientos & Vulgar Disease', year: '2009', genre: 'Collaboration', category: 'colaboraciones', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/vida-yonqui' },
    // Otros artistas
    { id: 14, title: 'Visionarios Creativos Live Hacklab La Resistencia', artist: 'Visionarios Creativos', year: '2024', genre: 'Live Recording', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/visionarios-creativos-live-hacklab-la-resistencia' },
    { id: 15, title: 'Los Cuatro Rumbos', artist: 'Tonathiu De La Cruz Barajas', year: '2024', genre: 'Trova', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/los-cuatro-rumbos' },
    { id: 16, title: 'Chantaje Emocional', artist: 'The Foursome Rap', year: '2024', genre: 'Hip-Hop', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/chantaje-emocional' },
    { id: 17, title: 'RRR RuidoRimaRomance', artist: 'RuidoRimaRomance', year: '2021', genre: 'Experimental Hip-Hop', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/rrr' },
    { id: 18, title: 'La cuenca de los ríos de piedra', artist: 'Various Artists', year: '2020', genre: 'Soundtrack', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/la-cuenca-de-los-r-os-de-piedra-soundtrack' },
    { id: 19, title: 'Love Reptilian People', artist: 'Love Reptilian People', year: '2013', genre: 'Experimental', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/love-reptilian-people' },
    { id: 20, title: 'Psíquicos 24 Horas', artist: 'Psíquicos 24 Horas', year: '2013', genre: 'Experimental', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/ps-quicos-24-horas' },
    { id: 21, title: 'Testigos de Slim', artist: 'Telmex', year: '2014', genre: 'Electronic', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/testigos-de-slim' },
    { id: 22, title: 'Peter Mosca', artist: 'Peter Mosca', year: '2014', genre: 'Electronic', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/peter-mosca' },
    { id: 23, title: 'Bebés de plástico fino', artist: 'El Conjunto Aleluya', year: '2009', genre: 'Experimental', category: 'otros', bandcampUrl: 'https://melvinrecords.bandcamp.com/album/beb-s-de-pl-stico-fino' }
  ]

  const categories = [
    { key: 'todos', label: 'Todos los Releases', count: 23 },
    { key: 'lechones', label: 'Lechones Sangrientos', count: 11 },
    { key: 'colaboraciones', label: 'Colaboraciones', count: 2 },
    { key: 'otros', label: 'Otros Artistas', count: 10 }
  ]

  const filteredReleases = selectedCategory === 'todos' 
    ? releases 
    : releases.filter(release => release.category === selectedCategory)

  return (
    <>
      <Helmet>
        <title>Catálogo Musical | Melvin Records - Música Experimental y Underground México</title>
        <meta name="description" content="Explora 23 releases de música experimental mexicana. Lechones Sangrientos, Visionarios Creativos y más. Laboratorio musical independiente desde Tultitlán, México." />
        <meta name="keywords" content="música experimental México, underground mexicano, Lechones Sangrientos, Melvin Records, música independiente, Tultitlán" />
        <link rel="canonical" href="https://melvinrecords.com/musica" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicPlaylist",
            "name": "Catálogo Musical Melvin Records",
            "description": "Colección completa de 23 releases de música experimental y underground",
            "publisher": {
              "@type": "MusicGroup",
              "name": "Melvin Records"
            },
            "numTracks": 23,
            "genre": ["Experimental", "Electronic", "Ambient", "Noise", "Underground"]
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
                <span className="block text-melvin-text-primary">CATÁLOGO</span>
                <span className="block text-gradient-cyan">MUSICAL</span>
              </h1>
              <p className="text-xl text-melvin-text-secondary mb-8 leading-relaxed">
                23 releases de música experimental, ambient, noise y underground mexicana. 
                Una exploración sonora que conecta laboratorio, calle y memoria urbana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://melvinrecords.bandcamp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Escuchar en Bandcamp
                  <ExternalLink className="ml-2" size={16} />
                </a>
                <Link to="/musica/artistas/lechones-sangrientos" className="btn-secondary">
                  Ver Artista Principal
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
                src="/images/overlapping_vinyl_records_dark_background.jpg"
                alt="Catálogo musical Melvin Records"
                className="w-full h-96 lg:h-[500px] object-cover card"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-melvin-bg-primary/50 to-transparent card" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-y border-melvin-text-secondary/20">
        <div className="section-container">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 font-manrope font-medium uppercase tracking-wider text-sm border transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-melvin-accent-cyan text-melvin-bg-primary border-melvin-accent-cyan'
                    : 'text-melvin-text-secondary border-melvin-text-secondary hover:border-melvin-accent-cyan hover:text-melvin-accent-cyan'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-20">
        <div className="section-container">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredReleases.map((release, index) => (
              <motion.div
                key={release.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-interactive group"
              >
                <div className="aspect-square bg-melvin-bg-secondary mb-4 relative overflow-hidden">
                  <img
                    src="/images/overlapping_vinyl_records_dark_background.jpg"
                    alt={`${release.title} - ${release.artist}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-melvin-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="text-melvin-accent-cyan" size={48} />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-manrope font-medium uppercase tracking-wider text-melvin-accent-cyan bg-melvin-bg-primary/80 px-2 py-1">
                      {release.genre}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-manrope font-semibold text-melvin-text-primary mb-2 group-hover:text-melvin-accent-cyan transition-colors duration-300">
                    {release.title}
                  </h3>
                  
                  <div className="flex items-center text-melvin-text-secondary mb-2">
                    <User size={14} className="mr-2" />
                    <span className="text-sm">{release.artist}</span>
                  </div>
                  
                  <div className="flex items-center text-melvin-text-secondary mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm">{release.year}</span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`${release.bandcampUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-melvin-accent-cyan text-melvin-bg-primary text-center py-2 text-sm font-manrope font-medium uppercase tracking-wider hover:bg-melvin-accent-magenta transition-colors duration-300"
                    >
                      Escuchar
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bandcamp Integration */}
      <section className="py-20 bg-melvin-bg-secondary">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-melvin-text-primary">
              Escucha el <span className="text-gradient-cyan">Catálogo Completo</span>
            </h2>
            <p className="text-xl text-melvin-text-secondary mb-12 max-w-3xl mx-auto">
              Todo nuestro catálogo está disponible en Bandcamp. Apoya directamente 
              a los artistas y disfruta de música experimental mexicana sin límites.
            </p>

            {/* Embedded Bandcamp Player */}
            <div className="max-w-4xl mx-auto mb-8">
              <iframe 
                style={{border: 0, width: '100%', height: '472px'}} 
                src="https://bandcamp.com/EmbeddedPlayer/album=0/size=large/bgcol=0d0d0d/linkcol=00ffff/transparent=true/" 
                seamless
                title="Melvin Records - Bandcamp Player"
              >
                <a href="https://melvinrecords.bandcamp.com/">
                  Melvin Records by Various Artists
                </a>
              </iframe>
            </div>

            <a 
              href="https://melvinrecords.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Visitar Bandcamp Completo
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Musica
