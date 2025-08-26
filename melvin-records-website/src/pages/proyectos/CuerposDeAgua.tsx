import React from 'react';
import { Helmet } from 'react-helmet-async';
import { melvinData } from '../../data/melvinData';
import './CuerposDeAgua.css';

const CuerposDeAgua: React.FC = () => {
  const proyecto = melvinData.proyectos["cuerpos-de-agua"];

  return (
    <>
      <Helmet>
        <title>Cuerpos de Agua - Melvin Records | Instalación Audiovisual Interactiva</title>
        <meta name="description" content="Cuerpos de Agua - Instalación audiovisual interactiva de Melvin Records que explora la relación entre el ser humano y los ecosistemas acuáticos." />
        <meta name="keywords" content="Cuerpos de Agua, instalación audiovisual, arte interactivo, ecosistemas acuáticos, Melvin Records, agua" />
        <meta property="og:title" content="Cuerpos de Agua - Melvin Records" />
        <meta property="og:description" content="Instalación audiovisual interactiva que explora la relación entre el ser humano y los ecosistemas acuáticos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.melvinrecords.com/proyectos/cuerpos-de-agua" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cuerpos de Agua - Melvin Records" />
        <meta name="twitter:description" content="Instalación audiovisual interactiva que explora la relación entre el ser humano y los ecosistemas acuáticos." />
        <link rel="canonical" href="https://www.melvinrecords.com/proyectos/cuerpos-de-agua" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualArtwork",
            "name": proyecto.titulo,
            "description": proyecto.descripcion,
            "artMedium": "Instalación audiovisual interactiva",
            "genre": "Arte digital contemporáneo",
            "creator": {
              "@type": "Organization",
              "name": "Melvin Records",
              "foundingDate": "2008"
            },
            "url": "https://www.melvinrecords.com/proyectos/cuerpos-de-agua",
            "keywords": "instalación, audiovisual, interactivo, agua, ecosistemas"
          })}
        </script>
      </Helmet>

      <div className="cuerpos-container">
        <header className="cuerpos-header">
          <div className="cuerpos-hero">
            <div className="breadcrumb">
              <a href="/proyectos">Proyectos</a>
              <span className="separator">→</span>
              <span>Cuerpos de Agua</span>
            </div>
            <h1 className="cuerpos-title">{proyecto.titulo}</h1>
            <div className="cuerpos-meta">
              <span className="cuerpos-type">{proyecto.tipo}</span>
            </div>
          </div>
        </header>

        <main className="cuerpos-content">
          <section className="cuerpos-description">
            <div className="description-content">
              <h2>Sobre el Proyecto</h2>
              <p className="lead-text">
                {proyecto.descripcion}
              </p>
              <p>
                "Cuerpos de Agua" es una instalación audiovisual interactiva que invita al espectador 
                a reflexionar sobre nuestra relación íntima y fundamental con el agua como elemento 
                vital. La obra explora cómo los ecosistemas acuáticos funcionan como metáfora de los 
                procesos internos del cuerpo humano y los sistemas sociales.
              </p>
              <p>
                A través de tecnologías de detección de movimiento y proyecciones inmersivas, 
                la instalación responde a la presencia del espectador, creando paisajes sonoros 
                y visuales que evocan diferentes estados del agua: desde la calma de un lago 
                hasta la turbulencia de una tormenta.
              </p>
            </div>
            <div className="cuerpos-image-container">
              <div className="interactive-demo">
                <div className="water-simulation">
                  <div className="water-layer layer-1"></div>
                  <div className="water-layer layer-2"></div>
                  <div className="water-layer layer-3"></div>
                </div>
                <span className="demo-text">Simulación interactiva</span>
              </div>
            </div>
          </section>

          <section className="cuerpos-conceptos">
            <h2>Conceptos Centrales</h2>
            <div className="conceptos-grid">
              <div className="concepto-card">
                <div className="concepto-icon">🌊</div>
                <h3>Fluidez y Movimiento</h3>
                <p>
                  El agua como metáfora de los procesos de cambio y transformación 
                  constante en los sistemas naturales y humanos.
                </p>
              </div>
              <div className="concepto-card">
                <div className="concepto-icon">🔄</div>
                <h3>Ciclos Naturales</h3>
                <p>
                  Exploración de los ciclos del agua como modelo para entender 
                  los ritmos de la vida y la regeneración ecosistémica.
                </p>
              </div>
              <div className="concepto-card">
                <div className="concepto-icon">🤝</div>
                <h3>Interconexión</h3>
                <p>
                  La interdependencia entre todos los seres vivos a través 
                  del elemento agua como conector universal.
                </p>
              </div>
              <div className="concepto-card">
                <div className="concepto-icon">⚠️</div>
                <h3>Vulnerabilidad</h3>
                <p>
                  Reflexión sobre la fragilidad de los ecosistemas acuáticos 
                  y la urgencia de su protección.
                </p>
              </div>
            </div>
          </section>

          <section className="cuerpos-tecnologia">
            <h2>Tecnología e Interactividad</h2>
            <div className="tech-content">
              <div className="tech-description">
                <p>
                  La instalación utiliza un sistema complejo de sensores y proyecciones 
                  que transforman el espacio en un ecosistema reactivo. Los visitantes 
                  pueden influir en la obra mediante sus movimientos, creando ondas 
                  visuales y sonoras que simulan la interacción con cuerpos de agua reales.
                </p>
              </div>
              <div className="tech-specs">
                <div className="spec-item">
                  <h4>Sensores de Movimiento</h4>
                  <p>Detección en tiempo real de la presencia y gestos del público</p>
                </div>
                <div className="spec-item">
                  <h4>Proyección Inmersiva</h4>
                  <p>Múltiples proyectores crean un ambiente visual envolvente</p>
                </div>
                <div className="spec-item">
                  <h4>Audio Espacializado</h4>
                  <p>Sistema de sonido multicanal que simula ecosistemas sonoros</p>
                </div>
                <div className="spec-item">
                  <h4>Algoritmos Generativos</h4>
                  <p>Código que simula comportamientos fluidos y naturales</p>
                </div>
              </div>
            </div>
          </section>

          <section className="cuerpos-experiencia">
            <div className="experiencia-content">
              <h2>La Experiencia del Espectador</h2>
              <div className="experiencia-fases">
                <div className="fase-item">
                  <div className="fase-numero">01</div>
                  <div className="fase-content">
                    <h3>Inmersión</h3>
                    <p>
                      Al entrar al espacio, el visitante se encuentra rodeado por proyecciones 
                      que simulan estar bajo el agua, con sonidos ambientales que evocan 
                      diferentes ecosistemas acuáticos.
                    </p>
                  </div>
                </div>
                <div className="fase-item">
                  <div className="fase-numero">02</div>
                  <div className="fase-content">
                    <h3>Interacción</h3>
                    <p>
                      Los movimientos del espectador generan ondas y perturbaciones en el 
                      ambiente visual, creando una sensación de estar alterando un ecosistema real.
                    </p>
                  </div>
                </div>
                <div className="fase-item">
                  <div className="fase-numero">03</div>
                  <div className="fase-content">
                    <h3>Reflexión</h3>
                    <p>
                      La obra conduce a una contemplación sobre nuestro impacto en los 
                      ecosistemas naturales y la responsabilidad que tenemos hacia ellos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cuerpos-contexto">
            <h2>Contexto y Relevancia</h2>
            <div className="contexto-grid">
              <div className="contexto-item">
                <h3>Crisis Hídrica Global</h3>
                <p>
                  La obra se enmarca en el contexto de la crisis global del agua, 
                  donde la escasez y contaminación de recursos hídricos afecta 
                  a millones de personas y ecosistemas en todo el mundo.
                </p>
              </div>
              <div className="contexto-item">
                <h3>Arte y Conciencia Ambiental</h3>
                <p>
                  Utilizando el arte como herramienta de sensibilización, 
                  la instalación busca generar una conexión emocional con 
                  los problemas ambientales contemporáneos.
                </p>
              </div>
              <div className="contexto-item">
                <h3>Tecnología para el Cambio</h3>
                <p>
                  Demuestra cómo las nuevas tecnologías pueden ser aliadas 
                  en la creación de experiencias que promuevan la conciencia 
                  ecológica y el cambio de comportamientos.
                </p>
              </div>
            </div>
          </section>

          <section className="cuerpos-related">
            <h2>Proyectos Relacionados</h2>
            <div className="related-grid">
              <a href="/proyectos/la-cuenca-de-los-rios-de-piedra" className="related-card">
                <h3>La Cuenca de los Ríos de Piedra</h3>
                <p>Largometraje documental galardonado</p>
              </a>
              <a href="/proyectos/microplastic-human-nature" className="related-card">
                <h3>Microplastic + Human + Nature</h3>
                <p>Arte digital sobre contaminación</p>
              </a>
              <a href="/proyectos/invasion" className="related-card">
                <h3>Invasión</h3>
                <p>Instalación + performance</p>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CuerposDeAgua;