import React from 'react';
import { Helmet } from 'react-helmet-async';
import { melvinData } from '../../data/melvinData';
import './LaCuencaDeLoRiosDePiedra.css';

const LaCuencaDeLoRiosDePiedra: React.FC = () => {
  const proyecto = melvinData.proyectos["la-cuenca-de-los-rios-de-piedra"];

  return (
    <>
      <Helmet>
        <title>La Cuenca de los Ríos de Piedra - Melvin Records | Largometraje Documental</title>
        <meta name="description" content="La Cuenca de los Ríos de Piedra - Largometraje documental de Melvin Records galardonado con el primer lugar en FINI 2022. Una exploración audiovisual innovadora." />
        <meta name="keywords" content="La Cuenca de los Ríos de Piedra, documental, FINI 2022, Melvin Records, largometraje, premio" />
        <meta property="og:title" content="La Cuenca de los Ríos de Piedra - Melvin Records" />
        <meta property="og:description" content="Largometraje documental galardonado con el primer lugar en FINI 2022." />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.melvinrecords.gt.tc/proyectos/la-cuenca-de-los-rios-de-piedra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Cuenca de los Ríos de Piedra - Melvin Records" />
        <meta name="twitter:description" content="Largometraje documental galardonado con el primer lugar en FINI 2022." />
        <link rel="canonical" href="https://www.melvinrecords.gt.tc/proyectos/la-cuenca-de-los-rios-de-piedra" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            "name": proyecto.titulo,
            "description": proyecto.descripcion,
            "dateCreated": proyecto.año,
            "genre": "Documental",
            "director": {
              "@type": "Organization",
              "name": "Melvin Records"
            },
            "productionCompany": {
              "@type": "Organization",
              "name": "Melvin Records",
              "foundingDate": "2008"
            },
            "award": proyecto.premios,
            "url": "https://www.melvinrecords.gt.tc/proyectos/la-cuenca-de-los-rios-de-piedra"
          })}
        </script>
      </Helmet>

      <div className="cuenca-container">
        <header className="cuenca-header">
          <div className="cuenca-hero">
            <div className="breadcrumb">
              <a href="/proyectos">Proyectos</a>
              <span className="separator">→</span>
              <span>La Cuenca de los Ríos de Piedra</span>
            </div>
            <h1 className="cuenca-title">{proyecto.titulo}</h1>
            <div className="cuenca-meta">
              <span className="cuenca-type">{proyecto.tipo}</span>
              <span className="cuenca-year">{proyecto.año}</span>
            </div>
          </div>
        </header>

        <main className="cuenca-content">
          <section className="cuenca-description">
            <div className="description-content">
              <h2>Sobre el Proyecto</h2>
              <p className="lead-text">
                {proyecto.descripcion}
              </p>
              <p>
                Este largometraje documental representa una de las obras más significativas de Melvin Records, 
                consolidando su posición como colectivo innovador en el ámbito audiovisual mexicano. 
                La película fusiona técnicas narrativas tradicionales con tecnologías emergentes, 
                creando una experiencia cinematográfica única que ha sido reconocida internacionalmente.
              </p>
            </div>
            <div className="cuenca-image-placeholder">
              <div className="image-container">
                <span className="image-text">Imagen del proyecto</span>
              </div>
            </div>
          </section>

          <section className="cuenca-awards">
            <h2>Reconocimientos y Premios</h2>
            <div className="awards-grid">
              {proyecto.premios.map((premio, index) => (
                <div key={index} className="award-card">
                  <div className="award-icon">🏆</div>
                  <div className="award-content">
                    <h3>{premio}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cuenca-tecnologias">
            <h2>Innovación Tecnológica</h2>
            <p>
              La producción de "La Cuenca de los Ríos de Piedra" incorporó tecnologías de vanguardia 
              que caracterizan el trabajo de Melvin Records:
            </p>
            <div className="tecnologias-grid">
              {proyecto.tecnologias?.map((tech, index) => (
                <div key={index} className="tech-card">
                  <span className="tech-name">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="cuenca-impact">
            <div className="impact-content">
              <h2>Impacto Cultural</h2>
              <p>
                Este proyecto ha demostrado la capacidad de Melvin Records para crear contenidos 
                que trascienden las fronteras tradicionales del documental, incorporando elementos 
                de arte digital, realidad aumentada e inteligencia artificial para generar nuevas 
                formas de narrativa audiovisual.
              </p>
              <p>
                El reconocimiento internacional obtenido, incluyendo el prestigioso primer lugar 
                en el Festival Internacional de la Imagen (FINI) 2022, confirma la relevancia 
                de esta obra en el panorama del cine documental contemporáneo.
              </p>
            </div>
          </section>

          <section className="cuenca-specs">
            <h2>Ficha Técnica</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <h3>Tipo</h3>
                <p>{proyecto.tipo}</p>
              </div>
              <div className="spec-item">
                <h3>Año de Producción</h3>
                <p>{proyecto.año}</p>
              </div>
              <div className="spec-item">
                <h3>Productora</h3>
                <p>Melvin Records</p>
              </div>
              <div className="spec-item">
                <h3>País</h3>
                <p>México</p>
              </div>
              <div className="spec-item">
                <h3>Tecnologías</h3>
                <p>{proyecto.tecnologias?.join(', ')}</p>
              </div>
              <div className="spec-item">
                <h3>Primer Premio</h3>
                <p>FINI 2022 - Video Documental Profesional</p>
              </div>
            </div>
          </section>

          <section className="cuenca-related">
            <h2>Proyectos Relacionados</h2>
            <div className="related-grid">
              <a href="/proyectos/invasion" className="related-card">
                <h3>Invasión</h3>
                <p>Proyecto audiovisual experimental</p>
              </a>
              <a href="/proyectos/cuerpos-de-agua" className="related-card">
                <h3>Cuerpos de Agua</h3>
                <p>Instalación audiovisual interactiva</p>
              </a>
              <a href="/documentales/cibertrip" className="related-card">
                <h3>Cibertrip</h3>
                <p>Exploración digital de realidades virtuales</p>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default LaCuencaDeLoRiosDePiedra;