import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  
  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/musica', label: 'Música' },
    {
      label: 'Proyectos',
      dropdown: [
        { href: '/audiovisual', label: 'Audiovisual' },
        { href: '/proyectos-artisticos', label: 'Arte Digital' },
        { href: '/net-art', label: 'Net Art' },
      ]
    },
    {
      label: 'Laboratorios',
      dropdown: [
        { href: '/hacklab', label: 'Hacklab La Resistencia' },
        { href: '/educacion', label: 'Cursos y Talleres' },
      ]
    },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }
  
  const isDropdownActive = (items: { href: string }[]) => {
    return items.some(item => isActive(item.href))
  }
  
  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null)
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-dark' : 'bg-transparent'
        }`}
      >
        <nav className="section-container py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl lg:text-3xl font-manrope font-bold">
              <span className="text-gradient-cyan">MELVIN</span>
              <span className="text-melvin-text-primary ml-2">RECORDS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                if ('dropdown' in item) {
                  return (
                    <div key={item.label} className="relative group">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDropdownToggle(item.label)
                        }}
                        className={`flex items-center space-x-1 transition-colors duration-300 ${
                          isDropdownActive(item.dropdown) ? 'nav-link-active' : 'nav-link'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-melvin-bg-primary/95 backdrop-blur-dark border border-melvin-text-secondary/20 rounded-lg shadow-2xl z-50"
                          >
                            <div className="py-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.href}
                                  to={dropdownItem.href}
                                  className={`block px-4 py-3 text-sm transition-colors duration-300 ${
                                    isActive(dropdownItem.href)
                                      ? 'text-melvin-accent-cyan bg-melvin-accent-cyan/10'
                                      : 'text-melvin-text-secondary hover:text-melvin-accent-cyan hover:bg-melvin-text-secondary/5'
                                  }`}
                                >
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                } else {
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={isActive(item.href) ? 'nav-link-active' : 'nav-link'}
                    >
                      {item.label}
                    </Link>
                  )
                }
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-melvin-text-primary hover:text-melvin-accent-cyan transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-melvin-bg-primary/95 backdrop-blur-lg" />
            <div className="fixed inset-0 flex items-center justify-center">
              <motion.nav
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center space-y-8"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={'href' in item ? item.href : item.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="text-center"
                  >
                    {'dropdown' in item ? (
                      <div className="space-y-4">
                        <span className="text-2xl text-melvin-accent-cyan font-manrope font-semibold">
                          {item.label}
                        </span>
                        <div className="space-y-3">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              to={dropdownItem.href}
                              className={`block text-lg ${
                                isActive(dropdownItem.href) ? 'nav-link-active' : 'nav-link'
                              }`}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-2xl ${
                          isActive(item.href) ? 'nav-link-active' : 'nav-link'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
