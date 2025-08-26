import React from 'react';
import { Helmet } from 'react-helmet-async';
import { melvinData } from '../data/melvinData';
import './Servicios.css';

const Servicios: React.FC = () => {
  const { servicios } = melvinData;

  return (
    <>
      <Helmet>
        <title>Servicios - Melvin Records | Colectivo Artístico Multidisciplinario</title>
        <meta name="description" content="Descubre los servicios profesionales de Melvin Records: producción audiovisual, diseño gráfico, arte digital, consultoría en medios y más. Colectivo artístico fundado en 2008." />
        <meta name="keywords" content="servicios, producción audiovisual, diseño gráfico, arte digital, consultoría, Melvin Records, México" />
        <meta property="og:title" content="Servicios - Melvin Records" />
        <meta property="og:description" content="Servicios profesionales de producción audiovisual, diseño y arte digital de Melvin Records." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.melvinrecords.com/servicios" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios - Melvin Records" />
        <meta name="twitter:description" content="Servicios profesionales de producción audiovisual, diseño y arte digital de Melvin Records." />
        <link rel="canonical" href="https://www.melvinrecords.com/servicios" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Melvin Records",
            "url": "https://www.melvinrecords.com",
            "foundingDate": "2008",
            "description": "Colectivo artístico multidisciplinario mexicano especializado en producción audiovisual y arte digital",
            "offers": servicios.lista.map(servicio => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": servicio.titulo,
                "description": servicio.descripcion
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="servicios-container">
        <header className="servicios-header">
          <div className="servicios-hero">
            <h1 className="servicios-title">{servicios.titulo}</h1>
            <p className="servicios-description">
              {servicios.descripcion}
            </p>
          </div>
        </header>

        <main className="servicios-content">
          <section className="servicios-grid">
            {servicios.lista.map((servicio, index) => (
              <article key={index} className="servicio-card">
                <div className="servicio-header">
                  <h2 className="servicio-titulo">{servicio.titulo}</h2>
                </div>
                <div className="servicio-content">
                  <p className="servicio-descripcion">{servicio.descripcion}</p>
                  {servicio.caracteristicas && (
                    <div className="servicio-caracteristicas">
                      <h3>Características:</h3>
                      <ul>
                        {servicio.caracteristicas.map((caracteristica, idx) => (
                          <li key={idx}>{caracteristica}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>

          <section className="servicios-cta">
            <div className="cta-content">
              <h2>¿Interesado en nuestros servicios?</h2>
              <p>
                Melvin Records ofrece soluciones creativas y técnicas para proyectos artísticos, 
                culturales y comerciales. Contáctanos para discutir tu proyecto.
              </p>
              <a href="/contacto" className="cta-button">
                Contactar
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Servicios;