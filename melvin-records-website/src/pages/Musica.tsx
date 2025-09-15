import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ExternalLink, Play, Calendar, User } from 'lucide-react'
import { useState } from 'react'

const Musica = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const releases = [
    // Lechones Sangrientos 
    { 
      id: 1, 
      title: 'Oculum Lentum Nobile', 
      artist: 'Lechones Sangrientos', 
      year: '2015', 
      genre: 'Experimental', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/oculum-lentum-nobile',
      image: 'https://f4.bcbits.com/img/a2576313944_16.jpg',
      release_date: 'June 16, 2015',
      num_tracks: 4,
      tracklist: ["Testudine - 04:44", "Cochlea - 05:30", "Falko - 04:18", "Delphinum - 03:50"],
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 2, 
      title: 'Vitrinas-sanirtiV', 
      artist: 'Lechones Sangrientos', 
      year: '2018', 
      genre: 'Experimental', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/vitrinas-sanirtiv',
      image: 'https://f4.bcbits.com/img/a3851156877_2.jpg',
      release_date: null,
      num_tracks: 11,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 3, 
      title: 'Canciones para perros que viajan en metro', 
      artist: 'Lechones Sangrientos', 
      year: '2015', 
      genre: 'Experimental', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/canciones-para-perros-que-viajan-en-metro',
      image: "https://f4.bcbits.com/img/a3496777565_2.jpg",
      release_date: null,
      num_tracks: 13,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 4, 
      title: 'La Quema', 
      artist: 'Lechones Sangrientos', 
      year: '2014', 
      genre: 'Noise', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/la-quema',
      image: 'https://f4.bcbits.com/img/a2540180764_16.jpg',
      release_date: 'December 12, 2014',
      num_tracks: 3,
      tracklist: ["Gaufridi - 14:27", "Girard - 14:07", "Abuso - 05:35"],
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 5, 
      title: 'Crónicas de un hombre barbado', 
      artist: 'Lechones Sangrientos', 
      year: '2014', 
      genre: 'Experimental', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/cr-nicas-de-un-hombre-barbado',
      image: 'https://f4.bcbits.com/img/a0944241380_16.jpg',
      release_date: 'September 9, 2014',
      num_tracks: 6,
      tracklist: [" - ", " - ", "Todo - 09:16", " - ", "Lavadora - 02:28", "Sofia - 01:35"],
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 6, 
      title: 'Te quiero Mucho', 
      artist: 'Lechones Sangrientos', 
      year: '2012', 
      genre: 'Experimental', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/te-quiero-mucho',
      image: 'https://f4.bcbits.com/img/a3965638734_10.jpg',
      release_date: null,
      num_tracks: 14,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 7, 
      title: 'Piporama Live in Puebla', 
      artist: 'Lechones Sangrientos', 
      year: '2011', 
      genre: 'Live Recording', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/piporama-live-in-puebla',
      image: 'https://f4.bcbits.com/img/a4053470695_16.jpg',
      release_date: 'November 11, 2011',
      num_tracks: 1,  // Nota: Probablemente hay más tracks, pero basado en datos disponibles
      tracklist: [],
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 8, 
      title: 'Jamon Sesion II', 
      artist: 'Lechones Sangrientos', 
      year: '2011', 
      genre: 'Session', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/jamon-sesion-ii',
      image: 'https://f4.bcbits.com/img/a3162661034_10.jpg',
      release_date: null,
      num_tracks: 2,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 9, 
      title: 'Kaseum', 
      artist: 'Lechones Sangrientos', 
      year: '2010', 
      genre: 'Electronic', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/kaseum',
      image: 'https://f4.bcbits.com/img/a3718774084_10.jpg',
      release_date: null,
      num_tracks: 11,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 10, 
      title: 'Jamon Session', 
      artist: 'Lechones Sangrientos', 
      year: '2009', 
      genre: 'Session', 
      category: 'lechones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/jamon-session',
      image: 'https://f4.bcbits.com/img/a2649706857_2.jpg',
      release_date: null,
      num_tracks: 6,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 11, 
      title: 'Desayuno con Satanás', 
      artist: 'Lechones Sangrientos', 
      year: '2009', 
      genre: 'Noise', 
      category: 'lechones', 
      bandcampUrl: 'https://archive.org/details/TFR61-LechonesSangrientos-DesayunoConSatanas',
      image: 'https://ia600206.us.archive.org/24/items/TFR61-LechonesSangrientos-DesayunoConSatanas/DesayunoConSatanas-GreyCover.png',
      release_date: null,
      num_tracks: 14,
      tracklist: [],
      tags: [],
      description: null
    },
    // Colaboraciones Lechones
    { 
      id: 12, 
      title: 'Diploma', 
      artist: 'Lechones Sangrientos & Vulgar Disease', 
      year: '2013', 
      genre: 'Collaboration', 
      category: 'colaboraciones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/diploma',
      image: 'https://f4.bcbits.com/img/a2792261751_16.jpg',
      release_date: 'March 13, 2013',
      num_tracks: 8,
      tracklist: [],  // No disponible
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 13, 
      title: 'Vida Yonqui', 
      artist: 'Lechones Sangrientos & Vulgar Disease', 
      year: '2009', 
      genre: 'Collaboration', 
      category: 'colaboraciones', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/vida-yonqui',
      image: 'https://f4.bcbits.com/img/a1066524321_16.jpg',
      release_date: 'September 9, 2009',
      num_tracks: 6,
      tracklist: [],  // No disponible
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    // Otros artistas
    { 
      id: 14, 
      title: 'Visionarios Creativos Live Hacklab La Resistencia', 
      artist: 'Visionarios Creativos', 
      year: '2024', 
      genre: 'Live Recording', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/visionarios-creativos-live-hacklab-la-resistencia',
      image: 'https://f4.bcbits.com/img/a4112289029_16.jpg',
      release_date: 'October 4, 2024',
      num_tracks: 4,
      tracklist: ["Maldad - 04:37", "Agua - 03:29", "Raices - 03:37", ""],
      tags: [],
      description: '🔥 ¡Nace una visión, se forja la resistencia! 🔥  En un rincón rebelde de la ciudad, Hacklab La Resistencia, un espacio donde las ideas y la música colisionan con el futuro, se cruzaron las trayectorias de tres almas visionarias. 🌌 Sid Bidek, con su voz imparable y afilada como una tormenta; Ivan Mattus, quien transforma cada nota en un viaje a lo profundo del alma con su guitarra; y Mauricio Valencia, llevando el pulso del corazón cubano en su cajón. 🌪️🎸🥁  Así nació Visionarios Creativos, un proyecto que rompe barreras, que une lo inesperado y lo rebelde. En ese mismo espacio, donde la resistencia no es solo un nombre, sino una forma de vida, se gestó esta fusión de ritmos y palabras. Visionarios Creativos no es solo música, es el eco de quienes se atreven a soñar más allá del presente.  Este es el lanzamiento de su álbum en vivo, un testimonio de energía pura, donde cada acorde y cada verso habla de lucha, de resistencia, y de visión. 🎶🔥  Revive este show explosivo y déjate llevar por el poder de sus primeros temas… antes que nadie. Y pronto, el álbum de estudio con aún más material para sacudir tus sentidos. 🔥🎤'
    },
    { 
      id: 15, 
      title: 'Los Cuatro Rumbos', 
      artist: 'Tonathiu De La Cruz Barajas', 
      year: '2024', 
      genre: 'Trova', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/los-cuatro-rumbos',
      image: 'https://f4.bcbits.com/img/a3725218193_10.jpg',
      release_date: null,
      num_tracks: 5,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 16, 
      title: 'Chantaje Emocional', 
      artist: 'The Foursome Rap', 
      year: '2024', 
      genre: 'Hip-Hop', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/chantaje-emocional',
      image: 'https://f4.bcbits.com/img/a0819134996_10.jpg',
      release_date: null,
      num_tracks: 8,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 17, 
      title: 'RRR RuidoRimaRomance', 
      artist: 'RuidoRimaRomance', 
      year: '2021', 
      genre: 'Experimental Hip-Hop', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/rrr',
      image: 'https://f4.bcbits.com/img/a3875280618_16.jpg',
      release_date: 'March 19, 2021',
      num_tracks: 9,
      tracklist: [],  // No disponible
      tags: [],
      description: '¿Aburrido de escuchar siempre la misma melcocha? Melvin Records PRESENTA RRR RuidoRimaRomance Para que se te revuelvan las tripas Álbum compilado con música underground de los siguientes artistas de Kenya y México:'
    },
    { 
      id: 18, 
      title: 'La cuenca de los ríos de piedra', 
      artist: 'Various Artists', 
      year: '2020', 
      genre: 'Soundtrack', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/la-cuenca-de-los-r-os-de-piedra-soundtrack',
      image: 'https://f4.bcbits.com/img/a1220984975_10.jpg',
      release_date: null,
      num_tracks: 14,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 19, 
      title: 'Love Reptilian People', 
      artist: 'Love Reptilian People', 
      year: '2013', 
      genre: 'Experimental', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/love-reptilian-people',
      image: 'https://f4.bcbits.com/img/a0534770717_16.jpg',
      release_date: 'June 6, 2013',
      num_tracks: 4,
      tracklist: ["Horyss - 03:34", "Maranoous - 08:10", "Clagec - 03:45", "Palmira - 04:09"],
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 20, 
      title: 'Psíquicos 24 Horas', 
      artist: 'Psíquicos 24 Horas', 
      year: '2013', 
      genre: 'Experimental', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/ps-quicos-24-horas',
      image: 'https://f4.bcbits.com/img/a1151076073_10.jpg',
      release_date: null,
      num_tracks: 6,
      tracklist: [],
      tags: [],
      description: null
    },
    { 
      id: 21, 
      title: 'Testigos de Slim', 
      artist: 'Telmex', 
      year: '2014', 
      genre: 'Electronic', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/testigos-de-slim',
      image: 'https://f4.bcbits.com/img/a0152384133_16.jpg',
      release_date: 'April 4, 2014',
      num_tracks: 9,
      tracklist: ["5564-6298 - 03:40", "5884-3140 - 06:30", "5636-0405 - 05:59", "5080-9055 - 04:17", "5515-2013 - 02:55", "5166-3030 - 05:36", "5728-9928 - 03:11", "5123-5456 - 06:13", "5000-6660 - 03:30"],
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 22, 
      title: 'Peter Mosca', 
      artist: 'Peter Mosca', 
      year: '2014', 
      genre: 'Electronic', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/peter-mosca',
      image: 'https://f4.bcbits.com/img/0024154355_16.jpg',
      release_date: null,
      num_tracks: 7,
      tracklist: [],
      tags: [],
      description: 'Somos un laboratorio abierto y en continuo movimiento, orientado al desarrollo de herramientas, gestión y producción de contenidos digitales, articulado sobre tres líneas de trabajo: producción multimedia, formación y creación de contenidos. Donde mezclamos distintas disciplinas y medios para la generación de proyectos partiendo de experimentación e investigación. melvinrecords.com.mx'
    },
    { 
      id: 23, 
      title: 'Bebés de plástico fino', 
      artist: 'El Conjunto Aleluya', 
      year: '2009', 
      genre: 'Experimental', 
      category: 'otros', 
      bandcampUrl: 'https://melvinrecords.bandcamp.com/album/beb-s-de-pl-stico-fino',
      image: 'https://f4.bcbits.com/img/a1523521424_10.jpg',
      release_date: null,
      num_tracks: 3,
      tracklist: [],
      tags: [],
      description: null
    }
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
        <link rel="canonical" href="https://melvinrecords.gt.tc/" />
        
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
                    src={release.image || "/images/overlapping_vinyl_records_dark_background.jpg"}
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
                    <span className="text-sm">{release.release_date || release.year}</span>
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