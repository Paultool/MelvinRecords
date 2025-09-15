import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const Audiovisual = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState('todos')
  
  const documentalesData = [
    {
      id: 'cuenca-rios-piedra',
      title: 'La cuenca de los ríos de piedra',
      subtitle: 'Memoria del agua en Ciudad de México',
      year: '2019',
      duration: '82 min',
      type: 'Largometraje documental',
      director: 'Pablo Benjamín Nieto Mercado',
      description: 'Un viaje por la transformación urbana de la Ciudad de México a través de cuatro testimonios de quienes vivieron la desaparición del agua: ríos entubados, lagos desecados y canales que se convirtieron en calles. La película explora cómo la infraestructura urbana transformó el paisaje hídrico de la capital mexicana.',
      image: '/images/lacuenca16.webp',
      videoUrl: 'https://youtu.be/BVo14dGLgjc',
      websiteUrl: 'https://melvinrecords.gt.tc/cuenca/',
      featured: true,
      awards: [
        'Primer lugar Video Documental FINI 2022',
        'Social Impact Award Estados Unidos 2022',
        'Apoyo Música México 2022',
        'Mención Honorífica Festival Miradas Locales 2020',
        'Estímulo FONCA Coinversiones Culturales 2018',
        'Estímulo IMCINE Creadores Cinematográficos 2017'
      ],
      festivals: [
        'DocsMX 2024', 'FINI - UAEH México', 'Cinema Planeta',
        'Festival Latinoamericano Quito', 'FICAA México',
        'Korea International Ethnographic Film Festival',
        'Cinema Urbana Brasil', 'Humano Film Festival Tijuana'
      ],
      presentations: [
        '2024/09/05: Cineclub Micelio, Casa Gallina',
        '2023/12/28: Korea International Ethnographic Film Festival',
        '2023/06/05: IMCINE "3ra Muestra de Cine en Defensa del Territorio y el Agua"',
        '2022/09/07: TourCinemaPlaneta2022',
        '2022/08/17: Cinema Urbana - 4ª Mostra Internacional',
        '2022/04/21: Festival Internacional de la Imagen FINI',
        '2021/12/01: VI Festival de Cine Etnográfico de Ecuador'
      ]
    },
    {
      id: 'atl-inundar',
      title: 'ATL / Inundar la Ciudad',
      subtitle: 'Instalación transmedia',
      year: '2020-2023',
      duration: '45 min + instalación',
      type: 'WebDoc / Instalación',
      director: 'Pablo Nieto Mercado',
      description: 'Profundizamos en la cadena laboral de las compras en línea en el Valle de México, abordando la precariedad laboral, la dependencia tecnológica y la gentrificación. Esta historia sigue a varios personajes cuyas vidas están conectadas por la cadena de trabajo necesaria para que las compras en línea lleguen a su destino.',
      image: '/images/video_art_installation_projections_dark_gallery.jpg',
      videoUrl: 'https://youtu.be/iYk5kNGVMsc',
      featured: false,
      awards: [
        'GANADOR DocuWeb - Encuentro de Imagen MMXX 2020',
        'Doc Society UK/USA',
        'Top Ten Artist Alemania 2021'
      ],
      festivals: [
        'Simultan Festival Rumania', 'AIU Film Festival Kuwait',
        'Steve Aronson International Film Festival USA',
        'PlataformaMX Puebla DocsMX', 'Centro de la Imagen México'
      ],
      presentations: [
        '2024/10/03: Simultan Festival - Object of Desire, Timisoara Rumania',
        '2023/06/19: Inundar la Ciudad @ PlataformaMX Puebla DocsMX',
        '2021/06/01: Concebir, nombrar, decir SPF 2019 - Centro de la imagen',
        '2020/08/20: GANADOR DocuWeb @ Encuentro de Imagen MMXX'
      ]
    },
    {
      id: 'invasion',
      title: 'Invasión',
      subtitle: 'Corto experimental',
      year: '2021',
      duration: '12 min',
      type: 'Cortometraje experimental',
      director: 'Melvin Records',
      description: 'Una exploración visual experimental que reflexiona sobre la invasión tecnológica en los espacios urbanos contemporáneos. La pieza combina elementos de videoarte con narrativa experimental.',
      image: '/images/invasion-min.jpg',
      videoUrl: 'https://youtu.be/FbqHY14n1TI',
      featured: false,
      awards: [
        '2do Lugar Técnicas Alternativas FINI 2025',
        'Finalista FINI 2025',
        'Festival Internacional de la Imagen FINI',
        '24FRAME Future Film Fest Bologna'
      ],
      festivals: [
        'Expanded Cinema Helsinki', 'Festival de Cine Radical Bolivia',
        'International Video Art Forum Arabia Saudita',
        'Kino Club Helsinki', 'Bent and Broken USA'
      ],
      presentations: [
        '2025/04/18: 2do Lugar Técnicas Alternativas @ FINI - UAEH',
        '2025/02/14: Finalista FINI 2025',
        '2024/01/30: Festival de Cine Radical 2024',
        '2023/12/09: Kino Club Helsinki- Expanded Cinema vol.2',
        '2022/07/19: International Video Art Forum'
      ]
    },
    {
      id: 'cibertrip',
      title: 'CiberTrip',
      subtitle: 'Exploración digital contemporánea',
      year: '2022',
      duration: '30 min',
      type: 'Corto documental',
      director: 'Pablo Nieto Mercado',
      description: 'Una exploración audiovisual de la experiencia digital contemporánea, navegando entre realidades virtuales y físicas en el México del siglo XXI. El proyecto documenta cómo la tecnología digital ha transformado nuestra percepción del espacio y el tiempo.',
      image: '/images/video_art_installation_screens_dark_gallery.jpg',
      videoUrl: 'https://youtu.be/7FHsQL3iXVM',
      featured: false,
      awards: [
        'Festival Internacional de Cine de la No-Violencia Activa'
      ],
      festivals: [
        'FICNOVA', 'FECIBA México', 'Ruta Maya Film Festival',
        'RetoDocsMX 2020'
      ]
    },
    {
      id: 'cuerpos-agua',
      title: 'Cuerpos de agua',
      subtitle: 'Reflexión visual microscópica',
      year: '2023',
      duration: '12 min',
      type: 'Cortometraje experimental',
      director: 'Pablo Benjamín Nieto Mercado',
      description: 'Una reflexión visual sobre la transformación de la vida y la energía a través de los órganos, usando el agua como vehículo narrativo del ciclo microscópico de la vida. La pieza explora la conexión entre los cuerpos humanos y los ciclos naturales del agua.',
      image: '/images/immersive_van_gogh_starry_night_art_projection_installation.jpg',
      videoUrl: 'https://youtu.be/Osq_goIFoak',
      websiteUrl: 'http://melvinrecords.gt.tc.mx/cuerpos/',
      featured: false
    },
    {
      id: 'cuerno-chivo',
      title: 'Cuerno de Chivo',
      subtitle: 'Documental de grindcore underground',
      year: '2023',
      duration: '45 min',
      type: 'Documental musical',
      director: 'Pablo Nieto Mercado',
      description: '"Cuerno de Chivo" es una banda de grindcore de Tultitlán, Estado de México, que lleva 10 años sacudiendo escenarios con su implacable crítica al sistema. Este documental invita a los espectadores al mundo crudo y underground de la banda, siguiendo su viaje hacia el lanzamiento de su álbum debut.',
      image: '/images/vintage_experimental_music_studio_industrial.jpg',
      videoUrl: 'https://youtu.be/An1ny8_WiOo',
      featured: false
    },
   
    {
      id: 'la-resistencia',
      title: 'La Resistencia',
      subtitle: 'Largometraje',
      year: '2023',
      duration: '90 min',
      type: 'audiovisual',
      subtype: 'feature_film',
      director: 'Pablo Nieto',
      description: 'La Resistencia es un largometraje en progreso que explora temas de resistencia cultural y creativa en el contexto de Hacklab La Resistencia, un espacio colaborativo en México. El proyecto documenta la intersección de arte, música y activismo, destacando voces emergentes y desafíos sociales. Como trabajo en progreso, se centra en capturar momentos auténticos de creación y lucha colectiva.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/sPylgIk_aEc',
      featured: true
    },
    {
      id: 'no-more-fucking-fans',
      title: 'No More Fucking Fans',
      subtitle: 'Documental experimental',
      year: '2012',
      duration: '90 min',
      type: 'audiovisual',
      subtype: 'documentary',
      director: 'Pablo Nieto',
      description: 'Documental experimental que critica la cultura de fans y celebridades, utilizando footage encontrado y manipulaciones para cuestionar la adoración ciega.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://vimeo.com/37078160',
      featured: false
    },
    {
      id: 'obsolescencia',
      title: 'Obsolescencia',
      subtitle: 'Documental sobre consumo tecnológico',
      year: '2014',
      duration: '60 min',
      type: 'Documental',
      director: 'Etnoscopio',
      description: 'Documental sobre obsolescencia programada, con enfoque en música y sonido directo, cuestionando el ciclo de consumo tecnológico y su impacto ambiental.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://vimeo.com/142084591',
      featured: false
    },
    {
      id: 'penoneros',
      title: 'Peñoneros',
      subtitle: 'Corto documental urbano',
      year: '2015',
      duration: '25 min',
      type: 'Corto Documental',
      director: 'Pablo Nieto Mercado',
      description: 'Corto documental sobre los habitantes del Peñón de los Baños, capturando su vida diaria y conexión con el paisaje urbano cambiante de la Ciudad de México.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/9D0SzDZabX8',
      featured: false
    },
    {
      id: 'el-del-otro-lado-del-puente',
      title: 'Él del otro lado del puente',
      subtitle: 'Corto documental social',
      year: '2018',
      duration: '20 min',
      type: 'Corto documental',
      director: 'Pablo Nieto Mercado',
      description: 'Corto documental que sigue la vida de un individuo al otro lado del puente, explorando temas de migración, identidad y barreras sociales en el contexto urbano de México.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/RtNkZU1Bndk',
      featured: false
    }
  ]
  
  const experimentales = [
    {
      id: 'corpo',
      title: 'Corpo',
      subtitle: 'Corto experimental',
      year: '2018',
      duration: '8 min',
      type: 'Corto experimental',
      director: 'Pablo Nieto Mercado',
      description: '"Corpo" es un corto experimental que explora el cuerpo humano a través de visuales abstractos y manipulaciones digitales, cuestionando la percepción corporal en la era tecnológica. Utiliza técnicas de videoarte para crear una narrativa introspectiva y sensorial.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/ui3mb7KN5Sg',
      featured: false
    },
    {
      id: 'limon',
      title: 'Limón',
      subtitle: 'Video experimental',
      year: '2014',
      duration: '1 min',
      type: 'Video experimental',
      director: 'Pablo Nieto Mercado',
      description: 'LIMÓN, que significa "colectivo" o "pueblo unido", es el aroma de las lágrimas que derramó Bhudevi, diosa hindú de la Esperanza, para que al percibir este perfume la humanidad recordará la esperanza de un futuro mejor.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/nTJ3SidBzVo',
      featured: false,
      awards: [
        '60 Second Intl. Film Festival, Pakistan 2020',
        'Make Art Not War Teaser Future Film Festival, California 2020',
        'Short Food Movie Expo - Milan Italia, 2015'
      ]
    },
    {
      id: 'luna-y-sol',
      title: 'Luna y Sol',
      subtitle: 'Video experimental',
      year: '2014',
      duration: '5 min',
      type: 'Video experimental',
      director: 'Pablo Nieto Mercado',
      description: 'Video experimental que contrasta luna y sol a través de visuales poéticos, explorando ciclos diurnos y nocturnos con elementos simbólicos y sonidos ambientales.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/dfZEgFT7GE4',
      featured: false
    },
    {
      id: 'amor-en-tiempos-del-emoticon',
      title: 'Amor en tiempos del emoticon',
      subtitle: 'Video experimental',
      year: '2014',
      duration: '7 min',
      type: 'Video experimental',
      director: 'Pablo Nieto Mercado',
      description: 'Pieza de videoarte que satiriza el amor en la era digital, utilizando emoticones y interfaces para explorar la desconexión emocional.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/pvaYKwxQ84g',
      featured: false
    },
    {
      id: 'carcamo-de-dolores',
      title: 'Cárcamo de Dolores',
      subtitle: 'Video experimental',
      year: '2015',
      duration: '12 min',
      type: 'Video experimental',
      director: 'Pablo Nieto Mercado',
      description: 'Video experimental que explora el sonido del vacío en el Cárcamo de Dolores, un tanque histórico de agua, cuestionando la ausencia y el eco mediante visuales abstractos y audio inmersivo. "¿Como suena el vacío de un tanque que antes almaceno cincuenta millones de litros de agua?"',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/J7h9WAI_xso',
      featured: false
    },
    {
      id: 'laika',
      title: 'Laika',
      subtitle: 'Video experimental',
      year: '2015',
      duration: '6 min',
      type: 'Video experimental',
      director: 'Pablo Nieto Mercado',
      description: 'Video experimental inspirado en Laika, la perra espacial, explorando temas de sacrificio y exploración a través de animaciones y sonidos cósmicos.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://pablonieto.jimdofree.com/2016/11/26/laika/',
      featured: false
    }
  ]
  
  const videocasts = [
    {
      id: 'estilo-vida-graff',
      title: 'Estilo de Vida Graff',
      subtitle: 'Videocast de arte urbano',
      year: '2024',
      duration: 'Serie de episodios',
      type: 'Videocast',
      director: 'Sid Bidek & Pablo Nieto',
      description: '"Estilo de Vida Graff" es un videocast colaborativo que nace de Hacklab La Resistencia, explorando la cultura del graffiti y mostrando el talento emergente del Estado de México. Presentado por Sid Bidek, ofrece una mirada íntima a las vidas y obras de los artistas urbanos.',
      image: '/images/overlapping_vinyl_records_dark_background.jpg',
      videoUrl: 'https://youtu.be/k64wf2pGVvo',
      featured: false
    }
  ]
  
  const promocionales = [
    {
      id: 'promocionales-hacklab',
      title: 'Vídeos Promocionales Hacklab',
      subtitle: 'Cortometrajes de IA',
      year: '2024',
      duration: 'Serie de videos cortos',
      type: 'Videos promocionales',
      director: 'Pablo Nieto Mercado',
      description: 'Esta serie de vídeos promocionales de Hacklab La Resistencia está creada utilizando diversas herramientas de inteligencia artificial. Los videos destacan la venta de pulque y otros eventos, basándose en referencias culturales de películas icónicas como Star Wars, Westerns, Jurassic Park.',
      image: '/images/electronics_hacklab_workbench_tools.jpg',
      videoUrl: 'https://youtu.be/gQZByhKVtLU',
      featured: false,
      technologies: ['Inteligencia Artificial', 'Machine Learning', 'Video Generativo']
    }
  ]
  
  const videoclips = [
    {
      id: 'schefflera-elegantissima',
      title: 'Schefflera Elegantissima',
      subtitle: 'Videoclip experimental botánico',
      year: '2017',
      duration: '4 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip experimental que visualiza la planta Schefflera Elegantissima a través de animaciones y efectos visuales, explorando temas de crecimiento orgánico y artificialidad. Integra elementos de IA y stop-motion para una narrativa poética.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://pablonieto.jimdofree.com/2017/03/17/schefflera-elegantissima-i%E1%B9%A3%E1%BB%8Dn/',
      featured: false
    },
    {
      id: 'burger-time',
      title: 'Burger Time',
      subtitle: 'Videoclip crítica social',
      year: '2017',
      duration: '3 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip que combina imágenes de comida rápida con crítica social, utilizando el tema de "Burger Time" para explorar el consumismo y la cultura fast-food. Presenta visuales dinámicos y ritmos electrónicos.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/cD0XBtF_QK8',
      featured: false
    },
    {
      id: 'el-canto-del-francotirador',
      title: 'El canto del francotirador',
      subtitle: 'Videoclip noise/rap',
      year: '2017',
      duration: '4 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip que narra la perspectiva de un francotirador a través de letras intensas y visuales dramáticos, fusionando elementos de noise y rap para transmitir tensión y reflexión sobre la violencia.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/hQWWtT_LSzI',
      featured: false
    },
    {
      id: 'n-s',
      title: 'N/S',
      subtitle: 'Videoclip abstracto',
      year: '2017',
      duration: '3 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip abstracto que juega con conceptos de norte/sur, explorando divisiones geográficas y culturales mediante visuales contrastantes y sonido experimental.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://pablonieto.jimdofree.com/2017/02/16/n-s/',
      featured: false
    },
    {
      id: 'garibaldi-express',
      title: 'Garibaldi express',
      subtitle: 'Videoclip urbano',
      year: '2017',
      duration: '3 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip que captura la energía del transporte público en Garibaldi, México, con ritmos urbanos y visuales caóticos que reflejan la vida cotidiana en la ciudad.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://pablonieto.jimdofree.com/2017/01/21/garibaldi-express/',
      featured: false
    },
    {
      id: 'ritorno-inferno',
      title: 'Ritorno ++Inferno',
      subtitle: 'Videoclip glitch',
      year: '2017',
      duration: '4 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip que explora temas de retorno e infierno personal, utilizando animaciones glitch y sonidos intensos para crear una atmósfera de caos y redención.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/oeQzEjX7AEs',
      featured: false
    },
    {
      id: 'peter-mosca-video',
      title: 'Peter Mosca',
      subtitle: 'Videoclip experimental',
      year: '2014',
      duration: '5 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip para Peter Mosca, combinando visuales abstractos con música experimental para narrar una historia de transformación y glitch.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/igImkhx6vDc?si=YQF1jZg7--SZ4I0k',
      featured: false
    },
    {
      id: 'nene-duro',
      title: 'Nene duro',
      subtitle: 'Videoclip urbano',
      year: '2013',
      duration: '3 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip que presenta un nene duro en escenarios urbanos, con ritmos agresivos y visuales crudos para transmitir resiliencia infantil.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://tornfleshrecords3.bandcamp.com/track/pene-duro',
      featured: false
    },
    {
      id: 'loco-sol',
      title: 'Loco sol',
      subtitle: 'Videoclip experimental',
      year: '2013',
      duration: '4 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip experimental que juega con el concepto de "loco sol", fusionando imágenes solares con locura, utilizando efectos visuales y sonido glitch.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/rcwkpKxxijA',
      featured: false
    },
    {
      id: 'horys',
      title: 'Horys',
      subtitle: 'Videoclip electrónico',
      year: '2013',
      duration: '3 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip para Horys, explorando horizontes y visiones a través de paisajes abstractos y música electrónica.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/sie7Y_eoIaM',
      featured: false
    },
    {
      id: 'clagec',
      title: 'Clagec',
      subtitle: 'Videoclip noise',
      year: '2013',
      duration: '3 min',
      type: 'Videoclip',
      director: 'Pablo Nieto Mercado',
      description: 'Videoclip que combina elementos glitch y noise para narrar una historia de clagec, posiblemente un acrónimo o concepto inventado, con visuales intensos.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/_nAyB4x0p_Y',
      featured: false
    },
    {
      id: 'white-weeding',
      title: 'White Weeding',
      subtitle: 'Videoclip',
      year: '2012',
      duration: '10 min',
      type: 'audiovisual',
      subtype: 'videoclip',
      director: 'Pablo Nieto',
      description: 'Videoclip que juega con "white wedding" (boda blanca) pero con un twist de "weeding" (deshierbar), explorando pureza y naturaleza mediante visuales surrealistas.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://vimeo.com/426556950?share=copy',
      featured: false
    },
    {
      id: 'cual-dolor',
      title: '¿Cual dolor?',
      subtitle: 'Videoclip',
      year: '2011',
      duration: '10 min',
      type: 'audiovisual',
      subtype: 'videoclip',
      director: 'Pablo Nieto',
      description: 'Videoclip que cuestiona el dolor a través de visuales intensos y letras introspectivas, fusionando arte experimental con música noise.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/880xiAVrD3g',
      featured: false
    },
    {
      id: 'tom-melome',
      title: 'Tom Melome',
      subtitle: 'Videoclip',
      year: '2011',
      duration: '10 min',
      type: 'audiovisual',
      subtype: 'videoclip',
      director: 'Pablo Nieto',
      description: 'Videoclip para Tom Melome, explorando temas culinarios y sensoriales con visuales apetitosos y sonidos rítmicos.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/f3N2vR6VzBE',
      featured: false
    },
    {
      id: 'ask-shane-miss-universo-2010-mexico-the-dark-side',
      title: 'Ask Shane miss universo 2010 México the dark side',
      subtitle: 'Videoclip',
      year: '2010',
      duration: '10 min',
      type: 'audiovisual',
      subtype: 'videoclip',
      director: 'Pablo Nieto',
      description: 'Videoclip que revela el lado oscuro de Miss Universo 2010 en México, satirizando la belleza y el espectáculo mediante visuales críticos.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: null,
      featured: false
    },
    {
      id: 'david-lynch-lunch-kaseum',
      title: 'David Lynch Lunch kaseum',
      subtitle: 'Videoclip',
      year: '2009',
      duration: '10 min',
      type: 'audiovisual',
      subtype: 'videoclip',
      director: 'Pablo Nieto',
      description: 'Videoclip inspirado en David Lynch, combinando almuerzo y kaseum en un contexto surrealista con visuales perturbadores y noise.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/sRrY-IjRSxI',
      featured: false
    },
    {
      id: 'viaje-en-el-agua',
      title: 'Viaje en el agua',
      subtitle: 'Videoclip',
      year: '2009',
      duration: '10 min',
      type: 'audiovisual',
      subtype: 'videoclip',
      director: 'Pablo Nieto',
      description: 'Videoclip que narra un viaje a través del agua, explorando fluidos y transformaciones con visuales acuáticos y sonidos inmersivos.',
      image: '/images/video_art_installation_dark_gallery_contemporary_exhibition.jpg',
      videoUrl: 'https://youtu.be/OKKSrhfzrgc',
      featured: false
    }
  ]
  
  const categories = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'documentales', label: 'Documentales' },
    { id: 'experimentales', label: 'Videos Experimentales' },
    { id: 'videocasts', label: 'Videocasts' },
    { id: 'videoclips', label: 'Videoclips' },
    { id: 'promocionales', label: 'Videos Promocionales' }
  ]
  
  const getFilteredProjects = () => {
    switch (selectedCategory) {
      case 'documentales':
        return documentalesData
      case 'experimentales':
        return experimentales
      case 'videocasts':
        return videocasts
      case 'videoclips':
        return videoclips
      case 'promocionales':
        return promocionales
      default:
        return [...documentalesData, ...experimentales, ...videocasts, ...videoclips, ...promocionales]
    }
  }
  
  const featuredProject = documentalesData.find(doc => doc.featured) || documentalesData[0]
  const allProjects = getFilteredProjects()

  return (
    <>
      <Helmet>
        <title>Catálogo Audiovisual | Documentales y Proyectos Experimentales | Melvin Records</title>
        <meta name="description" content="Catálogo completo de producción audiovisual Melvin Records: documentales premiados como 'La cuenca de los ríos de piedra', cortometrajes experimentales, videocasts y series como Hacklab La Resistencia." />
        <meta name="keywords" content="documentales CDMX, video experimental México, Pablo Nieto Mercado, Melvin Records audiovisual, cortometrajes independientes, videocasts alternativos, Hacklab La Resistencia" />
        <link rel="canonical" href="https://melvinrecords.gt.tc/audiovisual" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWorkSeries",
            "name": "Catálogo Audiovisual Melvin Records",
            "description": "Documentales de memoria urbana, cortometrajes experimentales, videocasts y series documentales",
            "creator": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "about": ["Documentales", "Video Experimental", "Memoria Urbana", "Ciudad de México", "Arte Digital"],
            "numberOfEpisodes": allProjects.length
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
                <span className="block text-melvin-text-primary">CATÁLOGO</span>
                <span className="block text-gradient-cyan">AUDIOVISUAL</span>
              </h1>
              <p className="text-xl text-melvin-text-secondary max-w-4xl mx-auto leading-relaxed">
                Producción audiovisual completa de Melvin Records: documentales premiados, 
                experimentación visual, videocasts alternativos y series documentales que 
                exploran la memoria urbana, tecnología y cultura contemporánea.
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-melvin-accent-cyan text-melvin-bg-primary font-semibold'
                    : 'bg-melvin-bg-secondary text-melvin-text-secondary hover:bg-melvin-text-secondary/10 hover:text-melvin-accent-cyan'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Featured Project */}
          {selectedCategory === 'todos' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-20"
            >
              <ProjectCard
                {...featuredProject}
                imageUrl={featuredProject.image}
                brief={featuredProject.subtitle || featuredProject.description?.slice(0, 80) || ''}
                onClick={() => setSelectedProject(featuredProject)}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
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
              <span className="text-gradient-cyan">
                {selectedCategory === 'todos' ? 'Todos los' : categories.find(c => c.id === selectedCategory)?.label}
              </span> Proyectos
            </h2>
            <p className="text-xl text-melvin-text-secondary max-w-3xl mx-auto">
              {selectedCategory === 'documentales' && 'Exploraciones documentales de la memoria urbana y transformación social en México.'}
              {selectedCategory === 'experimentales' && 'Videos experimentales que exploran percepción, cuerpo, naturaleza y tecnología digital.'}
              {selectedCategory === 'videocasts' && 'Series de videocasts que documentan procesos creativos y culturales contemporáneos.'}
              {selectedCategory === 'videoclips' && 'Videoclips experimentales que fusionan música, arte visual y narrativa innovadora.'}
              {selectedCategory === 'promocionales' && 'Videos promocionales creados con tecnologías de inteligencia artificial.'}
              {selectedCategory === 'todos' && 'Catálogo completo de producciones audiovisuales ordenadas cronológicamente.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects
              .filter(project => selectedCategory === 'todos' ? !project.featured : true)
              .sort((a, b) => parseInt(b.year) - parseInt(a.year))
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  imageUrl={project.image}
                  brief={project.subtitle || project.description?.slice(0, 80) || ''}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-melvin-text-secondary/20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-manrope font-bold text-melvin-text-primary mb-12">
              Impacto y Reconocimiento
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-melvin-accent-cyan mb-2">
                  40+
                </div>
                <div className="text-melvin-text-secondary">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-melvin-accent-cyan mb-2">
                  20+
                </div>
                <div className="text-melvin-text-secondary">Premios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-melvin-accent-cyan mb-2">
                  16
                </div>
                <div className="text-melvin-text-secondary">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-melvin-accent-cyan mb-2">
                  60+
                </div>
                <div className="text-melvin-text-secondary">Festivales</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || {}}
      />
    </>
  )
}

export default Audiovisual