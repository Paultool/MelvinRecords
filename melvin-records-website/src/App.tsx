import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Musica from './pages/Musica'
import Audiovisual from './pages/Audiovisual'
import ProyectosArtisticos from './pages/ProyectosArtisticos'
import Hacklab from './pages/Hacklab'
import Educacion from './pages/Educacion'
import NetArt from './pages/NetArt'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

// Sub-pages que existen
import Cibertrip from './pages/proyectos/Cibertrip'
import Invasion from './pages/proyectos/Invasion'
import CuerposDeAgua from './pages/proyectos/CuerposDeAgua'
import LaCuencaDeLoRiosDePiedra from './pages/proyectos/LaCuencaDeLoRiosDePiedra'

function App() {
  return (
    <div className="min-h-screen bg-melvin-bg-primary text-melvin-text-primary">
      <ScrollToTop />
      <Navigation />
      
      <main className="pt-20 lg:pt-24">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/audiovisual" element={<Audiovisual />} />
          <Route path="/proyectos-artisticos" element={<ProyectosArtisticos />} />
          <Route path="/proyectos" element={<ProyectosArtisticos />} />
          <Route path="/hacklab" element={<Hacklab />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/net-art" element={<NetArt />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />

      
          {/* Art Project Pages */}
          <Route path="/proyectos/invasion" element={<Invasion />} />
          <Route path="/proyectos/cuerpos-de-agua" element={<CuerposDeAgua />} />
          <Route path="/proyectos/la-cuenca-de-los-rios-de-piedra" element={<LaCuencaDeLoRiosDePiedra />} />

          
          {/* Alternative routes for backwards compatibility */}
          <Route path="/proyectos-artisticos/invasion" element={<Invasion />} />
          <Route path="/proyectos-artisticos/cuerpos-de-agua" element={<CuerposDeAgua />} />
          <Route path="/proyectos-artisticos/la-cuenca-de-los-rios-de-piedra" element={<LaCuencaDeLoRiosDePiedra />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
