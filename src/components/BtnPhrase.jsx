import React, { useEffect } from 'react';
import getRandomNumber from '../utils/getRandomNumber';
import quotes from '../data/prases.json';
import photos from '../data/photos.json';

const BtnPhrase = ({ setPhraseSelected, setBgPhoto }) => {
//   useEffect(() => {
//     selectRandomBackground();
//   }, []); 
// Esto asegura que selectRandomBackground se ejecute solo una vez al cargar el componente

  const handleChange = () => {
    const indexRandom = getRandomNumber(quotes.length);
    setPhraseSelected(quotes[indexRandom]);
    setBgPhoto(photos[getRandomNumber(photos.length)]);
  };

  const selectRandomBackground = () => {
    // Selecciona un fondo aleatorio al cargar el componente
    setBgPhoto(photos[getRandomNumber(photos.length)]);
  };

  return (
    <div>
      <button onClick={handleChange}>Versiculo Diario</button>
    </div>
  );
};

export default BtnPhrase;
