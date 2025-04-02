import React, { useState, useEffect, useRef } from 'react';
import './InstrucFuncionarios.css';
import profesor1 from '../../assets/images/profesor1.jpg';
import profesor2 from '../../assets/images/profesor2.jpg';
import profesor3 from '../../assets/images/profesor3.jpg';
import profesor4 from '../../assets/images/profesor4.jpg';
import profesor5 from '../../assets/images/profesor5.jpg';
import profesor6 from '../../assets/images/profesor6.jpg';
import profesor7 from '../../assets/images/profesor7.jpg';
import profesor8 from '../../assets/images/profesor8.jpg';
import profesor9 from '../../assets/images/profesor9.jpg';
import profesor10 from '../../assets/images/profesor10.jpg';

const InstrucFuncionarios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const sectionRef = useRef(null);

  const instructores = [
    {
      id: 1,
      imagen: profesor1,
      calificacion: 4.5,
      nombre: 'Profesor 1'
    },
    {
      id: 2,
      imagen: profesor2,
      calificacion: 5,
      nombre: 'Profesor 2'
    },
    {
      id: 3,
      imagen: profesor3,
      calificacion: 4,
      nombre: 'Profesor 3'
    },
    {
      id: 4,
      imagen: profesor4,
      calificacion: 4.5,
      nombre: 'Profesor 4'
    },
    {
      id: 5,
      imagen: profesor5,
      calificacion: 5,
      nombre: 'Profesor 5'
    },
    {
      id: 6,
      imagen: profesor6,
      calificacion: 4,
      nombre: 'Profesor 6'
    },
    {
      id: 7,
      imagen: profesor7,
      calificacion: 4.5,
      nombre: 'Profesor 7'
    },
    {
      id: 8,
      imagen: profesor8,
      calificacion: 5,
      nombre: 'Profesor 8'
    },
    {
      id: 9,
      imagen: profesor9,
      calificacion: 4,
      nombre: 'Profesor 9'
    },
    {
      id: 10,
      imagen: profesor10,
      calificacion: 4.5,
      nombre: 'Profesor 10'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1); // Muestra solo 1 tarjeta en móvil
      } else if (window.innerWidth <= 992) {
        setCardsToShow(2); // Muestra 2 tarjetas en tablet
      } else {
        setCardsToShow(3); // Muestra 3 tarjetas en desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === instructores.length - cardsToShow ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [cardsToShow]);

  const renderEstrellas = (calificacion) => {
    const estrellas = [];
    for (let i = 0; i < 5; i++) {
      estrellas.push(
        <span key={i} className={`estrella ${i < calificacion ? 'activa' : ''}`}>
          ★
        </span>
      );
    }
    return estrellas;
  };

  return (
    <section className="instruc-funcionarios" ref={sectionRef}>
      <h2 className="titulo-principal">Nuestros Instructores y Funcionarios</h2>
      
      <div className="contenedor-principal">
        <div className="tarjetas-slider">
          {instructores.slice(currentIndex, currentIndex + cardsToShow).map((instructor) => (
            <div key={instructor.id} className="tarjeta">
              <div className="imagen-container">
                <img 
                  src={instructor.imagen} 
                  alt={instructor.nombre}
                  className="instructor-imagen"
                />
                <button className="ver-mas">Ver mas</button>
              </div>
              <div className="calificacion">
                {renderEstrellas(instructor.calificacion)}
              </div>
              <h3 className="nombre-instructor">{instructor.nombre}</h3>
            </div>
          ))}
          <div className="tarjeta tarjeta-califica">
            <h3>Califica Tus Instructores</h3>
            <button className="ver-mas">Ver mas</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrucFuncionarios;
