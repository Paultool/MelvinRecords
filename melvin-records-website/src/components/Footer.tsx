import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Proyectos',
      links: [
        { href: '/musica', label: 'Catálogo Musical' },
        { href: '/audiovisual/documentales', label: 'Documentales' },
        { href: '/proyectos-artisticos', label: 'Instalaciones' },
        { href: '/net-art', label: 'Net Art' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { href: '/servicios/produccion-musical', label: 'Producción Musical' },
        { href: '/servicios/postproduccion', label: 'Postproducción' },
        { href: '/educacion/cursos', label: 'Cursos' },
        { href: '/hacklab', label: 'Hacklab La Resistencia' },
      ],
    },
    {
      title: 'Comunidad',
      links: [
        { href: 'https://melvinrecords.bandcamp.com/', label: 'Bandcamp', external: true },
        { href: 'https://soundcloud.com/melvinrecords', label: 'SoundCloud', external: true },
        { href: 'https://www.instagram.com/melvinrecords/', label: 'Instagram', external: true },
        { href: '/contacto', label: 'Contacto' },
      ],
    },
  ]

  return (
    <footer className="bg-melvin-bg-secondary border-t border-melvin-text-secondary/20 mt-32">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-manrope font-bold">
                <span className="text-gradient-cyan">MELVIN</span>
                <span className="text-melvin-text-primary ml-2">RECORDS</span>
              </span>
            </Link>
            <p className="text-melvin-text-secondary mb-6 leading-relaxed">
              Laboratorio experimental multidisciplinario orientado al desarrollo de herramientas, 
              gestión y producción musical y audiovisual.
            </p>
            <div className="text-sm text-melvin-text-secondary">
              <p>Tultitlán de Mariano Escobedo</p>
              <p>Estado de México, México</p>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-melvin-text-primary font-manrope font-semibold mb-6 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-melvin-text-secondary hover:text-melvin-accent-cyan transition-colors duration-300 flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-melvin-text-secondary hover:text-melvin-accent-cyan transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-melvin-text-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-melvin-text-secondary text-sm">
            © {currentYear} Melvin Records. Laboratorio experimental en continuo movimiento.
          </div>
          <div className="flex items-center gap-6 text-sm text-melvin-text-secondary">
            <Link to="/privacidad" className="hover:text-melvin-accent-cyan transition-colors duration-300">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-melvin-accent-cyan transition-colors duration-300">
              Términos
            </Link>
            <a
              href="/sitemap.xml"
              className="hover:text-melvin-accent-cyan transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
