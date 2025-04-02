import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import './NuestrasSedes.css';
import centro1 from '../../assets/images/centro1.jpg';

const NuestrasSedes = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: false,
      offset: 100,
      startEvent: 'DOMContentLoaded'
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (!entry.isIntersecting) {
            // Cuando sale del viewport, reseteamos las clases
            element.querySelectorAll('.sede-card').forEach(card => {
              card.classList.remove('aos-animate');
            });
          } else {
            // Cuando entra en el viewport, activamos la animación
            element.querySelectorAll('.sede-card').forEach(card => {
              card.classList.add('aos-init');
              setTimeout(() => {
                card.classList.add('aos-animate');
              }, 50);
            });
          }
        });
      },
      { 
        threshold: 0.1 // Ajusta este valor según necesites
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="sedes-section" ref={sectionRef}>
      <div className="sedes-container">
        <img src={centro1} alt="" className="fondo-sedes" />
        <h2 className="titulo-sedes">nuestras sedes</h2>
        
        <div 
          className="sede-card sede-galan" 
          data-aos="slide-right"
          data-aos-duration="700"
        >
          <h3 className="sede-titulo">Centro de Comercio, Industria y Turismo</h3>
          <p className="sede-direccion">Cra. 18 #7-58, Armenia, Quindío</p>
          <p className="sede-telefono">67494999</p>
        </div>

        <div 
          className="sede-card sede-agroindustrial" 
          data-aos="slide-right"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <h3 className="sede-titulo">Centro Agroindustrial</h3>
          <p className="sede-direccion">Cra. 6 #29 Norte-269 a 29 Norte-345, Armenia, Quindío</p>
          <p className="sede-telefono">67495738</p>
        </div>

        <div 
          className="sede-card sede-comercio" 
          data-aos="slide-right"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <h3 className="sede-titulo">Centro para el Desarrollo Tecnológico de la Construcció</h3>
          <p className="sede-direccion">Cra. 6 #47 Norte-15, Armenia, Salento, Quindío</p>
          <p className="sede-telefono">67498118</p>
        </div>
      </div>
    </section>
  );
};

export default NuestrasSedes;
