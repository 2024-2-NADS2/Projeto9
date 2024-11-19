import React, { useState, useEffect } from 'react';
import styles from './TestimonialCard.module.css';
import pinscherRelatoUm from '../../assets/images/pinscher_relato1.png';
import pinscherRelatoDois from '../../assets/images/pinscher_relato2.png';
import pinscherRelatoTres from '../../assets/images/pinscher_relato3.png';
import pinscherRelatoQuatro from '../../assets/images/pinscher_relato4.png';
import deborahPavanelli from '../../assets/images/deborah.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: "Déborah Pavanelli",
    location: "São Paulo - SP",
    text: "Acabei de adotar dois cachorros, e isso tem sido uma das melhores decisões da minha vida! São o Tisco e o  Beto, e desde o momento em que eles chegaram em casa, trouxe tanta alegria e amor. Ver a felicidade nos olhos deles ao correr pelo quintal ou se aconchegar no sofá é simplesmente indescritível.\nTudo isso só foi possível graças ao FindingPet. O site tornou o processo de adoção super simples e acessível. Além de ter uma interface amigável, eles cuidam de cada detalhe para garantir que os animais encontrem lares amorosos. Foi incrível ver como eles se importam com cada pet e com cada pessoa que busca adotar.",
    images: [pinscherRelatoUm, pinscherRelatoDois, pinscherRelatoTres, pinscherRelatoQuatro]
  },
  {
    name: "Matheus Antero",
    location: "São Paulo - SP",
    text: "Adotar o Bolota foi a melhor coisa que fiz para minha família. Ele trouxe tanta alegria e amor para nossa casa. O processo no FindingPet foi muito tranquilo e rápido, e eu recomendo a todos que busquem adotar ao invés de comprar.",
    images: [pinscherRelatoDois, pinscherRelatoUm, pinscherRelatoQuatro, pinscherRelatoTres]
  },
  {
    name: "Lucas Gomes",
    location: "Montes Claros - MG",
    text: "Sempre quis ter um cachorro, mas tinha dúvidas sobre adoção. Graças ao FindingPet, encontrei o companheiro ideal, o Spike. Eles cuidaram de todos os detalhes para que o processo fosse o mais tranquilo possível.",
    images: [pinscherRelatoTres, pinscherRelatoQuatro, pinscherRelatoUm, pinscherRelatoDois]
  },
  {
    name: "Anie Bissoli",
    location: " Guarujá - SP",
    text: "Sempre quis ter um cachorro, mas tinha dúvidas sobre adoção. Graças ao FindingPet, encontrei o companheiro ideal, o Spike. Eles cuidaram de todos os detalhes para que o processo fosse o mais tranquilo possível.",
    images: [pinscherRelatoTres, pinscherRelatoQuatro, pinscherRelatoUm, pinscherRelatoDois]
  }

];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }

    const handleStorageChange = (event) => {
      if (event.key === 'theme') {
        setDarkMode(event.newValue === 'dark');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const goToNextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 1000);
  };

  const goToPreviousTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(goToNextTestimonial, 9000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={styles.testimonialSection}>
      <div>
        <h1>FindingPet Lovers</h1>
      </div>
      <div
        className={`${styles.testimonialCard} ${fade ? styles.fadeIn : styles.fadeOut} ${currentTestimonial.class} ${darkMode ? 'dark-mode' : ''} testemunialCard`}
        id="conteinerCard"
      >
        <div className={styles.personImage}>
          <img src={deborahPavanelli} alt={currentTestimonial.name} />
        </div>
        <div className={styles.textImage}>
          <div className={styles.testimonialText}>
            <div className={styles.testimonialPersonData}>
              <h2>{currentTestimonial.name}</h2>
              <span>{currentTestimonial.location}</span>
            </div>
            <p>{currentTestimonial.text}</p>
          </div>
          <div className={styles.petImagesContainer}>
            <div className={styles.petImages}>
              {currentTestimonial.images.map((image, index) => (
                <img key={index} src={image} alt={`Foto ${index + 1} dos pets adotados`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={goToPreviousTestimonial}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles.button} onClick={goToNextTestimonial}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
