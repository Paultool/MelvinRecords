import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { melvinData } from '../data/melvinData';
import './Contacto.css';

const Contacto: React.FC = () => {
  const { contacto } = melvinData;
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Melvin Records | Colectivo Artístico Multidisciplinario</title>
        <meta name="description" content="Contacta a Melvin Records para colaboraciones, proyectos artísticos y servicios de producción audiovisual. Colectivo artístico mexicano fundado en 2008." />
        <meta name="keywords" content="contacto, Melvin Records, colaboraciones, proyectos artísticos, México, producción audiovisual" />
        <meta property="og:title" content="Contacto - Melvin Records" />
        <meta property="og:description" content="Contacta a Melvin Records para colaboraciones y proyectos artísticos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.melvinrecords.gt.tc/contacto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - Melvin Records" />
        <meta name="twitter:description" content="Contacta a Melvin Records para colaboraciones y proyectos artísticos." />
        <link rel="canonical" href="https://www.melvinrecords.gt.tc/contacto" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto - Melvin Records",
            "description": "Página de contacto de Melvin Records",
            "url": "https://www.melvinrecords.gt.tc/contacto",
            "mainEntity": {
              "@type": "Organization",
              "name": "Melvin Records",
              "foundingDate": "2008",
              "email": contacto.email,
              "url": "https://www.melvinrecords.gt.tc",
              "sameAs": contacto.redesSociales?.map(red => red.url) || []
            }
          })}
        </script>
      </Helmet>

      <div className="contacto-container">
        <header className="contacto-header">
          <div className="contacto-hero">
            <h1 className="contacto-title">Contacto</h1>
            <p className="contacto-description">
              ¿Tienes un proyecto en mente? ¿Quieres colaborar con nosotros? 
              Estamos aquí para escucharte y crear juntos.
            </p>
          </div>
        </header>

        <main className="contacto-content">
          <div className="contacto-grid">
            <section className="contacto-info">
              <h2>Información de Contacto</h2>
              
              <div className="info-card">
                <h3>Email</h3>
                <a href={`mailto:${contacto.email}`} className="contact-link">
                  {contacto.email}
                </a>
              </div>

              {contacto.telefono && (
                <div className="info-card">
                  <h3>Teléfono</h3>
                  <a href={`tel:${contacto.telefono}`} className="contact-link">
                    {contacto.telefono}
                  </a>
                </div>
              )}

              {contacto.direccion && (
                <div className="info-card">
                  <h3>Ubicación</h3>
                  <p className="contact-text">{contacto.direccion}</p>
                </div>
              )}

              {contacto.redesSociales && contacto.redesSociales.length > 0 && (
                <div className="info-card">
                  <h3>Redes Sociales</h3>
                  <div className="social-links">
                    {contacto.redesSociales.map((red, index) => (
                      <a 
                        key={index}
                        href={red.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        {red.nombre}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="info-card">
                <h3>Horarios</h3>
                <p className="contact-text">
                  Lunes a Viernes: 10:00 - 18:00<br />
                  Respuesta por email en 24-48 horas
                </p>
              </div>
            </section>

            <section className="contacto-form-section">
              <h2>Envíanos un Mensaje</h2>
              
              <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto *</label>
                  <select
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="colaboracion">Colaboración Artística</option>
                    <option value="servicios">Servicios de Producción</option>
                    <option value="talleres">Talleres y Cursos</option>
                    <option value="exhibicion">Exhibición de Obra</option>
                    <option value="prensa">Prensa y Medios</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="form-submit"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message success">
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    Error al enviar el mensaje. Por favor, intenta nuevamente.
                  </div>
                )}
              </form>
            </section>
          </div>

          <section className="contacto-colaboracion">
            <div className="colaboracion-content">
              <h2>Colaboraciones y Proyectos</h2>
              <p>
                Melvin Records está siempre abierto a nuevas colaboraciones. 
                Trabajamos con artistas, instituciones culturales, empresas y 
                organizaciones que compartan nuestra visión de crear contenido 
                innovador y significativo.
              </p>
              <div className="colaboracion-areas">
                <div className="area-item">
                  <h3>Proyectos Artísticos</h3>
                  <p>Instalaciones, arte digital, net art y nuevos medios</p>
                </div>
                <div className="area-item">
                  <h3>Producción Audiovisual</h3>
                  <p>Documentales, videos experimentales y contenido digital</p>
                </div>
                <div className="area-item">
                  <h3>Educación</h3>
                  <p>Talleres, conferencias y residencias artísticas</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contacto;