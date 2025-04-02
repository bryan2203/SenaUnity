import React from "react";
import { useState, useEffect } from "react";

import "./Slider.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

const images = [slider1, slider2, slider3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Precargar todas las imágenes antes de mostrarlas
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
        // En caso de error, igualmente mostramos lo que podamos
        setImagesLoaded(true);
      }
    };
    
    loadImages();
  }, []);

  // Cambio automático de imágenes
  useEffect(() => {
    if (!imagesLoaded || isTransitioning) return;
    
    const interval = setInterval(() => {
      changeSlide((currentIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [imagesLoaded, currentIndex, isTransitioning]);

  const changeSlide = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
    
    // Después de la animación, limpiamos el estado
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
    }, 800); // Tiempo igual a la duración de la animación
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {imagesLoaded ? (
          <div className="image-container">
            {/* Imagen actual que entra desde la derecha */}
            <img 
              src={images[currentIndex]} 
              alt={`Slider ${currentIndex + 1}`} 
              className="slider-image slide-in-right" 
              key={`slide-${currentIndex}`}
            />
            
            {/* Imagen anterior que sale hacia la izquierda */}
            {isTransitioning && prevIndex !== null && (
              <img 
                src={images[prevIndex]} 
                alt={`Slider ${prevIndex + 1}`} 
                className="slider-image slide-out-left" 
                key={`slide-prev-${prevIndex}`}
              />
            )}
          </div>
        ) : (
          <div className="slider-loading">Cargando imágenes...</div>
        )}
        
        <button className="slider-button">Ver más</button>
      </div>
    </div>
  );
};

export default Slider;